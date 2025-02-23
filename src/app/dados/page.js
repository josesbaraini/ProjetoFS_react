'use client'
import styles from "./page.module.css";
import Image from "next/image";
import TabelaDados from "@/components/TabelaDados";

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
      <TabelaDados
        titulo='Dados Corporais'
        altura='140'
        peso='100'
        OmbroaOmbro='199'
        peito='100'
        torax='100'
        biceps='100'
        triceps='100'
        cintura='100'
        ></TabelaDados>

      </section>


    </main>
  );
}