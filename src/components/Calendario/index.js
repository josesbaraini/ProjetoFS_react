'use client'
import styles from "./Calendario.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Calendario() {
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const [dias, setDias] = useState([]);
  const [mes, setMes] = useState({nome:meses[0],numero:1});
  const [ano, setAno] = useState(2025);
  function getWeekendsInMonth(year, month) {
    const weekends = [];
    const daysInMonth = new Date(year, month, 0).getDate(); // Obtém o total de dias no mês

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day); // Criar a data (mês começa do 0)
        const dayOfWeek = date.getDay(); // Obtém o dia da semana (0 = Domingo, 6 = Sábado)

        if (dayOfWeek === 0 || dayOfWeek === 6) {
            weekends.push(day);
        }
    }

    return weekends;
}
  function mudaMes(mes){
    if(mes.numero == 13){
        setMes({nome:meses[0],numero:1});
        setAno(ano+1);
    }else if(mes.numero == 0){
        setMes({nome:meses[11],numero:12});
        setAno(ano-1);
    }else{
        setMes({nome:meses[mes.numero-1],numero:mes.numero});
    }
    
  }

  function montaCalendario(year, month,diasSpeciais) {
    let dias;
    let classe = `${styles.dia}`;
    let diasArray = [];

    dias = new Date(year, month, 0).getDate();
    for (let index = 1; index < 36; index++) {
      if (diasSpeciais.eventos.includes(index)) {
        classe = `${styles.dia} ${styles.diaevento}`;
      }else if (diasSpeciais.finaisemana.includes(index)) {
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
    montaCalendario(ano, mes.numero, {eventos:[7, 12, 20, 26],finaisemana:getWeekendsInMonth(ano, mes.numero)});
  }, [mes]);

  return (<div className={styles.calendario}>
    <h1 className={styles.h1ano}>{ano}</h1>
    <div className={styles.calendarioconteudo}>
      <div className={styles.titulocoisas}>
        <Image onClick={()=>mudaMes({numero:mes.numero-1})} className={styles.imgset} src="/images/setadi.png" alt="paia" width={50} height={50}></Image>
        <h1 className={styles.mestitulo}>{mes.nome}</h1>
        <Image onClick={()=>mudaMes({numero:mes.numero+1})} className={styles.imgset} src="/images/setaes.png" alt="paia" width={50} height={50}></Image>
      </div>
      <div className={styles.barrinha}> .</div>
      <div className={styles.calendariodias}>
        {dias.map((dia, index) => (
          <div key={index} className={dia.classe}>{dia.dia}</div>
        ))}
        

      </div>
    </div>

  </div>)
}