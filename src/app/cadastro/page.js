import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.mainteste}>
        <div className={styles.formulario}>
            <form className={styles.form} action="">
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
                <div id="button-submit-div"><input id="submit-button" className={styles.login}type="submit" value="Cadastrar"></input></div>
            </form>
            <div className={styles.conta}>
                <p>Já tem uma conta? <a href="tela-login.html" className={styles.link}>Fazer Login</a></p>
            </div>
        </div>
       

    </main>
   
  );
}