import { useState } from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import { IoLogIn } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import { isPassword } from '../utils/Regex';
import clienteAxios from '../config/clientAxios';
import { toast } from 'react-toastify';



const NewPassword = () => {

    const { token } = useParams();

    const [user, setUser] = useState({
        password: '',
        password_confirmation: '',
    });

    const [progress, setProgress] = useState('');
    const [msg, setMsg] = useState('');

    const updateState = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const password = () => {
        const strengthChecks = {
            length: 0,
            hasUpperCase: false,
            hasLowerCase: false,
            hasDigit: false,
            hasSpecialChar: false,
        };

        strengthChecks.length = user.password.length >= 8 ? true : false;
        strengthChecks.hasUpperCase = /[A-Z]+/.test(user.password);
        strengthChecks.hasLowerCase = /[a-z]+/.test(user.password);
        strengthChecks.hasDigit = /[0-9]+/.test(user.password);
        strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(user.password);

        let verifiedList = Object.values(strengthChecks).filter((value) => value);

        let strength =
            verifiedList.length == 5
                ? "Fuerte"
                : verifiedList.length >= 2
                    ? "Media"
                    : "Debil";

        // setPassword(user.password);
        setProgress(`${(verifiedList.length / 5) * 100}%`);
        setMsg(strength);
    }

    const getActiveColor = (type) => {
        if (type === "Fuerte") return "#22c55e";
        if (type === "Media") return "#f59e0b";
        return "#FF0054";
    };

    const isValidated = () => {
        if (user.password === '' || user.password_confirmation === '') {
            toast.error('Todos los campos son obligatorios')
            return false;
        }

        if (!isPassword(user.password)) {
            toast.error('La contraseña no es valida')
            return false;
        }

        if (user.password !== user.password_confirmation) {
            toast.error('Las contraseñas no coinciden')
            return false;
        }

        return true
    }

    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidated()) return;

        //olvide password 

        try {
            const response = await clienteAxios.post(`/olvide-password/${token}`, { password: user.password });

            // console.log(response.data.message);

            // console.log(response.data);
            toast.success(response.data.message);
            setUser({
                password: '',
                password_confirmation: '',
            });

        } catch (error) {
            // console.log(error);
            toast.error(error.response.data.message);

        }
    }

    return (
        <Layout>
            <div className="container mx-auto my-16">

                <div className="max-w-lg mx-auto  bg-white p-8 rounded-xl shadow shadow-slate-300 my-16">
                    <h1 className="text-4xl font-bold text-dark-hard text-center">Recuperar contraseña</h1>

                    <form
                        className="mt-10"
                        onSubmit={handleSubmit}
                    >


                        <div className="mb-5">
                            <label htmlFor="password" className="font-medium text-slate-700 pb-2">Contraseña:</label>
                            <div className='relative'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="input-auth"
                                    placeholder="Contraseña"
                                    name="password"
                                    value={user.password}
                                    onChange={updateState}
                                />
                                <IoIosEyeOff
                                    className='absolute top-1/2 right-3 transform -translate-y-1/3 hover:cursor-pointer hover:scale-110'
                                    onClick={togglePassword}
                                />
                                {
                                    user.password.length === 0 ? null :
                                        <div
                                            className="relative h-2 w-2 bg-[#fbfbfb] rounded-md"
                                            style={{
                                                width: progress,
                                                backgroundColor: getActiveColor(msg),
                                            }}
                                        >
                                        </div>
                                }
                                {user.password.length !== 0 ? (
                                    <p className="font-medium leading-relaxed" style={{ color: getActiveColor(msg) }}>
                                        Tu contraseña es {msg}
                                    </p>
                                ) : null}
                            </div>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="password_confirmation" className="font-medium text-slate-700 pb-2">Confirmar contraseña:</label>

                            <div className='relative'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password_confirmation"
                                    className="input-auth"
                                    placeholder="Confirmar contraseña"
                                    name="password_confirmation"
                                    value={user.password_confirmation}
                                    onChange={updateState}
                                />
                                <IoIosEyeOff
                                    className='absolute top-1/2 right-3 transform -translate-y-1/3 hover:cursor-pointer hover:scale-110'
                                    onClick={togglePassword}
                                />
                            </div>
                        </div>

                        <button className="btn-action">
                            <IoLogIn className="w-6 h-6" />
                            <span>Enviar</span>
                        </button>

                    </form>
                </div>

            </div>

        </Layout>
    )
}

export default NewPassword