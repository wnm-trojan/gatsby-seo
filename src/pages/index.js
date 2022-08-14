import * as React from "react"
import { Seo } from "../components/seo"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Seo
        title={"Home Page"}
        description={"This is home page"}
      />
      <h1>Home Page</h1>
      <a href="/about">Go to About</a>
    </main>
  )
}

export default IndexPage

// export const Head = () => <title>Home Page</title>
