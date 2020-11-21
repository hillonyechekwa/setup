const path = require('path')

module.exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve('src/')
    const result = await graphql(`

    `)
    if (result.errors) {
        reporter.panicOnBuild(`Error while running graphql query`)
        return
    }

    result.data.forEach(node => {
        createPage({
            path,
            component,
            context
        })
    })

}