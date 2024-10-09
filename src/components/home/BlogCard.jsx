import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ({ item }) => {

    const { _id, title, url, date, content } = item;


    return (
        <div
            className='rounded-sm py-2 overflow-hidden shadow bg-slate-100 px-2 '
        >
            <div>
                <img
                    src={url}
                    alt="title"
                    className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                    loading='lazy'
                />
            </div>
            <div className="p-5">
                <div>
                    <h2 className=" text-center font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
                        {title}
                    </h2>
                    <p className="text-dark-light mt-3 text-sm md:text-lg">
                        {content}
                    </p>
                    <div className='flex space-x-4'>

                        <p className='text-dark-light  text-sm md:text-lg'> {date}</p>
                    </div>
                </div>
                <div className="flex justify-between flex-nowrap items-center mt-6">
                    <div className="flex items-center gap-x-2 md:gap-x-2.5">
                        <div className="flex flex-col">
                            {/* {
                                instructor &&
                                <h4 className="font-bold  text-dark-soft text-sm md:text-base">
                                    Instructor:   {instructor.name + " " + instructor.lastName}
                                </h4>

                            } */}

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
                        {/* {new Date(course.createdAt).getDate()}{" "}
                        {new Date(course.createdAt).toLocaleString("default", {
                            month: "long",
                        })} */}
                    </span>
                </div >

                <div className='mt-2 flex text-center items-center justify-center'>
                    <Link
                        to={`/blog-detail/${_id}`}
                        className="w-full gap-x-1 items-center mt-5 lg:mt-0 text-center border-2 border-blue-500 px-6 py-2 rounded-md font-semibold bg-blue-500 text-white hover:bg-blue-900"
                    >
                        Ver más
                    </Link>
                </div>


            </div >
        </div >
    )
}

export default BlogCard