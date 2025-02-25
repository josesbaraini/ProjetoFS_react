'use client'
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { useAutenticacao } from "@/context/AuthContext";
import { useEffect } from "react";


const index = () => {
    const { usuarioId, fazerLogout } = useAutenticacao();


    if (!usuarioId) return <div className={styles.header}>


        <nav id={styles.listacaminhos2}>


            <a href="/login">
                <p className={styles.caminholistacaminhos2}>
                    Login
                </p>
            </a>

            <a href="/cadastro">
                <p className={styles.caminholistacaminhos2}>
                    Cadastrar
                </p>
            </a>


        </nav>
        <a className={styles.imagelink} href="principal">
            <Image className={styles.headericon} id={styles.iconlogo} src="/images/logo.png" alt="paia" width={100} height={100}></Image>
        </a>

    </div>;
    const apareceUtilits = ()=>{
        let altura = document.querySelector("."+styles.abautilidades)
        let escuro = document.querySelector("."+styles.escuro)
        altura.classList.toggle(styles.aumentada)
        escuro.classList.toggle(styles.escuroaparecendo);

    }
    return (
        <div className={styles.header}>
            <div id={styles.abaConfig}>
                <Image onClick={()=>(apareceUtilits())}className={styles.headericon} src="/images/settings.png" id={styles.buttonutilidades} alt="paia" width={100} height={100}></Image>
            </div>

            <nav id={styles.listacaminhos}>


                <a href="eventos">
                    <p className={styles.caminholistacaminhos}>
                        Eventos
                    </p>
                </a>

                <a href="agenda">
                    <p className={styles.caminholistacaminhos}>
                        Treinos
                    </p>
                </a>

                <a href="calendario">
                    <p className={styles.caminholistacaminhos}>
                        Calendário
                    </p>
                </a>

            </nav>

            <div id={styles.notificainicio}>

                <a className={styles.imagelink} href="notificacoes">
                    <Image className={styles.headericon} src="/images/icone-sino-notificacao.jpg" alt="paia" width={100} height={100}></Image>
                </a>


                <a className={styles.imagelink} href="principal">
                    <Image className={styles.headericon} id={styles.iconlogo} src="/images/logo.png" alt="paia" width={100} height={100}></Image>
                </a>
            </div>
        </div>

    );


}

export default index