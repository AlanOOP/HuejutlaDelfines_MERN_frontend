
import Layout from '../components/Layout';
import imgMision from '../assets/images/imgMision.jpg'
import imgVision from '../assets/images/imgVision.jpg'


const AboutMe = () => {

  const data = [
    {
      title: 'Mision',
      description: 'Nuestra misión es proporcionar un ambiente seguro y acogedor donde los estudiantes de todas las edades puedan aprender y disfrutar de la natación. Nos comprometemos a ofrecer programas educativos de calidad, apoyados por entrenadores capacitados y dedicados. Buscamos fomentar la confianza en el agua, promover la salud y el bienestar, y contribuir al desarrollo físico y emocional de nuestros estudiantes. A través de la excelencia en la enseñanza y la gestión eficiente, aspiramos a ser un pilar en la comunidad, inspirando a generaciones de nadadores.',
      img: imgMision
    },
    {
      title: 'Vision',
      description: 'Ser reconocidos como la principal institución de enseñanza de natación en Huejutla de Reyes, Hidalgo, comprometidos con la excelencia, la innovación y el desarrollo integral de nuestros estudiantes. Buscamos ser un referente en la promoción de un estilo de vida saludable a través de la práctica de la natación, destacando por nuestro compromiso con la seguridad, la calidad educativa y la formación de nadadores competentes y confiados.',
      img: imgVision
    },
  ]

  return (
    <Layout>

      <section className='max-w-[1200px] py-16 mx-auto'>

        <h1 className='sm:text-2xl md:text-5xl font-bold text-dark-hard text-center mb-10'> Sobre Nosotros</h1>

        <div className='bg-white lg:shadowxl lg:shadow-slate-200/50'>
          {
            data.map(({ index, title, description, img }) => (
              <div key={index} className='bg-blue-100 flex flex-col md:even:flex-row-reverse md:odd:flex-row'>
                <div className='flex-1'>
                  <img src={img} alt={title} loading='lazy' className='w-full h-80 md:h-96' />
                </div>
                <div className='flex-1 items-center flex'>
                  <div className='p-10'>
                    <h1 className='text-xl text-primary md:text-lg font-bold mb-3'>{title}</h1>
                    <p className='text-xl md:text-lg leading-6 whitespace-pre-line text-dark-soft'>{description}</p>
                  </div>

                </div>
              </div>
            ))
          }
        </div>

      </section>

    </Layout>
  )
}

export default AboutMe