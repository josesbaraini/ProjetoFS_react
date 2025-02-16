"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {  // 🔥 Nome corrigido e children entre {}
    const [usuarioId, setUsuarioId] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const roteador = useRouter();

    useEffect(() => {
        const usuarioSalvo = localStorage.getItem("usuarioId");
        if (usuarioSalvo) {
            setUsuarioId(usuarioSalvo);
        }
        setCarregando(false);
    }, []);

    function fazerLogin(id) {
        localStorage.setItem("usuarioId", id);
        setUsuarioId(id);
    }

    function fazerLogout() {
        localStorage.removeItem("usuarioId");
        setUsuarioId(null);
        roteador.push("/login");
    }
    if (carregando) return null; // 🔥 Evita piscar tela em páginas protegidas
    return (
        <AuthContext.Provider value={{ usuarioId, fazerLogin, fazerLogout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAutenticacao() {
    return useContext(AuthContext);
}
