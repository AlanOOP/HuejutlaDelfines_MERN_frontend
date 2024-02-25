
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { images } from '../constants';
import useDelf from '../hooks/useDelf';
import { ToastContainer } from 'react-toastify';
// import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';


const Layout = ({ children }) => {

  const csp = ` 
  default-src 'self'; 
  script-src 'self' 'unsafe-inline'; 
  style-src 'self' 'unsafe-inline'; 
  img-src 'self' data:; 
  font-src 'self' data:; 
  `;

  const { isStyle, setIsStyle, isPlaying, setIsPlaying } = useDelf();

  return (
    <div className={isStyle ? 'no-styles' : ''}>

      {/* <Helmet>
        <meta
          http-equiv="Content-Security-Policy"
          content={csp} />
      </Helmet> */}

      <Header />



      <div className=''>
        <ToastContainer />
        <Toaster
          position="bottom-rights"
          reverseOrder={false}
        />
      </div>

      <div className='fixed top-1/3 '>
        <div className='flex flex-col space-y-2'>
          <Link
            onClick={e => setIsPlaying(!isPlaying)}
            to='/accesibility'
            className='bg-purple-400 text-white px-4 py-2  hover:scale-x-150 rounded-sm'
            title='Accesibilidad para ciegos'
          >
            <img src={images.iconoCiego} alt="" width={35} height={35} />
          </Link>
          <Link
            onClick={e => setIsPlaying(!isPlaying)}
            to='/accesibility'
            className='bg-yellow-400 text-white px-4 py-2 hover:scale-x-150 rounded-sm'
          >
            <img src={images.iconoSor} alt="" width={35} height={35} />
          </Link>
          <Link
            onClick={e => setIsPlaying(!isPlaying)}
            to='/accesibility'
            className='bg-green-500 text-white px-4 py-2 hover:scale-x-150 rounded-sm'
          >
            <img src={images.iconoDis} alt="" width={35} height={35} />
          </Link>

          <button
            onClick={e => setIsStyle(!isStyle)}
            className='bg-red-500 text-white px-4 py-2 hover:scale-x-150 rounded-sm'
          >
            <img src={images.iconoHTML} alt="" width={35} height={35} />
          </button>

        </div>

      </div>

      {children}

      <Footer />

      {
        // <Link
        //   to={'/faq'}
        //   className='fixed bottom-9 right-4'>
        //   <img src={images.iconoAbout} className="h-10 w-10" />
        //   <span>Ayuda.</span>
        // </Link>
      }

    </div >
  )
}

export default Layout