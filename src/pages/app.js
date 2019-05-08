import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/private-route"
import Profile from "../components/profile"
import Login from "../components/login"
import FormInscription from "../components/form-inscription"
import Inscription from "../components/inscriptions"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} allowedRoles={['client']}/>
      <PrivateRoute path="/app/inscriptions" component={Inscription} allowedRoles={['admin']}/>
      <Login path="/app/login" />
      <FormInscription path="/app/form-inscription" />
    </Router>
  </Layout>
)

export default App