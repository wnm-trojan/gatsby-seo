/**
 * Author: Waruna Nissanka
 * Email: warunanissanka44@gmail.com
 * Web: www.warunanissanka.com
 */
import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export const Seo = ({title, description, keyword, image, url, author}) => {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaTitle = title || data.site.siteMetadata.title
                const metaDescription = description || data.site.siteMetadata.description
                const metaKeywords = keyword || ["gatsby project", "seo", "waruna", "nissanka"]
                const metaImage = image || data.site.siteMetadata.image
                const metaUrl = url || data.site.siteMetadata.url
                const metaAuthor = author || data.site.siteMetadata.author
                return (
                    <Helmet
                    title={title}
                    meta={[
                        {
                            name: `description`,
                            content: metaDescription,
                        },
                        {
                            property: `og:title`,
                            content: metaTitle,
                        },
                        {
                            property: `og:description`,
                            content: metaDescription
                        }
                    ].concat(
                        metaKeywords && metaKeywords.length > 0 ? {
                            name: `keywords`,
                            content: metaKeywords.join(`, `),
                        } : []
                    )
                    }
                    />
                )
            }}
        />
    )
}

const detailsQuery = graphql`
    query DefaulySEOQuery {
        site {
            siteMetadata {
                title
                description
                author
                image
            }
        }
    }
`