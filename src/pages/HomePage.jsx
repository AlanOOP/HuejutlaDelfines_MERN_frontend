
import Layout from '../components/Layout';

import Hero from '../components/home/Hero';
import CoursesHome from '../components/home/CoursesHome';
import Testimonials from '../components/home/Testimonials';
import BlogDetail from '../components/blog/BlogDetail';
import Galery from '../components/home/Galery';
import { news } from '../constants/data';
import ContactForm from '../components/home/ContactForm';
import Blog from './Blog';

const HomePage = () => {

  return (
    <Layout>

      <section className=''>

        <Hero />
        <CoursesHome />

        <Blog />

        <Galery />

        <Testimonials />

        <ContactForm />

      </section>
    </Layout >
  )
}

export default HomePage