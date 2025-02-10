'use client'
import styles from "./page.module.css";
import Image from "next/image";


export default function Home() {
  const circun1 = ()=>{
    let circuntr1 = document.querySelector("."+styles.trcircun1);
    let cirifo1 = document.getElementById(styles.trcirinfo1);
    console.log(circuntr1,"#"+styles.trcirinfo1,"."+styles.trcircun1)
    circuntr1.classList.toggle(styles.circuntrcima);
    if (cirifo1.style.height == '21vh') {
      cirifo1.style.height = '0vw'

    } else {
      cirifo1.style.height = '21vh'

    };


  }
  const circun2 = ()=>{
    let circuntr2 = document.querySelector("."+styles.trcircun2);
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
      <section id={styles.sectiontitle}><h1>Atualização/Evolução</h1></section>
      <section className={styles.sectiontable}>
        <div className={styles.divtable} id={styles.divtablefirst}>
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

        </div>

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
        <div className={styles.divtable} id={styles.divtablefirst}>
          <h1>
            Dados Corporais: Depois
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
                <td id={styles.circunline2} onClick={()=>circun2()} colSpan="2">Curcunferências</td>
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