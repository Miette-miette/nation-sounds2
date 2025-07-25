import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const baseUrl = 'http://127.0.0.1:8000';

    // Vérifie l'utilisateur connecté au chargement
    useEffect(() => {
        axios.get(`${baseUrl}/api/userme`, { withCredentials: true })
        .then(res => setUser(res.data.user))
        .catch(() => setUser(null))
        .finally(() => setLoading(false));
    }, []);

    // Connexion : après login
    const login = async () => {
        try {
        const res = await axios.get(`${baseUrl}/api/userme`, { withCredentials: true });
        setUser(res.data.user);
        } catch {
        setUser(null);
        }
    };

    // Déconnexion
    const logout = async () => {
        try {
        await axios.post(`${baseUrl}/deconnexion`, {}, { withCredentials: true });
        setUser(null);
        } catch (err) {
        console.error("Erreur de déconnexion", err);
        }
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
