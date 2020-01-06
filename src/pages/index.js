import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

const IndexPage = () => {
    const { allContentfulPet } = useStaticQuery(
        graphql`
            {
                allContentfulPet {
                    edges {
                        node {
                            name
                            slug
                            description {
                                description
                            }
                        }
                    }
                }
            }
        `
    );

    return (
        <Layout>
            <SEO title="Home" />
            <div style={{ marginBottom: `40px` }}>
                {allContentfulPet.edges.map(({ node }) => {
                    return (
                        <div>
                            <Link to={`/pet/${node.slug}/`}>{node.name}</Link>
                        </div>
                    );
                })}
            </div>
        </Layout>
    );
};

export default IndexPage;
