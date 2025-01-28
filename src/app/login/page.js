'use client';
import styles from "./page.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <body className={styles.body}>
    <main className={styles.mainteste}>

<div className={styles.formulario}>
    <form className={styles.form}action="principal">
        <label className={styles.label} htmlFor="fname">E-mail: <span className={styles.asterisco}>*</span></label>
        <input  className={styles.dois} id="pessoa" type="text" name="fname"></input><br></br>
        <label className={styles.label}  htmlFor="lname">Senha: <span className={styles.asterisco}>*</span></label>
        <input className={styles.dois} id="cadeado" type="text" name="lname"></input>
        <div id="button-submit-div" ><input id={styles.submitbutton} className={styles.login}type="submit" value="Login" ></input></div>
    </form>
    <div className={styles.conta}>
        <p>Ainda não tem conta?<a className={styles.link} href="cadastro"> Criar conta</a></p>
    </div>
<br></br>
</div>
    </main>
  </body>
  );
}

