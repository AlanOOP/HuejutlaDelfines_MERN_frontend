import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/clientAxios";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: '',
        auth: false,
    });

    const [user, setUser] = useState({});

    useEffect(() => {

        const authUser = async () => {
            const token = localStorage.getItem('token');
            if (!token) return;

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const { data } = await clienteAxios.get('/user/profile', config);
                const { user } = data;
                setUser(user);
                

                setAuth({
                    token: token,
                    auth: true,
                });

            } catch (error) {
                console.log(error);
            }
        }

        authUser();

    }, [])

    return (
        <AuthContext.Provider value={{
            auth,
            setAuth,
            user,
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    );
}


export { AuthProvider };

export default AuthContext;