import * as React from "react"
import { Seo } from "../components/seo"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


const AboutPage = () => {
  return (
    <main style={pageStyles}>
        <Seo
            title={"About Page"}
            description={"This is about page"}
        />
        <h1>About Page</h1>
        <a href="/">Back to Home</a>
    </main>
  )
}

export default AboutPage

// export const Head = () => <title>About Page</title>
