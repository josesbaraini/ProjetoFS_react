'use client'
import styles from "./page.module.css";
import Image from "next/image";

import { useAutenticacao } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { usuarioId, fazerLogout } = useAutenticacao();
  const roteador = useRouter();

  useEffect(() => {
    console.log(usuarioId)
      if (!usuarioId) {
          roteador.push("/login");
      }
  }, [usuarioId]);

  if (!usuarioId) return <p>Redirecionando...</p>;
  const circun2 = () => {
    let circuntr2 = document.querySelector("." + styles.trcircun2);
    let cirifo2 = document.getElementById(styles.trcirinfo2);
    circuntr2.classList.toggle(styles.circuntrcima);
    if (cirifo2.style.height == '21vh') {
      cirifo2.style.height = '0vw'

    } else {
      cirifo2.style.height = '21vh'

    };


  }
  return (
    <main className={styles.mainteste}>
      <section className={styles.sectiontable}>
        <div className={styles.divtable} id={styles.divtablefirst}>
          <h1>
            Dados do Usuario
          </h1>

          <table className={styles.table}>
            <tbody id={styles.tbodysecond}>
              <tr>
                <td>Nome:</td>
                <td>Fulano Sicrano Deltrano</td>
              </tr>

              <tr>
                <td>E-mail:</td>
                <td>fulado@gmeil.com</td>
              </tr>

              <tr >
                <td>Telefone:</td>
                <td>+55 (69) 9999-9999</td>
              </tr>

              <tr >
                <td>Data de Nascimento:</td>
                <td>20/11/1802</td>
              </tr>

              <tr >
                <td>Data de Ingressão:</td>
                <td>21/11/1802</td>
              </tr>

            
            </tbody>
          </table>

        </div>

      </section>

      <section className={styles.sectionphotowinst}>
        <div className={styles.photowinstdiv}>
          <div className={styles.photo}>
            {/* <img className={styles.img-photo-winst" src="."+styles../img/Stickman.png" alt="}> */}
            <Image className={styles.imgphotowinst} src="/images/Stickman.png" alt="paia" width={200} height={300}></Image>

          </div>
          <div className={styles.winst}>

            {/* <img className={styles.img-photo-winst" src="."+styles../img/academia.png" alt="" srcset="}> */}
            <Image className={styles.imgphotowinst} src="/images/icone-sino-notificacao.jpg" alt="paia" width={100} height={100}></Image>
            <h1>Minha Sequência</h1>
          </div>

        </div>
      </section>

      <section className={styles.sectiontable}>
        <div className={styles.divtable} id={styles.divtablefirst}>
          <h1>
            Dados Corporais
          </h1>

          <table className={styles.table}>
            <tbody id={styles.tbodysecond}>
              <tr>
                <td>Altura:</td>
                <td>140cm</td>
              </tr>

              <tr>
                <td>Peso:</td>
                <td>100kg</td>
              </tr>

              <tr >
                <td>Ombro a Ombro:</td>
                <td>40cm</td>
              </tr>

              <tr className={styles.trcircun2}>
                <td id={styles.circunline2} onClick={() => circun2()} colSpan="2">Curcunferências</td>
              </tr>

              <tr id={styles.trcirinfo2}>
                <td>
                  <p className={styles.pcirinfo}>Peitoral:  180cm</p>
                  <p className={styles.pcirinfo}>Torax: 30cm</p>
                  <p className={styles.pcirinfo}>Braço: 32cm</p>
                  <p className={styles.pcirinfo}>Abdomen: 34cm</p>
                  <p className={styles.pcirinfo}> Panturilha: 60cm</p>
                </td>
              </tr>
            </tbody>
          </table>

        </div>

      </section>


    </main>
  );
}