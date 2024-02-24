import { useState } from 'react';
import Layout from '../components/Layout';
import { preguntasFrecuentes } from '../constants/data';
import { FaQuestionCircle } from "react-icons/fa";

const FAQ = () => {

    const chatbotToggler = document.querySelector(".chatbot-toggler");
    const closeBtn = document.querySelector(".close-btn");

    // closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
    // chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"))

    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <Layout>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
                    <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Preguntas Frecuentes</h2>

                    <div className="grid pt-8 text-left border-t border-gray-200 md:gap-10 dark:border-gray-700 md:grid-cols-2">
                        {
                            preguntasFrecuentes.map((i, pregunta) => (
                                <div key={i} className="mb-5  cursor-pointer" onClick={() => setAccordionOpen(!accordionOpen)}>
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white gap-2 ">

                                        <FaQuestionCircle />

                                        {pregunta.pregunta}

                                      
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
                            ))
                        }
                    </div>

                </div>
            </section>

            {/* <button className="chatbot-toggler show-chatbot">
                <span className="material-symbols-rounded">mode_comment</span>
                <span className="material-symbols-outlined">close</span>
            </button>
            <div className="w-[400px] shadow fixed right-5 bottom-24 bg-slate-100">
                <header>
                    <h2>Chatbot</h2>
                    <span className="close-btn material-symbols-outlined">close</span>
                </header>
                <ul className="chatbox">
                    <li className="chat incoming">
                        <span className="material-symbols-outlined">smart_toy</span>
                        <p>Hi there 👋<br />How can I help you today?</p>
                    </li>
                </ul>
                <div className="chat-input">
                    <textarea placeholder="Enter a message..." spellcheck="false" required></textarea>
                    <span id="send-btn" className="material-symbols-rounded">send</span>
                </div>
            </div> */}
        </Layout >
    )
}

export default FAQ