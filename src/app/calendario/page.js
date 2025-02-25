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
  return (
    <div className={styles.main}>

      <div className={styles.calendario}>
        <h1 className={styles.h1ano}>2024</h1>
        <div className={styles.calendarioconteudo}>
          <div className={styles.titulocoisas}>
          <Image className={styles.imgset} src="/images/setadi.png" alt="paia" width={50} height={50}></Image><h1 className={styles.mestitulo}>Setembro</h1><Image className={styles.imgset} src="/images/setaes.png" alt="paia" width={50} height={50}></Image>
          </div>
          <div className={styles.barrinha}> .</div>
          <div className={styles.calendariodias}>
            <div className={`${styles.dia} ${styles.finalsemana}`}>1</div>
            <div className={styles.dia}>2</div>
            <div className={styles.dia}>3</div>
            <div className={styles.dia}>4</div>
            <div className={styles.dia}>5</div>
            <div className={styles.dia}>6</div>
            <div className={`${styles.dia} ${styles.diaevento}`}>7</div>
            <div className={`${styles.dia} ${styles.finalsemana}`}>8</div>
            <div className={styles.dia}>9</div>
            <div className={styles.dia}>10</div>
            <div className={styles.dia}>11</div>
            <div className={`${styles.dia} ${styles.diaevento}`}>12</div>
            <div className={styles.dia}>13</div>
            <div className={styles.dia}>14</div>
            <div className={`${styles.dia} ${styles.finalsemana}`}>15</div>
            <div className={styles.dia}>16</div>
            <div className={styles.dia}>17</div>
            <div className={styles.dia}>18</div>
            <div className={styles.dia}>19</div>
            <div className={`${styles.dia} ${styles.diaevento}`}>20</div>
            <div className={styles.dia}>21</div>
            <div className={`${styles.dia} ${styles.finalsemana}`}>22</div>
            <div className={styles.dia}>23</div>
            <div className={styles.dia}>24</div>
            <div className={styles.dia}>25</div>
            <div className={`${styles.dia} ${styles.diaevento}`}>26</div>
            <div className={styles.dia}>27</div>
            <div className={styles.dia}>28</div>
            <div className={`${styles.dia} ${styles.finalsemana}`}>29</div>
            <div className={styles.dia}>30</div>
            <div className={`${styles.dia} ${styles.outromes}`}>1</div>
            <div className={`${styles.dia} ${styles.outromes}`}>2</div>
            <div className={`${styles.dia} ${styles.outromes}`}>3</div>
            <div className={`${styles.dia} ${styles.outromes}`}>4</div>
            <div className={`${styles.dia} ${styles.outromes}`}>5</div>


          </div>
        </div>

      </div>
      <div className={styles.diaDaSemana}>
      <h1>Treino de Hoje</h1>
      <h2>2</h2>

        <table className={styles.table}>
            <tbody>
                <tr>
                    <td className={styles.coiso}>Máquina X:</td>
                    <td className={styles.coiso}>Músculos X</td>
                </tr>

                <tr>
                    <td className={styles.coiso}>Máquina Z:</td>
                    <td className={styles.coiso}>Músculos Z</td>
                </tr>

                <tr>
                    <td>Máquina Y:</td>
                    <td>Músculos Y</td>
                </tr>

                <tr>
                    <td>Máquina W:</td>
                    <td>Músculos W</td>
                </tr>

                <tr>
                    <td>Máquina P:</td>
                    <td>Músculos P</td>
                </tr>
                <tr >
                    <td id={styles.trespontos} colSpan="2">...</td>

                </tr>

            </tbody>
            
        </table>
        <div className={styles.titulocoisas}>
          <Image className={styles.imgset} src="/images/setadi.png" alt="paia" width={50} height={50}></Image><Image className={styles.imgset} src="/images/setaes.png" alt="paia" width={50} height={50}></Image>
          </div>
        
      </div>
      


    </div>
  );
}