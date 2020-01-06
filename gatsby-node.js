/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const petTemplate = path.resolve(`src/templates/pet.js`);

    return graphql(`
        {
            allContentfulPet {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            throw result.errors;
        }

        result.data.allContentfulPet.edges.forEach(edge => {
            createPage({
                path: `/pet/${edge.node.slug}`,
                component: petTemplate,
                context: {
                    slug: edge.node.slug,
                },
            });
        });
    });
};
