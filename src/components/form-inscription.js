import React from "react"
import { handleInscription } from "../services/inscription"
import { navigate, StaticQuery, graphql} from "gatsby"

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
  }

  render() {
    const { 
      title, 
      description,
      sections
    } = this.props.data.form.frontmatter

    return (
      <>
        <h1>{title}</h1>
        <p>{description}</p>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/success-inscription`)
          }}
        >
          {sections.map((section, key) => {
              const { title, inputs } = section;
              return (
                <React.Fragment key={key}>
                  <h4
                    style={{
                      color: '#B62940'
                    }}
                  >
                    {title}
                  </h4>
                  <div 
                    style={{
                      paddingLeft: 50
                    }}
                  >
                    {inputs.map((field, key) => 
                      <React.Fragment key={key}>
                        { field.name !== "occupation" && 
                          <div 
                            style={{
                              display: `flex`,
                              flexDirection: `column`,
                              marginBottom: 15
                            }}
                          >
                            <label>{field.label}</label>
                            { field.name === "experience" && 
                              <select name="experience" onChange={this.handleUpdate} value={this.state.experience}>
                                <option value="< 1 año">{'< 1 año'}</option>
                                <option value="1 a 5 años">1 a 5 años</option>
                                <option value="5 a 10 años">5 a 10 años</option>
                                <option value="> 10 años">> 10 años</option>
                              </select>
                            }
                            { field.name === "package" && 
                              <select name="package" onChange={this.handleUpdate} value={this.state.package}>
                                <option value="TZ Xplorer">TZ Xplorer ( Bs. 249 )</option>
                              </select>
                            }
                            { field.name !== "experience" && field.name !== "package" && 
                              <input type="text" name={field.name} placeholder={field.placeholder} onChange={this.handleUpdate} />
                            }
                            <p
                              style={{
                                color: '#B62940',
                                fontSize: 12,
                                margin: 0
                              }}
                            >
                              {field.infoLabel}
                            </p>
                          </div>
                        }
                        { field.name === "occupation" && 
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
                              {field.infoLabel}
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
                        }
                      </React.Fragment>
                    )}
                  </div>
                </React.Fragment>
              )
            })
          }
          <input type="submit" value="Registrar" />
        </form>
      </>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        form: markdownRemark(fields: { slug: { eq: "/inscription/" } }) {
          frontmatter {
            title
            description
            url
            sections {
              title
              inputs {
                label
                placeholder
                name
                infoLabel
              }
            }
            buttonLabel
          }
        }
      }
    `}
    render={data => <FormInscription data={data} {...props} />}
  />
)