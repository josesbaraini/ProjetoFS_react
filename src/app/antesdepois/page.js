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
      <section id={styles.sectiontitle}><h1>Atualização/Evolução</h1></section>
      <section className={styles.sectiontable}>
        <TabelaDados
        titulo='Dados Corporais: Antes'
        altura='140'
        peso='100'
        OmbroaOmbro='199'
        peito='100'
        torax='100'
        biceps='100'
        triceps='100'
        cintura='100'
        ></TabelaDados>

        {/* <div className={styles.divtable} id={styles.divtablefirst}>
          <h1>
            Dados Corporais: Antes
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

              <tr className={styles.trcircun1}>
                <td onClick={()=>circun1()} id={styles.circunline1} colSpan="2">Curcunferências</td>
              </tr>

              <tr id={styles.trcirinfo1}>
                <td>
                  <p className={styles.pcirinfo}>Peito:  180cm</p>
                  <p className={styles.pcirinfo}>Torax: 30cm</p>
                  <p className={styles.pcirinfo}>Biceps: 32cm</p>
                  <p className={styles.pcirinfo}>Triceps: 34cm</p>
                  <p className={styles.pcirinfo}> Cintura: 60cm</p>
                </td>
              </tr>
            </tbody>
          </table>

        </div> */}

      </section>

      <section className={styles.sectionphotowinst}>
        <div className={styles.photowinstdiv}>
          <div className={styles.photo}>
            {/* <img className={styles.img-photo-winst" src="."+styles../img/Stickman.png" alt="}> */}
            <Image className={styles.imgphotowinst} src="/images/icone-sino-notificacao.jpg" alt="paia" width={100} height={100}></Image>

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
        titulo='Dados Corporais: Depois'
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