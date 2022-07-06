import React, { createRef } from 'react'
import { Dimmer, Loader, Grid, Message } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/global.css'
import { SubstrateContextProvider, useSubstrateState } from './substrate-lib'
import ScreensHome from './screens/Home/Home'
import ClaimRole from './components/User/ClaimRole'
import ConfirmVaccine from './components/User/ConfirmVaccine'

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
          <Route path="/user/confirm-vaccine" element={<ConfirmVaccine />} />
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
