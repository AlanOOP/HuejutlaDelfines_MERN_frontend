<<<<<<< HEAD
=======



import { MdFavorite } from 'react-icons/md'

import { images } from "../constants";
>>>>>>> ae19f65f1bc766fccbe99e6dba83cf5a13ac9c8e
import { Link } from "react-router-dom";
import { Rating } from "@material-tailwind/react";

const CourseCard = ({ course }) => {

  const {
    _id,
    title,
    description,
    category,
    image,
    price,
    offer,
    active,
    instructor,
    cupos } = course;

  return (
    <div
      className={`rounded-sm py-2 overflow-hidden shadow bg-slate-100 px-2 `}
    >
      <Link to={``}>
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${image[0]}`}
          alt="title"
          className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
          loading='lazy'
        />
      </Link>
      <div className="p-5">
        <Link to={`/ blog / `}>
          <h2 className=" text-center font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
            {title}
          </h2>
          <p className="text-dark-light mt-3 text-sm md:text-lg">
            Categoria : {category}
          </p>
          <div className='flex space-x-4'>
            <p className="text-dark-light  text-sm md:text-lg line-through font-bold">
              $1000
            </p>
            <p className='text-dark-light  text-sm md:text-lg'> ${price}</p>
          </div>
        </Link>
        <div className='flex-row flex-auto items-center text-yellow-400'>

          <Rating value={5} readonly className='flex' ratedColor="amber" />

        </div>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <div className="flex flex-col">
              {
                instructor &&
                <h4 className="font-bold  text-dark-soft text-sm md:text-base">
                  Instructor:   {instructor.name + " " + instructor.lastName}
                </h4>

              }

              <div className="flex items-center gap-x-2">
                {/* <span
                  className={`${
                    post.user.verified ? "bg-[#36B37E]" : "bg-red-500"
          } w-fit bg-opacity-20 p-1.5 rounded-full`}
                  >
        {post.user.verified ? (
          <BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]" />
        ) : (
          <AiOutlineClose className="w-1.5 h-1.5 text-red-500" />
        )}
      </span> */}
                {/* <span className="italic text-dark-light text-xs md:text-sm">
                  {post.user.verified ? "Verified" : "Unverified"} writer
                </span> */}
              </div>

            </div >
          </div >
          <span className="font-bold text-dark-light italic text-sm md:text-base">
            {new Date(course.createdAt).getDate()}{" "}
            {new Date(course.createdAt).toLocaleString("default", {
              month: "long",
            })}
          </span>
        </div >

        <div className='mt-2 flex text-center items-center justify-center'>
          <Link
            to={`/course-detail/${_id}`}
            className="w-full gap-x-1 items-center mt-5 lg:mt-0 text-center border-2 border-blue-500 px-6 py-2 rounded-md font-semibold bg-blue-500 text-white hover:bg-blue-900"
          >
            Ver Curso

          </Link>
        </div>


      </div >
    </div >
  )
}

export default CourseCard