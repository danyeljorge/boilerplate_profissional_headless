import { gql } from "graphql-request";

export const GET_POSTS = gql`

    query {
    posts (first: 10) {
    nodes {
    id
    title
    slug
    }
    }
    }
`;