import {GET_POSTS } from "./queries/post";
import {GET_SETTINGS} from "./queries/settings";

const API_URL = "https://cms.danieljorge.dev.br/graphql";


async function fetchAPI(query:string) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { 
            "content-type": "application/json",
        },
        body: JSON.stringify({ 
            query,

        }),

        next: {
            revalidate: 0,

        },
    });

        if (!response.ok) {
            throw new Error("Erro ao consultar o wordpress");
            

        }

        const result = await response.json();
        
        return result.data;
    
}

export async function getPosts(){
    return await fetchAPI(GET_POSTS);
}

export async function getSettings() {

    const data = await fetchAPI(GET_SETTINGS);

    return data.configuracaoDoSite.nodes[0].configuracoesGerais;

}
