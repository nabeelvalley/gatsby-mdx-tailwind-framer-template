import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"

export default ({ data }) => {
  const { frontmatter, body } = data.mdx

  return (
    <Layout>
      <section>
        {frontmatter?.cover ? (
          <Img
            style={{ height: "30vh" }}
            fluid={frontmatter.cover.childImageSharp.fluid}
          />
        ) : null}
        {frontmatter?.title ? <h1>{frontmatter.title}</h1> : null}
          <MDXRenderer>{body}</MDXRenderer>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
query PageData($id: String) {
  mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
          title
          cover {
              childImageSharp {
                  fluid(traceSVG: { color: "#F56565" }) {
                      ...GatsbyImageSharpFluid_tracedSVG
                  }
              }
          }
      }
  }
}
`
