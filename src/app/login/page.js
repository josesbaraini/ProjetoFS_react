"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { useAutenticacao } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";

export default function Home() {
  const { usuarioId, fazerLogin } = useAutenticacao();
  const roteador = useRouter();

  useEffect(() => {
      if (usuarioId) {
          roteador.push("/principal");
      }
  }, [usuarioId]);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [msgEmail, setMsgEmail] = useState(<br></br>)
  const [msgSenha, setMsgSenha] = useState()



  async function enviarFormulario(evento) {
    evento.preventDefault();

    try {
        const resposta = await fetch("https://projetofs-apis.onrender.com/api/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, senha })
        });

        const dados = await resposta.json();
        if (!resposta.ok){
          if (dados.error === 'usuario não encontrado') {
            setMsgSenha()
            setMsgEmail(<p className={styles.testofalha}>Usuario Invalido</p>)
            
          } else if(dados.error === 'senha incorreta'){
            setMsgEmail(<br></br>)
            setMsgSenha(<p className={styles.testofalha}>Senha Incorreta</p>)
          }
          throw new Error(dados.erro);
        }
        

        fazerLogin(dados.id);
        roteador.push("/principal"); 
    } catch (erro) {

    }
}


  return (
    <div className={styles.body}>
      <main className={styles.mainteste}>

        <div className={styles.formulario}>
          <form className={styles.form} onSubmit={enviarFormulario}>
            <label className={styles.label} htmlFor="fname">E-mail: <span className={styles.asterisco}>*</span></label>
            <input placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} className={styles.dois} id="pessoa" type="email" name="fname"></input>
            {msgEmail}
            <label className={styles.label} htmlFor="lname">Senha: <span className={styles.asterisco}>*</span></label>
            
            <input className={styles.dois} id="cadeado" type="password" 
                    placeholder="Senha" 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} name="lname"></input>
                    {msgSenha}
            <div id="button-submit-div" ><input id={styles.submitbutton} className={styles.login} type="submit" value="Login" ></input></div>
          </form>
          <div className={styles.conta}>
            <p>Ainda não tem conta?<a className={styles.link} href="cadastro"> Criar conta</a></p>
          </div>
          <br></br>
        </div>
      </main>
    </div>
  );
}

