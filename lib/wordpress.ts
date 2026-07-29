import {graphQLClient} from "../lib/graphql";
import {GET_POSTS} from "../lib/queries";

export async function getPosts() {
    return  graphQLClient.request(GET_POSTS);
}