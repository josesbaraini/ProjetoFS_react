"use client";

import { useAutenticacao } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtegeRota({ children }) { // Nome traduzido
    const { usuarioId } = useAutenticacao();
    const roteador = useRouter();

    useEffect(() => {
        if (!usuarioId) {
            roteador.push("/login"); // Redireciona para login se não estiver autenticado
        }
    }, [usuarioId, roteador]);

    if (!usuarioId) return null; // Evita piscar conteúdo antes do redirecionamento

    return children;
}
