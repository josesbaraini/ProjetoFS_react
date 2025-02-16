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
          roteador.push("/login"); // 🔥 Redireciona caso não esteja logado
      }
  }, [usuarioId]);

  if (!usuarioId) return <p>Redirecionando...</p>;
  return (
    <main className={styles.mainteste}>
        <div className={styles.divtable}>
            <h1>
                Treino de Hoje
            </h1>

        <table className={styles.table}>
            <tbody>
                <tr>
                    <td className={styles.coiso}>Máquina X</td>
                    <td className={styles.coiso}>Musculos X</td>
                </tr>

                <tr>
                    <td className={styles.coiso}>Máquina Z</td>
                    <td className={styles.coiso}>Musculos Z</td>
                </tr>

                <tr>
                    <td>Máquina Y</td>
                    <td>Musculos Y</td>
                </tr>

                <tr>
                    <td>Máquina W</td>
                    <td>Musculos W</td>
                </tr>

                <tr>
                    <td>Máquina P</td>
                    <td>Musculos P</td>
                </tr>
                <tr id="trespontos">
                    <td id="trespontos" colSpan="2">...</td>

                </tr>

            </tbody>
        </table>

        </div>
    </main>
  );
}