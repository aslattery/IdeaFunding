module.exports = {
    siteMetadata: {
        siteUrl: `https://vote.ideafunding.org`,
        twitterUsername: `@startuptucson`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {}
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Startup Tucson's IdeaFunding People's Choice Award`,
                short_name: `IdeaFunding Voting`,
                description: ``,
                lang: `en`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#95C349`,
                display: `standalone`
            }
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {}
        },
        {
            resolve: `gatsby-plugin-react-helmet`,
            options: {}
        },
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: `https://vote.ideafunding.org`,
                sitemap: `https://vote.ideafunding.org/sitemap.xml`,
                resolveEnv: () => process.env.GATSBY_ENV,
                env: {
                    development: {
                        policy: [{ userAgent: `*`, disallow: [`/`] }]
                    },
                    production: {
                        policy: [{ userAgent: `*`, allow: `/` }]
                    }
                }
            }
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://vote.ideafunding.org`
            }
        },
        {
            resolve: `gatsby-plugin-sentry`,
            options: {
                dsn: ``,
                release: process.env.SENTRY_RELEASE || `unsetReleaseId`,
                environment: process.env.NODE_ENV,
                enabled: (() =>
                    [`production`, `staging`].indexOf(process.env.NODE_ENV) !==
                    -1)()
            }
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Rubik`,
                        variants: [`400`]
                    }
                ]
            }
        }
    ]
};
