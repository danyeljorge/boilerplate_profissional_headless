import styles from "./Button.module.css";


export default function Button ({data}: any) {
    return ( 
        <button className= {styles.button}>
          <a href={data.urlBotao} target="_blank" rel="noopener noreferrer">
            {data.textoBotao}
          </a>
        </button>
    );

}