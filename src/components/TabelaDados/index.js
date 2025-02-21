'use client'
import styles from "./TabelaDados.module.css";


export default function Card(props) {
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

                    <tr className={styles.trcircun1}>
                        <td onClick={() => circun1()} id={styles.circunline1} colSpan="2">Curcunferências</td>
                    </tr>

                    <tr id={styles.trcirinfo1}>
                        <td>
                            <p className={styles.pcirinfo}>Peito:  {props.peito}cm</p>
                            <p className={styles.pcirinfo}>Torax: {props.torax}cm</p>
                            <p className={styles.pcirinfo}>Biceps: {props.biceps}cm</p>
                            <p className={styles.pcirinfo}>Triceps: {props.triceps}cm</p>
                            <p className={styles.pcirinfo}> Cintura: {props.cintura}cm</p>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}