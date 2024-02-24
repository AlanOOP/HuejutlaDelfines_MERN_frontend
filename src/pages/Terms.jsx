
import Layout from '../components/Layout';

const Terms = () => {

    const svgIcon = () => {
        return (
            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
        )
    }

    return (
        <Layout>
            <main className='my-5 flex flex-col items-center'>


                <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl  p-4 uppercase">
                    Términos y Condiciones
                </h1>

                <div className='container w-4/5 text-xl text-justify'>
                    <p className="mb-10  font-bold flex justify-end">Última actualización: 14/11/2023</p>
                    <h2 className="my-3 text-2xl font-bold flex">Escuela de Natación Huejutla Delfines </h2>

                    <p className="text-gray-500 dark:text-gray-400"><span className='font-bold'>Domicilio:</span>Calle Lima 349, colonia Valle del encinal, ciudad Huejutla, municipio o delegación Huejutla, c.p. 43000
                    </p>

                    <p className="text-gray-500 dark:text-gray-400"><span className='font-bold'>Coreo:</span>
                        7711418307
                    </p>

                    <div>
                        <p className="my-3 text-lg font-bold flex">Descripción del Servicio </p>

                        <p className="text-gray-500 dark:text-gray-400"><span className='font-bold'>Ofrecemos una variedad de servicios relacionados con la natación, que incluyen:</span>
                        </p>

                        <ul className=" space-y-1 text-gray-500 list-inside dark:text-gray-400">
                            <li className="flex items-center pl-4">
                                - Clases para diferentes niveles de habilidad.
                            </li>
                            <li className="flex items-center pl-4">
                                - Entrenamientos dirigidos por instructores capacitados.
                            </li>
                            <li className="flex items-center pl-4">
                                - Organización y participación en eventos y competiciones acuáticas.
                            </li>
                            <li className="flex items-center pl-4">
                                <p className='flex '>Los servicios se ofrecen a niños y adultos de todas las edades y niveles de habilidad.</p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="my-3 text-lg font-bold flex">Asignación de Riesgos y Descargos de Responsabilidad </p>

                        <p className="text-gray-500 dark:text-gray-400">
                            Al participar en actividades relacionadas con el club de natación, reconoces y aceptas los riesgos inherentes a la natación y otras actividades acuáticas.

                            El club no asume responsabilidad por lesiones, pérdida de propiedad o cualquier otro daño que pueda surgir durante la participación en eventos o actividades organizadas por el club.
                        </p>

                    </div>

                    <div>
                        <p className="my-3 text-lg font-bold flex">Garantía </p>

                        <p className="text-gray-500 dark:text-gray-400">
                            No ofrecemos garantías explícitas para nuestros servicios, a menos que se acuerde expresamente de otra manera en circunstancias particulares.
                            Aclarando que la participación en nuestras actividades no garantiza resultados específicos ni la ausencia de contratiempos.
                        </p>
                    </div>

                    <div>
                        <p className="my-3 text-lg font-bold flex">Derecho de Desistimiento </p>

                        <p className="text-gray-500 dark:text-gray-400">
                            No aplica el derecho de desistimiento para nuestros servicios, ya que se trata de servicios de ocio que se ofrecen en una fecha o período específico.

                            Por lo que no se puede cancelar la participación en un evento o clase después de que se haya confirmado.
                        </p>
                    </div>

                    <div>
                        <p className="my-3 text-lg font-bold flex">Información de Seguridad </p>

                        <p className="text-gray-500 dark:text-gray-400">
                            Destacamos la importancia de seguir las normas de seguridad para garantizar un entorno seguro para todos los participantes, e indicamos que estas instrucciones se dan por profesionales capacitados.
                        </p>
                    </div>

                    <div>
                        <p className="my-3 text-lg font-bold flex">Condiciones de Entrega </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Informamos que las condiciones específicas para eventos se comunicarán claramente antes de que los participantes confirmen su asistencia, garantizando una preparación adecuada.

                            En el caso de las clases, los participantes deben llegar a tiempo y con el equipo adecuado.
                        </p>
                    </div>

                    <div>
                        <p className="my-3 text-lg font-bold flex">Derechos de Uso</p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Aseguramos que el uso de nuestras instalaciones está sujeto a un comportamiento y cumplimiento específicos para mantener un entorno seguro y respetuoso, y ofrecemos acceso a las normas completas en caso de dudas.
                        </p>
                    </div>

                    <div>
                        <p className="my-3 text-lg font-bold flex">Política de Reembolsos y Cambios</p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Aclaración sobre los procesos para solicitar reembolsos o realizar cambios, asegurando transparencia y justicia, y ofrecemos ejemplos concretos para mayor comprensión.

                            Los reembolsos se pueden solicitar en caso de cancelación de eventos o clases, o en caso de que el participante no pueda asistir por razones de salud, y se aplican condiciones específicas para cada caso.

                            Los cambios de horario o de clase se pueden solicitar en caso de que el participante no pueda asistir a la clase programada, y se aplican condiciones específicas para cada caso.
                        </p>
                    </div>

                    <div>
                        <p className="my-3 text-lg font-bold flex">Métodos de Pago</p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Aceptamos pagos en efectivo y con tarjeta de crédito o débito, y ofrecemos instrucciones claras para cada método de pago.

                            Los pagos en efectivo se pueden realizar en nuestras instalaciones, y los pagos con tarjeta se pueden realizar en nuestras instalaciones o en línea.

                            Los pagos en línea se realizan a través de un proveedor de servicios de pago externo, y los datos de pago se procesan de forma segura.
                        </p>
                    </div>

                    <div>
                        <p className="my-3 text-lg font-bold flex">Facturación</p>
                        <p className="text-gray-500 dark:text-gray-400">
                            No ofrecemos facturas para nuestros servicios.
                            Los recibos se pueden solicitar en nuestras instalaciones o en el perfil del participante en nuestro sitio web.
                            Tambien puede llevar el control de sus pagos en su perfil.

                        </p>
                    </div>

                    <div>
                        <p className="my-3 text-lg font-bold flex">Propiedad Intelectual</p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Huejutla Delfines es una marca registrada, y no se permite el uso de la marca sin nuestro consentimiento expreso.

                            Huejutla delfines es propietario de los logos, imagenes, diseño, códigos , sofware, base de datos y demás elementos de nuestro sitio web, y no se permite el uso de dichos elementos sin nuestro consentimiento expreso.

                            El contenido de nuestro sitio web está protegido por derechos de autor, y no se permite el uso de dicho contenido sin nuestro consentimiento expreso.

                            El contenido generado por los usuarios en nuestro sitio web está protegido por derechos de autor, y no se permite el uso de dicho contenido sin el consentimiento expreso del usuario.


                        </p>

                        <p className='text-gray-500 dark:text-gray-400 mt-2'>
                            Esta prohibido el uso de nuestro sitio web para fines ilegales o no autorizados como ingeniería inversa u obras derivadas, utilizar herramientas de extracción de datos y contenidos de nuestra plataforma, o cualquier otro uso que pueda dañar o sobrecargar nuestra plataforma.

                            En caso de violación de estos términos y condiciones, nos reservamos el derecho de tomar medidas legales.
                        </p>
                    </div>

                    <div>
                        <p className="my-3 text-lg font-bold flex">Marco Legal</p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Aclaración sobre el marco legal que rige nuestros servicios, y ofrecemos ejemplos concretos para mayor comprensión.

                            El marco legal que rige nuestros servicios es el Código Civil Federal, la Ley Federal de Protección al Consumidor y la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.

                            En caso de disputas, se aplicará la legislación mexicana y se resolverán en los tribunales de la Ciudad de Huejutla, Hidalgo.


                        </p>
                    </div>
                    <div>
                        <p className="my-3 text-lg font-bold flex">Envíos</p>
                        <p className="text-gray-500 dark:text-gray-400">
                            No ofrecemos envíos para nuestros servicios.
                            Se pueden solicitar los productos fisicos en nuestras instalaciones.
                        </p>
                    </div>

                    <div>
                        <p className="my-3 text-lg font-bold flex"> ¿Cómo comprar? </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Aclaración sobre los procesos para comprar nuestros productos, asegurando transparencia y justicia, y ofrecemos ejemplos concretos para mayor comprensión.

                            Los productos se pueden comprar en nuestras instalaciones.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">  Los cursos se pueden comprar en nuestras instalaciones .  </p>
                        <p className="text-gray-500 dark:text-gray-400"> Los cursos se pueden comprar en línea a través de un proveedor de servicios de pago externo, y los datos de pago se procesan de forma segura.   </p>
                    </div>

                    <div>
                        <p className="my-3 text-lg font-bold flex"> Descuentos </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Los codigos de descuento se pueden utilizar en nuestras instalaciones o en línea, y se aplican condiciones específicas para cada caso.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400"> El código de descuento aplica para los clientes que han recibido este código, vía su correo electrónico o en el administrador de perfil del usuario </p>
                        <p className="text-gray-500 dark:text-gray-400">El porcentaje de descuento se puede aplicar una sola vez. </p>
                        <p className="text-gray-500 dark:text-gray-400">El porcentaje de descuento no aplica con otras promociones de descuentos, mensualidades sin intereses o cupón </p>

                    </div>


                    <div>
                        <p className="my-3 text-lg font-bold flex"> Sanciones </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            En caso de violación de estos términos y condiciones, nos reservamos el derecho de tomar medidas legales.

                            Las sanciones pueden incluir la prohibición de participar en eventos o actividades organizadas por el club, y la prohibición de utilizar nuestro sitio web.

                            En caso de violación de estos términos y condiciones, nos reservamos el derecho de tomar medidas legales.
                        </p>
                    </div>

                    <div>
                        <p className="my-3 text-lg font-bold flex"> Capacidad </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Podrán usar nuestros servicios las personas que tengan capacidad legal para contratar.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Los menores de edad podrán usar nuestros servicios bajo la supervisión de un adulto responsable.
                        </p>
                    </div>

                    <div>
                        <p className="my-3 text-lg font-bold flex"> Registro y Cuenta </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Quien quiera usar nuestros servicios, deberá completar el formulario de registro con los datos que le sean requeridos. Al completarlo, se compromete a hacerlo de manera exacta, precisa y verdadera y a mantener sus datos siempre actualizados. La Persona Usuaria será la única responsable de la certeza de sus datos de registro. Sin perjuicio de la información brindada en el formulario, podremos solicitar y/o consultar información adicional para corroborar la identidad de la Persona Usuaria.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            La cuenta es personal, única e intransferible, es decir que bajo ningún concepto se podrá vender o ceder a otra persona. Se accede a ella con la contraseña de seguridad que haya elegido y que deberá mantener bajo estricta confidencialidad.
                        </p>

                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            Tenemos la posibilidad de negar el registro o cancelar un registro previamente aceptado, sin que estemos obligados a comunicar o exponer las razones de nuestra decisión y sin que ello genere algún derecho a indemnización o resarcimiento.
                        </p>
                    </div>

                    <div>
                        <p className="my-3 text-lg font-bold flex"> Privacidad de datos </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            La privacidad de los datos de nuestros clientes es muy importante para nosotros. Por eso, nos comprometemos a no divulgar ni compartir la información personal de nuestros clientes con terceros, excepto en los casos en que sea necesario para la prestación de nuestros servicios, o cuando estemos obligados por ley.
                        </p>
                    </div>


                </div>
            </main>

        </Layout>
    )
}

export default Terms