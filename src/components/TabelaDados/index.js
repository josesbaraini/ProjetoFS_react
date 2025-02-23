'use client'
import { useState } from "react";
import styles from "./TabelaDados.module.css";


export default function Card(props) {
    const [classeTr, setTr] = useState(styles.trcircun1)
    const [classeCirInfo, setClasseCirInfo]  = useState(`${styles.trcirinfo1} ${styles.trcirinfo}`)
    const circuntr1 = <tr className={classeTr}>
        <td onClick={() => circun1()} id={styles.circunline1} colSpan="2">Curcunferências</td>
    </tr>
    const cirinfo =
        <tr id={classeCirInfo}>
            <td>
                <p className={styles.pcirinfo}>Peito:  {props.peito}cm</p>
                <p className={styles.pcirinfo}>Torax: {props.torax}cm</p>
                <p className={styles.pcirinfo}>Biceps: {props.biceps}cm</p>
                <p className={styles.pcirinfo}>Triceps: {props.triceps}cm</p>
                <p className={styles.pcirinfo}> Cintura: {props.cintura}cm</p>
            </td>
        </tr>
    const circun1 = () => {


        console.log(circuntr1, "." + styles.trcircun1, "." + styles.trcircun2)
        if (circuntr1.props.className == styles.trcircun1) {
            setTr(`${styles.trcircun1} ${styles.circuntrcima}`)
            setClasseCirInfo(styles.trcirinfo1)
        } else {
            setClasseCirInfo(`${styles.trcirinfo1} ${styles.trcirinfo}`)
            setTr(styles.trcircun1)
        }
 


    }
    return (

        <div className={styles.divtable} id={styles.divtablefirst}>
            <h1>
                {props.titulo}
            </h1>

            <table className={styles.table}>
                <tbody id={styles.tbodysecond}>
                    <tr>
                        <td>Altura:</td>
                        <td>{props.altura}cm</td>
                    </tr>

                    <tr>
                        <td>Peso:</td>
                        <td>{props.peso}kg</td>
                    </tr>

                    <tr >
                        <td>Ombro a Ombro:</td>
                        <td>{props.OmbroaOmbro}cm</td>
                    </tr>

                    {circuntr1}

                    {cirinfo}
                </tbody>
            </table>

        </div>
    );
}