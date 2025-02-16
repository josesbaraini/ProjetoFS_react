"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { useAutenticacao } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Home() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const { fazerLogin } = useAutenticacao();
  const roteador = useRouter();



  async function enviarFormulario(evento) { // Envia os dados para a API
    evento.preventDefault();

    try {
        const resposta = await fetch("http://localhost:8000/api/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, senha })
        });

        const dados = await resposta.json();
        if (!resposta.ok) throw new Error(dados.erro);
        console.log(dados)

        fazerLogin(dados.id); // Armazena o ID do usuário
        roteador.push("/principal"); // Redireciona para página protegida
    } catch (erro) {
        setErro(erro.message);
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
                    onChange={(e) => setEmail(e.target.value)} className={styles.dois} id="pessoa" type="email" name="fname"></input><br></br>
            <label className={styles.label} htmlFor="lname">Senha: <span className={styles.asterisco}>*</span></label>
            <input className={styles.dois} id="cadeado" type="password" 
                    placeholder="Senha" 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} name="lname"></input>
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

