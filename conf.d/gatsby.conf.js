module.exports = {
    siteMetadata: {
        title: 'IdeaFunding 2018 presented by Startup Tucson',
        siteUrl: 'https://ideafunding.xyz',
    },
    plugins: [
        'gatsby-plugin-less',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-catch-links',
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: '',
                includeInDevelopment: false,
            },
        },
    ],
};
