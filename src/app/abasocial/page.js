'use client'
import styles from "./page.module.css";
import { useAutenticacao } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { usuarioId, fazerLogout } = useAutenticacao();
  const roteador = useRouter();

  useEffect(() => {
    console.log(usuarioId)
      if (!usuarioId) {
          roteador.push("/login"); // 🔥 Redireciona caso não esteja logado
      }
  }, [usuarioId]);

  if (!usuarioId) return <p>Redirecionando...</p>;
  return (
  
      <div className={styles.body}>
        <main className={styles.mainteste}>

          <div className={styles.container}>

            <div className={styles.lefthalf}>
              <div className={styles.searchbar}>
                <div className={styles.searchicon}>🔍</div>
                <input type="text" placeholder="pesquisar amigo adicionado"></input>
              </div>
              <div className={styles.addbutton}>+</div>
            </div>


            <div className={styles.righthalf}>
              <div className={styles.addfriendbar}>
                <div className={styles.addicon}>+</div>
                <span>adicionar amigo</span>
              </div>
              <div className={styles.suggestions}>
                <div className={styles.suggestiontitle}>pessoas que você talvez conheça</div>
                <div className={styles.suggestioncard}>
                  <a href="tela-chats.html" className={styles.span}>fulano</a>
                  <div className={styles.usericon}>👤
                  </div>
                </div>
                <div className={styles.suggestioncard}>
                  <a href="tela-chats.html" className={styles.span}>bertano</a>
                  <div className={styles.usericon}>👤
                  </div>
                </div>
                <div className={styles.suggestioncard}>
                  <a href="tela-chats.html" className={styles.span}>ciclano</a>
                  <div className={styles.usericon}>👤</div>
                </div>
                <div className={styles.suggestioncard} id="teste">
                  <a  className={styles.span}  onClick={fazerLogout} >vovô chao</a>
                  <div className={styles.usericon}>👤</div>
                </div>
              </div>
            </div>
          </div>
        </main>


      </div>

  );
}