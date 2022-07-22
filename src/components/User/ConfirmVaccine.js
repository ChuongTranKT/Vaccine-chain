import {
  Box,
  Button,
  Container,
  Grid,
  InputLabel,
  Stack,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from 'semantic-ui-react'
import '../../styles/input.css'
import { useSubstrateState } from '../../substrate-lib'
import { TxButton } from '../../substrate-lib/components'
import Header from '../UI/Header/Header'
import AccountMain from '../User/AccountMain'

const argIsOptional = arg => arg.type.toString().startsWith('Optional<')

const ConfirmVaccine = () => {
  const { api, jsonrpc } = useSubstrateState()
  const [status, setStatus] = useState(null)

  const [interxType] = useState('EXTRINSIC')
  const [, setPalletRPCs] = useState([])
  const [, setCallables] = useState([])
  const [paramFields, setParamFields] = useState([])

  const initFormState = {
    palletRpc: 'vaccine',
    callable: 'confirmVaccine',
    inputParams: [],
  }

  const [formState, setFormState] = useState(initFormState)
  const { palletRpc, callable, inputParams } = formState

  const getApiType = (api, interxType) => {
    if (interxType === 'QUERY') {
      return api.query
    } else if (interxType === 'EXTRINSIC') {
      return api.tx
    } else if (interxType === 'RPC') {
      return api.rpc
    } else {
      return api.consts
    }
  }

  const updatePalletRPCs = () => {
    if (!api) {
      return
    }
    const apiType = getApiType(api, interxType)
    const palletRPCs = Object.keys(apiType)
      .sort()
      .filter(pr => Object.keys(apiType[pr]).length > 0)
      .map(pr => ({ key: pr, value: pr, text: pr }))
    setPalletRPCs(palletRPCs)
  }

  const updateCallables = () => {
    if (!api || palletRpc === '') {
      return
    }
    const callables = Object.keys(getApiType(api, interxType)[palletRpc])
      .sort()
      .map(c => ({ key: c, value: c, text: c }))
    setCallables(callables)
  }

  const updateParamFields = () => {
    if (!api || palletRpc === '' || callable === '') {
      setParamFields([])
      return
    }

    let paramFields = []

    if (interxType === 'QUERY') {
      const metaType = api.query[palletRpc][callable].meta.type
      if (metaType.isPlain) {
        // Do nothing as `paramFields` is already set to []
      } else if (metaType.isMap) {
        paramFields = [
          {
            name: metaType.asMap.key.toString(),
            type: metaType.asMap.key.toString(),
            optional: false,
          },
        ]
      } else if (metaType.isDoubleMap) {
        paramFields = [
          {
            name: metaType.asDoubleMap.key1.toString(),
            type: metaType.asDoubleMap.key1.toString(),
            optional: false,
          },
          {
            name: metaType.asDoubleMap.key2.toString(),
            type: metaType.asDoubleMap.key2.toString(),
            optional: false,
          },
        ]
      }
    } else if (interxType === 'EXTRINSIC') {
      const metaArgs = api.tx[palletRpc][callable].meta.args

      if (metaArgs && metaArgs.length > 0) {
        paramFields = metaArgs.map(arg => ({
          name: arg.name.toString(),
          type: arg.type.toString(),
          optional: argIsOptional(arg),
        }))
      }
    } else if (interxType === 'RPC') {
      let metaParam = []

      if (jsonrpc[palletRpc] && jsonrpc[palletRpc][callable]) {
        metaParam = jsonrpc[palletRpc][callable].params
      }

      if (metaParam.length > 0) {
        paramFields = metaParam.map(arg => ({
          name: arg.name,
          type: arg.type,
          optional: arg.isOptional || false,
        }))
      }
    } else if (interxType === 'CONSTANT') {
      paramFields = []
    }

    setParamFields(paramFields)
  }

  useEffect(updatePalletRPCs, [api, interxType])
  useEffect(updateCallables, [api, interxType, palletRpc])
  useEffect(updateParamFields, [api, interxType, palletRpc, callable, jsonrpc])

  const onPalletCallableParamChange = (_, data) => {
    setFormState(formState => {
      let res
      const { state, value } = data
      if (typeof state === 'object') {
        // Input parameter updated
        const {
          ind,
          paramField: { type },
        } = state
        const inputParams = [...formState.inputParams]
        inputParams[ind] = { type, value }
        res = { ...formState, inputParams }
      } else if (state === 'palletRpc') {
        res = { ...formState, [state]: value, callable: '', inputParams: [] }
      } else if (state === 'callable') {
        res = { ...formState, [state]: value, inputParams: [] }
      }
      return res
    })
  }

  const labelNames = [
    {
      value: 'Vaccine Owner ID',
    },
    {
      value: 'Vaccine ID',
    },
  ]
  return (
    <Grid container direction="column" rowSpacing={8}>
      <Grid item md>
        <Header />
      </Grid>
      <Grid item md>
        <Container>
          <Stack spacing={8}>
            <Stack>
              <Typography
                variant="content"
                color="initial"
                sx={{ fontSize: '4.8rem', fontWeight: 600 }}
                align="center"
              >
                Confirm Vaccine
              </Typography>
            </Stack>
            <Stack spacing={1} sx={{ px: 20 }}>
              <InputLabel sx={{ fontSize: '2rem' }}>Your ID</InputLabel>
              <AccountMain />
            </Stack>
            {paramFields.map((paramField, ind) => (
              <Stack
                spacing={1}
                sx={{ px: 20 }}
                key={`${paramField.name}-${paramField.type}`}
              >
                {paramField.optional ? (
                  <InputLabel sx={{ fontSize: '2rem' }}>
                    {labelNames[ind].value}
                  </InputLabel>
                ) : (
                  <InputLabel sx={{ fontSize: '2rem' }}>
                    {labelNames[ind].value}
                  </InputLabel>
                )}

                <Input
                  id="vaccineTypeID"
                  type="text"
                  name="vaccineTypeID"
                  fluid
                  placeholder={paramField.type}
                  className="input-style"
                  state={{ ind, paramField }}
                  value={inputParams[ind] ? inputParams[ind].value : ''}
                  onChange={onPalletCallableParamChange}
                />
              </Stack>
            ))}
            {/* <Stack spacing={1} sx={{ px: 20 }}>
              <InputLabel sx={{ fontSize: '2rem' }}>Recipient ID</InputLabel>
              <Box
                sx={{
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;',
                  p: 2,
                  borderRadius: '0.6rem',
                }}
              >
                <InputBase
                  id="recipientID"
                  type="text"
                  name="recipientID"
                  placeholder="Recipient ID"
                  required
                  fullWidth
                  sx={{ fontSize: '1.6rem' }}
                />
              </Box>
            </Stack> */}
            <Stack
              direction="row"
              justifyContent="flex-end"
              spacing={2}
              sx={{ px: 20 }}
            >
              <Stack>
                <Link to="/">
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ px: 5, py: 1, fontSize: '1.6rem' }}
                  >
                    Back to home
                  </Button>
                </Link>
              </Stack>
              <Stack>
                <InteractorSubmit
                  setStatus={setStatus}
                  attrs={{
                    interxType,
                    palletRpc,
                    callable,
                    inputParams,
                    paramFields,
                  }}
                />
              </Stack>
            </Stack>
            <Container>
              <Box>{status}</Box>
            </Container>
          </Stack>
        </Container>
      </Grid>
    </Grid>
  )
}

export default ConfirmVaccine

function InteractorSubmit(props) {
  const {
    attrs: { interxType },
  } = props
  if (interxType === 'QUERY') {
    return <TxButton label="Query" type="QUERY" color="blue" {...props} />
  } else if (interxType === 'EXTRINSIC') {
    return <TxButton label="Run" type="SIGNED-TX" color="red" {...props} />
  } else if (interxType === 'RPC' || interxType === 'CONSTANT') {
    return <TxButton label="Submit" type={interxType} color="blue" {...props} />
  }
}
