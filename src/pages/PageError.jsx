
// import Layout from '../components/Layout';
import { images } from '../constants';

const PageError = ({ codigo, error, des }) => {
    return (

        <section className="bg-white ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">

                    <div className='flex items-center justify-center mb-0'>
                        <img
                            className="md:w-1/4 object-cover object-center w-1/2 h-auto "
                            src={images.Img404}
                            alt="users are reading articles"
                        />

                    </div>
                    <h1 className="mb-4 mt-0 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">{codigo}</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">{error}</p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400"> {des} </p>
                    <a href="#" className="w-full py-3 font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">Regresar al incio</a>


                </div>
            </div>
        </section>

    )
}

export default PageError