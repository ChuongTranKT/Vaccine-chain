import React, { createRef } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Dimmer, Grid, Loader, Message } from 'semantic-ui-react'
import ReceiveVaccine from './components/Distributer/ReceiveVaccine'
import TransferGetVaccineRight from './components/Distributer/TransferGetVaccineRight'
import TransferVaccine from './components/Distributer/TransferVaccine'
import RegisterVaccine from './components/Manufacture/RegisterVaccine'
import ApproveVaccine from './components/Organaization/ApproveVaccine'
import ApproveRole from './components/SystemManager/ApproveRole'
import ClaimRole from './components/User/ClaimRole'
import ConfirmVaccine from './components/User/ConfirmVaccine'
import Register from './components/User/Register'
import ScreensHome from './screens/Home/Home'
import './styles/global.css'
import { SubstrateContextProvider, useSubstrateState } from './substrate-lib'

function Main() {
  const { apiState, apiError, keyringState } = useSubstrateState()

  const loader = text => (
    <Dimmer active>
      <Loader size="small">{text}</Loader>
    </Dimmer>
  )

  const message = errObj => (
    <Grid centered columns={2} padded>
      <Grid.Column>
        <Message
          negative
          compact
          floating
          header="Error Connecting to Substrate"
          content={`Connection to websocket '${errObj.target.url}' failed.`}
        />
      </Grid.Column>
    </Grid>
  )

  if (apiState === 'ERROR') return message(apiError)
  else if (apiState !== 'READY') return loader('Connecting to Substrate')

  if (keyringState !== 'READY') {
    return loader(
      "Loading accounts (please review any extension's authorization)"
    )
  }

  const contextRef = createRef()

  return (
    <div ref={contextRef}>
      <Router>
        <Routes>
          <Route path="/" element={<ScreensHome />} />
          <Route path="/user/claim-role" element={<ClaimRole />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/confirm-vaccine" element={<ConfirmVaccine />} />
          <Route
            path="/system-manager/approve-role"
            element={<ApproveRole />}
          />
          <Route
            path="/manufacture/register-vaccine"
            element={<RegisterVaccine />}
          />
          <Route
            path="/manufacture/receive-vaccine"
            element={<ReceiveVaccine />}
          />
          <Route
            path="/manufacture/transfer-vaccine"
            element={<TransferVaccine />}
          />
          <Route
            path="/distributer/receive-vaccine"
            element={<ReceiveVaccine />}
          />
          <Route
            path="/distributer/transfer-vaccine"
            element={<TransferVaccine />}
          />
          <Route
            path="/distributer/transfer-get-vaccine"
            element={<TransferGetVaccineRight />}
          />
          <Route
            path="/approved-organization/approve-vaccine"
            element={<ApproveVaccine />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default function App() {
  return (
    <SubstrateContextProvider>
      <Main />
    </SubstrateContextProvider>
  )
}
