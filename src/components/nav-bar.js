import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"

export default () => {
  const content = { message: "", login: true }
  if (isLoggedIn()) {
    content.message = `Hola, ${getUser().name}`
  } else {
    content.message = "Usted no se ha identificado"
  }
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
        marginBottom: 15
      }}
    >
      <span>{content.message}</span> 
      <nav>
        <Link to="/">Inicio</Link>
        {` `}
        <Link to="/app/profile">Perfil</Link> 
        {` `}
        <Link to="/app/form-inscription">Inscripción</Link>
        {` `}
        <Link to="/app/inscriptions">Inscripciones</Link> 
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
            Salir
          </a>
        ) : null}
      </nav>
    </div>
  )
}