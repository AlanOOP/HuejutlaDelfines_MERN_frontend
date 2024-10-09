import React, { useEffect, useState } from 'react'
import clienteAxios from '../../config/clientAxios'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CommentsSection = ({ id }) => {

    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const getComments = async () => {
            try {
                const response = await clienteAxios.get(`/comments/${id}`);
                setComments(response.data);
                console.log(response.data);
            }
            catch (error) {
                console.log(error);
            }
        }
        getComments();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!comment) {
            return toast.error('Escribe un comentario');
        }

        try {
            await clienteAxios.post('/comments', { newsId: id, comment });
            toast.success('Comentario agregado');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
        catch (error) {
            toast.error('Error al agregar el comentario');
        }
    }


    return (
        <section className="bg-slate-50 py-8 lg:py-8 ">
            <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                        Commentarios
                    </h2>
                </div>
                <form className="mb-6" onSubmit={handleSubmit}>
                    <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200  ">
                        <label htmlFor="comment" className="sr-only">Tu comentario:</label>
                        <textarea
                            id="comment"
                            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                            placeholder="Escribe un comentario..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                    <button type="submit"
                        className="btn-action">
                        Comentar
                    </button>
                </form>


                {
                    comments.map((comment) => (
                        <article key={comment._id} className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 ">
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    {/* <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"><img
                                className="mr-2 w-6 h-6 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                alt="Helene Engels" />Helene Engels</p> */}
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {comment.date}
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400">
                                {comment.comment}
                            </p>

                        </article>
                    ))
                }
            </div>
        </section>

    )
}

export default CommentsSection