'use client'
import styles from "./page.module.css";
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
    <div className={styles.principal}>
      <div className={styles.divcompleta}>
        <div className={styles.assunto}>
          <p>Treino de XX YY marcado para Hoje</p>

        </div>

        <div className={styles.tipo}>
          <p>Treino</p>

        </div>

        <div className={styles.data}>
          <p>Anteontem</p>
        </div>
        <div className={styles.pessoa}>
          <p>Sistema</p>
        </div>
      </div>

      <div className={styles.divcompleta}>
        <div className={styles.assunto}>
          <p>Sua sequência esta em 99</p>

        </div>

        <div className={styles.tipo}>
          <p>Treino</p>

        </div>

        <div className={styles.data}>
          <p>Anteanteanteontem</p>
        </div>
        <div className={styles.pessoa}>
          <p>Sistema</p>
        </div>
      </div>
      <div className={styles.divcompleta}>
        <div className={styles.assunto}>
          <p>Treinos e tals</p>

        </div>

        <div className={styles.tipo}>
          <p>Treino</p>

        </div>

        <div className={styles.data}>
          <p>Hoje</p>
        </div>
        <div className={styles.pessoa}>
          <p>Sistema</p>
        </div>
      </div>
      <div className={styles.divcompleta}>
        <div className={styles.assunto}>
          <p>Bom Trabalho hoje!</p>

        </div>

        <div className={styles.tipo}>
          <p>Sistema</p>

        </div>

        <div className={styles.data}>
          <p>5 segundos Atras</p>
        </div>
        <div className={styles.pessoa}>
          <p>Sistema</p>
        </div>
      </div>
      
      
  
      
    </div>
  );
}