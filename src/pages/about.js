import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <h1>about: {data.site.siteMetadata.title}</h1>
    <p>
      We are some pandas with opposable thumbs and we learned how to code. We now design and create websites for a living. Here is a collection of pictures of us eating :)
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`