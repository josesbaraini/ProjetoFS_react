'use client'
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.principal}>
            <div className={styles.exer_hoje}>
                <div className={styles.titulo}>
                    <h1>N°</h1>
                </div>
                <div className={styles.item}>
                    <p >1</p>
                </div>
                <div className={styles.item} >
                    <p >2</p>
                </div>
                <div className={styles.item}>
                    <p >3</p>
                </div>
                <div className={styles.item} >
                    <p >4</p>
                </div>

                <div className={styles.item}>
                    <p >5</p>
                </div>
                <div className={styles.item} >
                    <p >6</p>
                </div>
                <div className={styles.item}>
                    <p >7</p>
                </div>


            </div>
            <div className={styles.exer_ser_rep}>
                <div className={styles.exercicio}>

                    <div className={styles.exer_t}><h1>Exercicio</h1></div>
                    <div className={styles.exercicio_item}>
                        <p>Supino</p>

                    </div>
                    <div className={styles.exercicio_item}>
                        <p>Leg Press</p>

                    </div>

                    <div className={styles.exercicio_item}>
                        <p>Apolete</p>

                    </div>

                    <div className={styles.exercicio_item}>
                        <p>Cross Over</p>

                    </div>

                    <div className={styles.exercicio_item}>
                        <p>Puxador</p>

                    </div>

                    <div className={styles.exercicio_item}>
                        <p>Abdominal articulado</p>

                    </div>
                    <div className={styles.exercicio_item}>
                        <p>Supino</p>

                    </div>


                </div>




                <div className={styles.serie}>
                    <div className={styles.serie_t}><h1>Series</h1></div>
                    <div className={styles.serie_item}>
                        <p>3</p>

                    </div>
                    <div className={styles.serie_item}>
                        <p>4</p>

                    </div>
                    <div className={styles.serie_item}>
                        <p>5</p>

                    </div>
                    <div className={styles.serie_item}>
                        <p>6</p>

                    </div>
                    <div className={styles.serie_item}>
                        <p>7</p>

                    </div>
                    <div className={styles.serie_item}>
                        <p>8</p>

                    </div>
                    <div className={styles.serie_item}>
                        <p>9</p>

                    </div>

                </div>


                <div className={styles.rep}>
                    <div className={styles.rep_t}><h1>Repetição</h1></div>
                    <div className={styles.rep_item}><p>1</p></div>
                    <div className={styles.rep_item}><p>12</p></div>
                    <div className={styles.rep_item}><p>2</p></div>
                    <div className={styles.rep_item}><p>12</p></div>
                    <div className={styles.rep_item}><p>16</p></div>
                    <div className={styles.rep_item}><p>12</p></div>
                    <div className={styles.rep_item}><p>16.5</p></div>


                </div>


            </div>
            <div className={styles.exer_peso}>
                <div className={styles.titulo}>
                    <h1>Peso</h1>

                </div>
                <div className={styles.peso}>
                    <p className={styles.item}>100Kg</p>
                </div>
                <div className={styles.peso}>
                    <p className={styles.item}>100Kg</p>
                </div>
                <div className={styles.peso}>
                    <p className={styles.item}>100Kg</p>
                </div>
                <div className={styles.peso}>
                    <p className={styles.item}>100Kg</p>
                </div>
                <div className={styles.peso}>
                    <p className={styles.item}>100Kg</p>
                </div>
                <div className={styles.peso}>
                    <p className={styles.item}>100Kg</p>
                </div>
                <div className={styles.peso}>
                    <p className={styles.item}>100Hg</p>
                </div>

            </div>


        </div>
    );
}