import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.body}>

        <div className={styles.azul}>
        <Image className={styles.img} src='/images/Stickman.png' alt="Academia" width={100} height={200} />
        <p className={styles.p}>kevinlevrone123@hotmail.com</p>
        </div>
        <div className={styles.vermelho}>
        <div className={styles.border}>
            <p className={styles.excluir}>Excluir minha conta!<br></br>
             Se você acha que não usará mais o My Gym novamente e 
            deseja excluir  sua conta.<br></br>
            Clique em "Excluir"<br></br>
            Tem certeza de que deseja prosseguir?</p>
            <div className={styles.botao}>
            <button className={styles.buttonMedic}>Excluir</button>
            <button className={styles.buttonMedic}>Cancelar</button>
            </div>
            </div>
        
        </div>
        
        </div>
    )
    
}
