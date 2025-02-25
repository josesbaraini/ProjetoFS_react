'use client';
import styles from "./page.module.css";
import { useAutenticacao } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";

export default function Home() {
  const { usuarioId, fazerLogout } = useAutenticacao();
  const roteador = useRouter();
  const [email, setEmail] = useState("");
  const [senhaD, setSenhaD] = useState("");
  const [senhaII, setSenhaII] = useState("");
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
   const fazerCadastro = async () => {
    console.log('sera?')
    if (senhaD == senhaII) {
      try {
        const resposta = await fetch("https://projetofs-apis.onrender.com/api/user/cadastro", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, senhaD, nome, telefone })
        });

        const dados = await resposta.json();
        if (!resposta.ok){
          
          throw new Error(dados.erro);
        }
        

        console.log('deu mesmo')
    } catch (erro) {

    }
}
    }

    
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
            <form className={styles.form} onSubmit={fazerCadastro} action="/login">
                <label className={styles.label} htmlFor="email">E-mail:<span className={styles.asterisco}>*</span></label>

                <input value={email} placeholder="Digite seu E-mail"
                    onChange={(e) => setEmail(e.target.value)} className={`${styles.dois} ${styles.pessoa}`} id="pessoa" type="text"  name="email"></input><br></br>


                <label className={styles.label}  htmlFor="lname">Senha: <span className={styles.asterisco}>*</span></label>
                <input value={senhaD} placeholder="Digite sua Senha"
                    onChange={(e) => setSenhaD(e.target.value)}
                 className={styles.dois} id="cadeado" type="password" name="lname"></input><br></br>
                <label className={styles.label} htmlFor="csenha">Confirmar senha: <span className={styles.asterisco}>*</span></label>
                <input  value={senhaII} placeholder="Digite sua Senha novamente"
                    onChange={(e) => setSenhaII(e.target.value)} className={styles.dois} id="cadeado" type="password"  name="csenha"></input><br></br>
                <label className={styles.label} htmlFor="cell">Celular:</label>
                <input value={telefone} placeholder="Digite seu Telefone"
                    onChange={(e) => setTelefone(e.target.value)} className={styles.dois} type="text" id="fname" name="cell"></input><br></br>
                <label className={styles.label} htmlFor="nome">Nome do Usuário: <span className={styles.asterisco}>*</span></label>
                <input value={nome} placeholder="Digite seu nome de Usuario"
                    onChange={(e) => setNome(e.target.value)} className={styles.dois} type="text" id="fname" name="nome"></input>
                <div id="button-submit-div" ><input id={styles.submitbutton}  className={styles.login}type="submit" value="Cadastrar"></input></div>
            </form>
            <div className={styles.conta}>
                <p>Já tem uma conta? <a href="login" className={styles.link}>Fazer Login</a></p>
            </div>
        </div>
       

    </main>
   
  );
}