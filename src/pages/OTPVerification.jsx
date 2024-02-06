import React, { useState } from 'react'
import Layout from '../components/Layout';
import { images } from '../constants';

const OTPVerification = () => {

    const [otp, setOtp] = useState(new Array(6).fill(""));


    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index) ? element.value : d)]);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    }

    return (
        <Layout>
            <div className="container mx-auto flex justify-center items-center h-screen">

                <div className="w-full max-w-md shadow p-4 bg-blue-300">

                    <h1 className="text-2xl font-medium text-center">Verificación</h1>

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
                        <button className="w-full py-3 bg-blue-600 text-white rounded-md">Verificar</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default OTPVerification