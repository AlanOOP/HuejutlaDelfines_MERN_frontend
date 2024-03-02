
const BlogDetail = ({ item }) => {

  const { id, tittle, image, date, description } = item;

  return (
    <div className=" flex">
      <div className="max-w-3xl">
        <div
          className="m-4  rounded-sm bg-white p-6 shadow-lg ">
          <div className="max-w-md">
            <div
              className="">
              <img
                src={image}
                className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60 "
                alt="Estilos de nado"
                loading='lazy'
              />
            </div>
            <div className="mt-5 space-y-3">
              <p
                className="mb-2 text-xl font-semibold text-neutral-800 capitalize">
                {tittle}
              </p>
              <p
                className="mb-0 font-semibold text-neutral-500 ">
                Fecha: <span className="text-neutral-700 ">{date}</span>
              </p>
              <p
                className="mb-6 font-light text-neutral-500 ">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail