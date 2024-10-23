import Layout from "../Layout";
import clienteAxios from "../../config/clientAxios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentsSection from "./CommentsSection";



const BlogDetail = () => {

  const { id } = useParams();

  const [news, setNews] = useState({});

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await clienteAxios.get(`/news/${id}`);
        setNews(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getNews();

  }, [id]);


  return (
    <Layout>
      <div className='container mx-auto my-10 max-w-3xl'>
        <div className='flex justify-center'>
          <h1 className='text-2xl font-bold text-dark-hard text-center mb-10 mt-10 px-2 py-2 border-[4px] border-yellow-400'>{news.title}</h1>
        </div>
        <div className='flex justify-center'>
          <img src={news.url} alt={news.title} className='w-1/3 h-1/3' />
        </div>
        <div className='flex justify-center'>
          <p className='text-lg font-medium text-dark-hard text-center mt-10 px-8 py-2'>{news.content}</p>
        </div>
        <hr />
        <CommentsSection id={id} />
      </div>
    </Layout>
  )
}

export default BlogDetail