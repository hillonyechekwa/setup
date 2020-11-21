const path = require('path')

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});


module.exports = {
    siteMetadata: {
        title: '',
        author: '',
        description: ''
    },
    plugins: [
        'gatsby-plugin-sass'
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-postcss',
        'gatsby-plugin-transition-link'
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            }
        },
        {
            resolve: 'gatsby-source-graphql',
            options: {
                typeName: 'GCMS',
                fieldName: 'gcms',
                url: 'https://'
            }
        },
        {
            resolve: `gatsby-source-shopify`,
            options: {
                shopName: '',
                accessToken: '',
                apiVersion: '',
                verbose: true,
                paginationSize: 250,
                includeCollections: ['shop', 'content']
            }
        },
        {
            resolve: 'gatsby-source-ghost',
            options: {
                apiUrl: ``,
                contentApiKey: ``,
                version: `v3`
            }
        },
        {
            resolve: `gatsby-source-cloudinary`,
            options: {
                cloudName: process.env.CLOUDINARY_CLOUD_NAME,
                apiKey: process.env.CLOUDINARY_API_KEY,
                resourceType: `image`,
                type: `type Value`,
                prefix: 'abc-xyz/'
            }
        },
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true,
                jsxPragma: 'jsx',
                allExtensions: true
            }
        },
        {
            resolve: 'gatsby-plugin-layout',
            options: {
                component: require.resolve(`./path-to-layout-component`)
            }
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                tailwind: true,
                purgeOnly: ['src/styles']
            }
        },
        `gatsby-plugin-offline`
    ]
}