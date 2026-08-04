import {getPosts} from "../lib/wordpress";
import Header from "../components/layout/Header/Header";

export default async function Home() {
  const data = await getPosts()

 

  return (
    
    <main>
      <Header/>
    <h1> Projeto Headless </h1>

    <ul> 
      {data.posts.nodes.map((post: any) => (
      <li key= {post.id}>
        
        <h2> {post.title}</h2>
        <p> {post.slug} </p>
        <br/>
        
         </li>
      ))}
    </ul>

    </main>
  );
}