import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
      <main className={styles.mainteste}>
        <div className={styles.divprincipal}>
          <section className={styles.relocaledia}>
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
            <div className={styles.relodia}>
              <div className={styles.relogio}>
                <div className={styles.clock}>

                  <div className={styles.minutehand}></div>
                  <div className={styles.secondhand}></div>
                  <div id="hourhandid" className={styles.hourhand}></div>
                </div>
              </div>
              <div className={styles.diario}>
                <div className={styles.diarioconteudo}>
                  <h1>7 Aniversario de filho de Fulano</h1>
                  <p>Hoje eu vou na casa de fulano as XXX horas pro aniversario do filho dele,
                    não posso esquecer o YYY nem o ZZZ qundo eu for.
                  </p>

                </div>

              </div>
            </div>

          </section>
          <section className={styles.eventos}>
            <div className={styles.eventosconteudo}>
              <p>7-Aniversario de filho de fulano</p>
              <p>12- Happy hour da firma</p>
              <p>20- Visita do Meu Vô</p>
              <p>26-  Assistir Homen aranha 6</p>
              <p className={styles.botaoaddevento}>+ADD Evento</p>

            </div>

          </section>
        </div>
      </main>


    </div>
  );
}