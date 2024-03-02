import { useState } from 'react';
import Layout from '../components/Layout';
import { preguntasFrecuentes } from '../constants/data';
import { FaQuestionCircle } from "react-icons/fa";
import useDelf from '../hooks/useDelf';

const QuestiondAndAnswers = ({ pregunta }) => {

    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="mb-5  cursor-pointer" onClick={() => setAccordionOpen(!accordionOpen)}>
            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900  gap-2 ">

                <FaQuestionCircle className='w-6 h-6 text-blue-500' />

                {pregunta.pregunta}

                <svg
                    className="fill-indigo-500 shrink-0 ml-8"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                            }`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                            }`}
                    />
                </svg>
            </h3>
            <p className={` dark:text-gray-400 grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-md ${accordionOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
                }`}>
                <div className='overflow-hidden'>
                    {pregunta.respuesta}
                </div>
            </p>
        </div>
    )
}

const FAQ = () => {

    const { darkMode } = useDelf();

    // closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
    // chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"))


    return (
        <Layout>
            <section className={`${darkMode ? 'bg-gray-600 !text-white' : 'bg-white'}`}>
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
                    <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Preguntas Frecuentes</h2>

                    <div className="grid pt-8 text-left border-t border-gray-200 md:gap-10 dark:border-gray-700 md:grid-cols-2">
                        {
                            preguntasFrecuentes.map((pregunta, index) => (
                                <QuestiondAndAnswers key={index} pregunta={pregunta} />
                            ))
                        }
                    </div>

                </div>
            </section>


        </Layout >
    )
}

export default FAQ