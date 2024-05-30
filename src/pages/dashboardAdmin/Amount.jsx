import React, { useEffect, useState } from 'react';
import AdminLayout from './layout/AdminLayout';
import clienteAxios from '../../config/clientAxios';
import Spinner from '../../components/Spinner';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Amount = () => {

    const navigate = useNavigate()
    const [membership, setMembership] = useState([])
    const [loading, setLoading] = useState(true)
    const [amount, setAmount] = useState(null)
    console.log(amount)

    useEffect(() => {
        const getMembership = async () => {
            try {
                const response = await clienteAxios.get('/membership')
                setMembership(response.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getMembership()
    }, [])

    const updateAmount = async () => {

        try {
            const response = await clienteAxios.put(`/membership/${membership[0]?._id}`, { amount })
            console.log(response)
            if (response.status === 200) {
                toast.success('Precio actualizado')
                setTimeout(() => {
                    navigate('/admin/dashboard')
                }, 2000)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AdminLayout>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-3/4 px-4">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-2">Course Detail</h2>
                            <div className="border border-gray-200 rounded-lg p-6">
                                <div className="flex flex-wrap -mx-4">
                                    <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0">
                                        <img
                                            src="https://www.glueup.com/sites/default/files/image_1212.png"
                                            alt=""
                                            className="w-full rounded-lg"
                                        />
                                    </div>
                                    <div className="w-full lg:w-2/3 px-4">
                                        <h2 className="text-xl font-semibold mb-2">Membership</h2>

                                        <div>
                                            {

                                                <div className="flex flex-col items-center mb-4">
                                                    <span className="text-gray-500">Amount: </span>
                                                    <input
                                                        type="number"
                                                        className="input-auth"
                                                        defaultValue={membership[0]?.amount}
                                                        onChange={(e) => setAmount(e.target.value)}
                                                    />
                                                    <br />
                                                    <div className='w-full'>
                                                        <button
                                                            className='btn-action'
                                                            onClick={updateAmount}
                                                        >
                                                            Editar Precio
                                                        </button>
                                                    </div>
                                                </div>

                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Amount