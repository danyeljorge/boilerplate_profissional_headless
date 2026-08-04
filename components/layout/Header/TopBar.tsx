import styles from "./Header.module.css";

export default function TopBar({data}: any) {

    return (
        <div className={styles.topBar}>
            
        <div className={styles.socialMidia}>
            <p className={styles.textoTopBar}> Siga-nos: </p>
        <i className="bi bi-facebook bg-[#146c60] size-[30px] flex items-center justify-center rounded-t-[100%]"></i>
        <i className="bi bi-instagram bg-[#146c60] size-[30px] flex items-center justify-center rounded-t-[100%]"></i>
         <i className="bi bi-whatsapp bg-[#146c60] size-[30px] flex items-center justify-center rounded-t-[100%]"></i>
            
        </div>

        <div className={styles.phone}> 
            <div className= {styles.icons}><i className="bi bi-geo-alt-fill  text-[#fd9c27]"></i> <p className={styles.textoTopBar}>{data.endereco}</p> </div>
            <div className= {styles.icons}><i className="bi bi-telephone-fill text-[#fd9c27] "></i> <p className={styles.textoTopBar}>{data.telefone}</p> </div>

        </div>

        </div>
    );
}