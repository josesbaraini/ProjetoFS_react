'use client'
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const index = () => {

    const apareceUtilits = ()=>{
        let altura = document.querySelector("."+styles.abautilidades)
        let escuro = document.querySelector("."+styles.escuro)
        altura.classList.toggle(styles.aumentada)
        escuro.classList.toggle(styles.escuroaparecendo);

    }
    return (
        <div className={styles.header}>
            <div id="aba-config">
                <Image onClick={()=>(apareceUtilits())}className={styles.headericon} src="/images/settings.png" id={styles.buttonutilidades} alt="paia" width={100} height={100}></Image>
            </div>

            <nav id={styles.listacaminhos}>
                <a href="tela-abasocial.html">
                    <p className={styles.caminholistacaminhos}>
                        Amigos
                    </p>
                </a>

                <a href="tela-eventos.html">
                    <p className={styles.caminholistacaminhos}>
                        Eventos
                    </p>
                </a>

                <a href="tela-updtreinos.html">
                    <p className={styles.caminholistacaminhos}>
                        Treinos
                    </p>
                </a>

                <a href="tela-calendario.html">
                    <p className={styles.caminholistacaminhos}>
                        Calendario
                    </p>
                </a>

            </nav>

            <div id={styles.notificainicio}>

                <a className={styles.imagelink} href="tela-notificacoes.html">
                    <Image className={styles.headericon} src="/images/icone-sino-notificacao.jpg" alt="paia" width={100} height={100}></Image>
                </a>


                <a className={styles.imagelink} href="tela-principal.html">
                    <Image className={styles.headericon} id={styles.iconlogo} src="/images/logo.png" alt="paia" width={100} height={100}></Image>
                </a>
            </div>
        </div>

    );


}

export default index