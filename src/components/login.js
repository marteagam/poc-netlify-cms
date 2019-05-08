import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
      <>
        <h1>Iniciar sesión</h1>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/app/profile`)
          }}
          style={{
            maxWidth: `40%`
          }}
        >
          <div 
            style={{
              display: `flex`,
              flexDirection: `column`,
              marginBottom: 15
            }}
          >
            <label>Nombre de usuario</label>
            <input type="text" name="username" onChange={this.handleUpdate} />
          </div>
          <div 
            style={{
              display: `flex`,
              flexDirection: `column`,
              marginBottom: 15
            }}
          >
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </div>
          <input type="submit" value="Iniciar sesión" />
        </form>
      </>
    )
  }
}

export default Login