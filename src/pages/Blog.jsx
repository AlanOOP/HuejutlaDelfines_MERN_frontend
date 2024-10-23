
import { useEffect, useState } from "react"
import BlogCard from "../components/home/BlogCard"
import clienteAxios from "../config/clientAxios";

const Blog = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await clienteAxios.get('/news');
        setNews(response.data);
      
      } catch (error) {
        console.log(error);
      }
    }
    getNews();
  }, [])

  return (
    <div className='flex flex-col my-10 bg-slate-200'>
      {/* badge */}

      <div className='flex justify-center'>
        <h3 className='text-5xl font-bold text-dark-hard text-center mb-10 mt-10 px-8 py-2 border-[8px] border-yellow-400'>Noticias </h3>
      </div>

      <div className='flex container mx-auto justify-start'>
        <span className="bg-blue-100 text-blue-800 text-md mx-2 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          Las más recientes:
        </span>
      </div>

      <div className='sm:mx-14 mx-2 sm:grid grid-cols-3 gap-x-4 gap-y-5 pb-10 flex flex-wrap'>

        {
          news.map((item) => (
            <BlogCard
              key={item.id}
              item={item}
            />
          ))
        }

      </div>


    </div>

  )
}

export default Blog