import React from "react"
import { getUser } from "../services/auth"

const Profile = () => (
  <>
    <h1>Tu perfil</h1>
    <ul>
      <li>Nombre: {getUser().name}</li>
      <li>E-mail: {getUser().email}</li>
      <li>Rol: {getUser().role === 'client' ? 'Cliente' : 'Administrador'}</li>
    </ul>
  </>
)

export default Profile