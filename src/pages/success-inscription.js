import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class SuccessInscriptionPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Inscrito correctamente: Gracias por Registrarse al TechZone"  />
        <h1>Inscrito correctamente</h1>
        <p>Gracias por registrarse al TechZone</p>
      </Layout>
    )
  }
}

export default SuccessInscriptionPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
