import React from "react"
import { handleInscription } from "../services/inscription"
import { navigate } from "gatsby"

class FormInscription extends React.Component {
  state = {
    name: ``,
    email: ``,
    phone: ``,
    city: ``,
    occupation: ``,
    company: ``,
    position: ``,
    experience: `< 1 año`,
    package: `TZ Xplorer`,
    nameBill: ``,
    ci: ``,
    voucher: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleInscription(this.state)
    console.log('form data', this.state)
  }

  render() {

    return (
      <>
        <h1>Formulario de inscripción</h1>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/success-inscription`)
          }}
        >
          <h4
            style={{
              color: '#B62940'
            }}
          >
            Datos personales
          </h4>
          <div 
            style={{
                paddingLeft: 50
              }}
            >
            
            <div 
              style={{
                display: `flex`,
                flexDirection: `column`,
                marginBottom: 15
              }}
            >
              <label>Nombre completo</label>
              <input type="text" name="name" onChange={this.handleUpdate} />
              <p
                style={{
                  color: '#B62940',
                  fontSize: 12,
                  margin: 0
                }}
              >
                La información de este campo será utilizada para tu certificado.
              </p>
            </div>

            <div 
              style={{
                display: `flex`,
                flexDirection: `column`,
                marginBottom: 15
              }}
            >
              <label>Correo electrónico</label>
              <input type="text" name="email" onChange={this.handleUpdate} />
            </div>

            <div 
              style={{
                display: `flex`,
                flexDirection: `column`,
                marginBottom: 15
              }}
            >
              <label>Teléfono </label>
              <input type="text" name="phone" onChange={this.handleUpdate} />
            </div>

            <div 
              style={{
                display: `flex`,
                flexDirection: `column`,
                marginBottom: 15
              }}
            >
              <label>Ciudad</label>
              <input type="text" name="city" onChange={this.handleUpdate} />
            </div>

            <div 
              style={{
                marginBottom: 15
              }}
              onChange={this.handleUpdate}
            >
              <h5 
                style={{
                  marginBottom: 10,
                  marginTop: 10,
                }}
              >
                ¿Cuál es tu ocupación?
              </h5>
              <label>
                Profesional
                <input type="radio" value="professional" name="occupation" />
              </label>
              {` `}
              <label>
                Estudiante
                <input type="radio" value="student" name="occupation" />
              </label>
            </div>

            <div 
              style={{
                display: `flex`,
                flexDirection: `column`,
                marginBottom: 15
              }}
            >
              <label>Empresa en la que trabajas</label>
              <input type="text" name="company" onChange={this.handleUpdate} />
            </div>

            <div 
              style={{
                display: `flex`,
                flexDirection: `column`,
                marginBottom: 15
              }}
            >
              <label>Cargo</label>
              <input type="text" name="position" onChange={this.handleUpdate} />
            </div>

            <div 
              style={{
                display: `flex`,
                flexDirection: `column`,
                marginBottom: 15
              }}
            >
              <label>Tiempo de experiencia en años</label>
              <select name="experience" onChange={this.handleUpdate} value={this.state.experience}>
                <option value="< 1 año">{'< 1 año'}</option>
                <option value="1 a 5 años">1 a 5 años</option>
                <option value="5 a 10 años">5 a 10 años</option>
                <option value="> 10 años">> 10 años</option>
              </select>
            </div>

          </div>
          
          <h4
            style={{
              color: '#B62940'
            }}
          >
            Datos de inscripción
          </h4>

          <div 
            style={{
              paddingLeft: 50
            }}
          >
            <div 
              style={{
                display: `flex`,
                flexDirection: `column`,
                marginBottom: 15
              }}
            >
              <label>Paquete</label>
              <select name="package" onChange={this.handleUpdate} value={this.state.package}>
                <option value="TZ Xplorer">TZ Xplorer ( Bs. 249 )</option>
              </select>
            </div>

            <div 
              style={{
                display: `flex`,
                flexDirection: `column`,
                marginBottom: 15
              }}
            >
              <label>Nombre para la factura</label>
              <input type="text" name="nameBill" onChange={this.handleUpdate} />
            </div>

            <div 
              style={{
                display: `flex`,
                flexDirection: `column`,
                marginBottom: 15
              }}
            >
              <label>NIT ó CI para factura</label>
              <input type="text" name="ci" onChange={this.handleUpdate} />
            </div>

            <div 
              style={{
                display: `flex`,
                flexDirection: `column`,
                marginBottom: 15
              }}
            >
              <label>Código de boleta de depósito bancario</label>
              <input type="text" name="voucher" onChange={this.handleUpdate} />
            </div>
          </div>
          <input type="submit" value="Registrar" />
        </form>
      </>
    )
  }
}

export default FormInscription