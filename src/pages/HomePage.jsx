
import Layout from '../components/Layout';

import Hero from '../components/home/Hero';
import CoursesHome from '../components/home/CoursesHome';
import Testimonials from '../components/home/Testimonials';
import BlogDetail from '../components/blog/BlogDetail';
import Galery from '../components/home/Galery';
import { news } from '../constants/data';
import ContactForm from '../components/home/ContactForm';

const HomePage = () => {

  return (
    <Layout>

      <Hero />
      <CoursesHome />

      <div className='flex flex-col my-10 bg-slate-200'>
        {/* badge */}

        <h5 className='text-5xl font-bold text-dark-hard text-center mb-10 mt-10'>Noticias </h5>
        <div className='flex container mx-auto justify-start'>
          <span className="bg-blue-100 text-blue-800 text-md mx-2 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            Las más recientes:
          </span>
        </div>
        <div className='flex justify-center items-center'>
          <div className=' grid grid-cols-1 md:grid-cols-3  md:gap-x-2 gap-y-2 pb-10  mt-5'>

            {
              news.map((item) => (
                <BlogDetail
                  key={item.id}
                  item={item}
                />
              ))
            }

          </div>

        </div>
      </div>

      <Galery />

      <Testimonials />

      <ContactForm />

    </Layout >
  )
}

export default HomePage