"use client";

import { useAutenticacao } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtegeRota({ children }) { 
    const { usuarioId } = useAutenticacao();
    const roteador = useRouter();

    useEffect(() => {
        if (!usuarioId) {
            roteador.push("/login"); 
        }
    }, [usuarioId, roteador]);

    if (!usuarioId) return null; 

    return children;
}
