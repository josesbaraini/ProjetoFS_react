'use client'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.calendario}>
      <div className={styles.calendarioconteudo}>
                <h1 className={styles.mestitulo}>Setembro</h1>
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
<h1>sss</h1>
      </div>
  
      
    </div>
  );
}