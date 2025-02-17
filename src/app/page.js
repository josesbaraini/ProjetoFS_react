'use client'
import styles from "./page.module.css";
import Image from "next/image";
export default function Home() {
  return (
  <body className={styles.body}  >
    <main className={styles.mainteste}>


      <div className={styles.textoprincipal}>
        <h1>Olá! Bem-Vindo ao<br></br><span>My Gym</span></h1>
        <p>Estamos muito felizes por você ter se juntado a nós!</p>
        <p>Aqui você irá encontrar maneiras motivadoras de alcançar seus objetivos.</p>
        <p>Estamos aqui pra te ajudar a cada passo da sua evolução.</p>
        <p><strong>Vamos Começar!</strong></p>
        <div className={styles.logoacademia}>
        <Image className={styles.img} src='/images/academia.png' alt="Academia" width={100} height={200} />
        </div>
      </div>

    </main>
  </body>
  );
}



