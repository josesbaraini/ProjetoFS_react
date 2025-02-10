import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.body}>

        <div className={styles.azul}></div>

        <div className={styles.vermelho}>
        <div className={styles.border}>
            <p className={styles.excluir}>Atenção !<br></br>
             Ao cliar em "Excluir", sua conta<br></br>
            será removida de forma permanentimente<br></br>
            Tem certeza de que deseja prosseguir?</p>
            <button className={styles.buttonMedic}>Excluir</button>
            </div>
        </div>
        
        </div>
    )
    
}
