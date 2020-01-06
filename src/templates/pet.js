import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

const PetPage = ({ data: { contentfulPet: pet } }) => (
    <Layout>
        <SEO title={pet.name} />
        <div style={{ marginBottom: `40px` }}>{pet.name}</div>
        <div style={{ marginBottom: `40px` }}>{pet.description.description}</div>
    </Layout>
);

export const query = graphql`
    query PetQuery($slug: String!) {
        contentfulPet(slug: { eq: $slug }) {
            name
            description {
                description
            }
        }
    }
`;

export default PetPage;
