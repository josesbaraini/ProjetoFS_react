'use client'
import styles from "./page.module.css";
import Image from "next/image";
import Calendario from "@/components/Calendario";
import { useAutenticacao } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { usuarioId, fazerLogout } = useAutenticacao();
  const roteador = useRouter();
  const [dias, setDias] = useState([]);
  const [mes, setMes] = useState(1);
  const [ano, setAno] = useState(2024);

  function getDaysInMonth(year, month,diasSpeciais) {
    let dias;
    let classe = `${styles.dia}`;
    let diasArray = [];

    dias = new Date(year, month, 0).getDate();
    for (let index = 1; index < 36; index++) {
      if (diasSpeciais.includes(index)) {
        classe = `${styles.dia} ${styles.diaevento}`;
      }else if (((index + 6) % 7) == 0) {
      
          classe = `${styles.dia} ${styles.finalsemana}`;
      }else{
        classe = `${styles.dia}`;
      }

      
      if (index > dias) {
        diasArray.push({ dia: index - dias, classe: classe });
      } else {
        diasArray.push({ dia: index, classe: classe });
      }

    }
    setDias(diasArray);
  }
  useEffect(() => {
    getDaysInMonth(ano, mes, [7, 12, 20, 26]);
  }, [mes])
  useEffect(() => {
    console.log(usuarioId)
    if (!usuarioId) {
      roteador.push("/login");
    }
  }, [usuarioId]);

  if (!usuarioId) return <p>Redirecionando...</p>;
  return (
    <div className={styles.main}>

      <Calendario/>
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