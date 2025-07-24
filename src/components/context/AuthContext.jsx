import { createContext, useContext, useEffect, useRef, useState } from "react";
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const logoutTimer = useRef(null);

    const clearLogoutTimer = () => {
        if (logoutTimer.current) {
            clearTimeout(logoutTimer.current);
            logoutTimer.current = null;
        }
    };

    const setLogoutTimer = (token) => {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        const timeLeft = (decodedToken.exp - currentTime) * 1000;

        if (timeLeft <= 0) {
            logout();
        } else {
            logoutTimer.current = setTimeout(() => {
                logout();
            }, timeLeft);
        }
    };

    useEffect(() => {
        try {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            if (storedUser && storedUser.token) {
                const decodedToken = jwtDecode(storedUser.token);
                const currentTime = Date.now() / 1000;

                if (decodedToken.exp < currentTime) {
                    logout();
                } else {
                    setUser(storedUser);
                    setLogoutTimer(storedUser.token);
                }
            }
        } catch {
            logout();
        }
        setLoading(false);

        return () => {
            clearLogoutTimer();
        };
    }, []);

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);

        clearLogoutTimer();
        setLogoutTimer(userData.token);
    }

    const logout = () => {
        clearLogoutTimer();
        localStorage.removeItem('user');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);