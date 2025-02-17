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
          <p>Blablavla</p>

        </div>

        <div className={styles.tipo}>
          <p>Amigo</p>

        </div>

        <div className={styles.data}>
          <p>Anteontem</p>
        </div>
        <div className={styles.pessoa}>
          <p>Fulanim</p>
        </div>
      </div>

      <div className={styles.divcompleta}>
        <div className={styles.assunto}>
          <p>Barbarossa</p>

        </div>

        <div className={styles.tipo}>
          <p>Amigo</p>

        </div>

        <div className={styles.data}>
          <p>Anteanteanteontem</p>
        </div>
        <div className={styles.pessoa}>
          <p>Spike</p>
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
          <p>Treino</p>
        </div>
      </div>
      <div className={styles.divcompleta}>
        <div className={styles.assunto}>
          <p>Blablavla</p>

        </div>

        <div className={styles.tipo}>
          <p>Amigo</p>

        </div>

        <div className={styles.data}>
          <p>Anteontem</p>
        </div>
        <div className={styles.pessoa}>
          <p>Fulanim</p>
        </div>
      </div>
      
      
  
      
    </div>
  );
}