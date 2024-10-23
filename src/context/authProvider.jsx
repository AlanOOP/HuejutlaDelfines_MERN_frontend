import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/clientAxios";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: '',
        auth: false,
    });

    const [user, setUser] = useState({});

    console.log(user);

    const isAdmin = () => user.role === 2;
    const isInstructor = () => user.role === 1;
    const isUser = () => user.role === 0;

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
                const response = await clienteAxios.get('/user/profile', config);
               
                const { user } = response.data;
               
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
            setUser,
            isAdmin,
            isInstructor,
            isUser
        }}>
            {children}
        </AuthContext.Provider>
    );
}


export { AuthProvider };

export default AuthContext;