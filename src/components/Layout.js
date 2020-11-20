import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"

const Layout = ({ children }) => {
  return (
    <MDXProvider
      components={{
        p: (props) => <p {...props} />,
        h1: (props) => <h1 {...props} />,
        h2: (props) => <h2 {...props} />,
        h3: (props) => <h3 {...props} />,
        strong: (props) => <strong {...props} />,
        a: (props) => <a {...props} />,
        ul: (props) => <ul {...props} />,
        blockquote: (props) => <div {...props} />,
      }}
    >
      <main>{children}</main>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
