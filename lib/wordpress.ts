import {GET_POSTS} from "../lib/queries";

const API_URL = "https://cms.danieljorge.dev.br/graphql";

export async function getPosts() {
    const response = await fetch(API_URL, {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: GET_POSTS,
        }),
        next: {
            revalidate: 20,
        },


    
});
        if (!response.ok) {
            throw new Error(`Erro ao buscar posts.`);

            return response.json();
        }

}