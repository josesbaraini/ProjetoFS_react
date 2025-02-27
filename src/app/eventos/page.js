'use client'
import Calendario from "@/components/Calendario";
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

// Atualizar o relógio a cada segundo

  return (

     <div className={styles.divprincipal}></div>


  );
}