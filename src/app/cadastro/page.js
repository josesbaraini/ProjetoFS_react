'use client';
import styles from "./page.module.css";
import { useAutenticacao } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";

export default function Home() {
  const { usuarioId, fazerLogout } = useAutenticacao();
  const roteador = useRouter();

  useEffect(() => {
    console.log(usuarioId)
      if (usuarioId) {
          roteador.push("/principal");
      }
  }, [usuarioId]);
  const mudatela = () => {
    router.push("/agenda")
  }
  const router = useRouter();
  return (
    <main className={styles.mainteste} >
        <div className={styles.formulario}>
            <form className={styles.form} action="agenda">
                <label className={styles.label} htmlFor="email">E-mail:<span className={styles.asterisco}>*</span></label>
                <input  className={`${styles.dois} ${styles.pessoa}`} id="pessoa" type="text"  name="email"></input><br></br>
                <label className={styles.label}  htmlFor="lname">Senha: <span className={styles.asterisco}>*</span></label>
                <input className={styles.dois} id="cadeado" type="text" name="lname"></input><br></br>
                <label className={styles.label} htmlFor="csenha">Confirmar senha: <span className={styles.asterisco}>*</span></label>
                <input  className={styles.dois} id="cadeado" type="text"  name="csenha"></input><br></br>
                <label className={styles.label} htmlFor="cell">Celular:</label>
                <input  className={styles.dois} type="text" id="fname" name="cell"></input><br></br>
                <label className={styles.label} htmlFor="nome">Nome do Usuário: <span className={styles.asterisco}>*</span></label>
                <input  className={styles.dois} type="text" id="fname" name="nome"></input>
                <div id="button-submit-div" ><input id="submit-button" onSubmit={mudatela} className={styles.login}type="submit" value="Cadastrar"></input></div>
            </form>
            <div className={styles.conta}>
                <p>Já tem uma conta? <a href="login" className={styles.link}>Fazer Login</a></p>
            </div>
        </div>
       

    </main>
   
  );
}