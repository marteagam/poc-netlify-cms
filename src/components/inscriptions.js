import React from "react"
import { getInscriptions } from "../services/inscription"

const Inscriptions = () => (
  <>
    <h1>Inscripciones</h1>
    {getInscriptions().map((item, key) =>
        <ul key={key}>
            <li><strong>Nombre:</strong> {item.name}</li>
            <li><strong>E-mail:</strong> {item.email}</li>
            <li><strong>Telefono:</strong> {item.phone}</li>
            <li><strong>Ciudad:</strong> {item.city}</li>
            <li><strong>Ocupacion:</strong> {item.occupation}</li>
            <li><strong>Empresa:</strong> {item.company}</li>
            <li><strong>Cargo:</strong> {item.position}</li>
            <li><strong>Experiencia:</strong> {item.experience}</li>
            <li><strong>Paquete:</strong> {item.package}</li>
            <li><strong>Nombre para factura:</strong> {item.nameBill}</li>
            <li><strong>Codigo boleta:</strong> {item.voucher}</li>
            
            <hr></hr>
        </ul>
    )}
  </>
)

export default Inscriptions