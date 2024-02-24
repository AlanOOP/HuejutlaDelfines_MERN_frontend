import { useState } from 'react'
import clienteAxios from '../config/clientAxios';
import Spinner from '../components/Spinner';
import { toast } from 'react-hot-toast';

const OTPVerification = ({ token }) => {

    const [otp, setOtp] = useState(new Array(4).fill(""));

    const [loading, setLoading] = useState(false);


    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        // console.log(otp)

        setOtp([...otp.map((d, idx) => (idx === index) ? element.value : d)]);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        //post a api
        setLoading(true);

        try {
            const otpValue = otp.join('');
            // console.log(otpValue);
            const response = await clienteAxios.post('/otp-verification', { token: token, codeOTP: otpValue });
            setLoading(false);
            toast.success(response.data.message);
        }
        catch (error) {
            setLoading(false);
            toast.error(error.response.data);
        }

    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md  shadow p-8 bg-gradient-to-br from-blue-400 to-slate-200"
        >

            <h2 className="text-2xl font-bold text-slate-200 text-center ">Introduce tu codígo </h2>
            <h2 className="text-2xl font-bold text-slate-200 text-center ">🐳🐳🐳🐳</h2>

            <div className="mt-4 flex justify-center items-center space-x-3">
                {
                    otp.map((data, index) => {
                        return (
                            <input
                                type="text"
                                className="w-12 h-12 border border-gray-300 rounded-md text-center text-2xl focus:outline-none focus:border-blue-600"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={(e) => handleChange(e.target, index)}
                                onFocus={(e) => e.target.select()}
                            />
                        )
                    })
                }
            </div>
            <div className="mt-8">
                {
                    !loading ?
                        <button className="w-full py-3 font-medium bg-blue-700 text-white rounded-md hover:bg-blue-600">
                            Verificar
                        </button> :
                        <Spinner />
                }

            </div>
        </form>
    )
}

export default OTPVerification