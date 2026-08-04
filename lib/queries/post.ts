

export const GET_POSTS = `

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

