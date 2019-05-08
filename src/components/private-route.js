import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn, getUser } from "../services/auth"

const PrivateRoute = ({ component: Component, location, allowedRoles, ...rest }) => {

  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    // If the user is not logged in, redirect to the login page.
    navigate(`/app/login`)
    return null
  }

  const { role } = getUser()
  if(!allowedRoles.includes(role)) {
    // If the user don't have the role necessary, redirect to the 401 page.
    navigate(`/401`)
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute