import { Grid, Stack, Typography, Box } from '@mui/material'
import React, { useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useSubstrate } from '../../../substrate-lib'

import { Button, Dropdown } from 'semantic-ui-react'

const acctAddr = acct => (acct ? acct.address : '')
const Header = () => {
  const {
    setCurrentAccount,
    state: { keyring, currentAccount },
  } = useSubstrate()

  // Get the list of accounts we possess the private key for
  const keyringOptions = keyring.getPairs().map(account => ({
    key: account.address,
    value: account.address,
    text: account.meta.name.toUpperCase(),
    icon: 'user',
  }))

  const initialAddress =
    keyringOptions.length > 0 ? keyringOptions[0].value : ''

  // Set the initial address
  useEffect(() => {
    // `setCurrentAccount()` is called only when currentAccount is null (uninitialized)
    !currentAccount &&
      initialAddress.length > 0 &&
      setCurrentAccount(keyring.getPair(initialAddress))
  }, [currentAccount, setCurrentAccount, keyring, initialAddress])

  const onChange = addr => {
    setCurrentAccount(keyring.getPair(addr))
  }
  return (
    <Box sx={{ backgroundColor: 'rgba(217, 217, 217, 1)' }}>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid item md={10}>
          <Stack sx={{ height: 50 }} justifyContent="center">
            <Typography
              variant="content"
              color="initial"
              sx={{ fontSize: '2rem', ml: 25 }}
              align="center"
            >
              Demo
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={2}>
          <CopyToClipboard text={acctAddr(currentAccount)}>
            <Button
              basic
              circular
              size="large"
              icon="user"
              color={currentAccount ? 'green' : 'red'}
            />
          </CopyToClipboard>
          <Dropdown
            search
            selection
            clearable
            placeholder="Select an account"
            options={keyringOptions}
            onChange={(_, dropdown) => {
              onChange(dropdown.value)
            }}
            value={acctAddr(currentAccount)}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Header
