import React from 'react'

const BlogDetail = () => {
  return (
    <div class="overflow-hidden">
      <div class="max-w-3xl">
        <div
          class="m-4  rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20">
          <div class="max-w-md">
            {/* <div
              class="">
              <img
                src="https://www.ccnatacion.com//wp-content/uploads/2019/10/estilos-de-natacion-clubca%C3%B1ada2.jpg"
                class="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60 "
                alt="Estilos de nado" />
            </div> */}
            <div class="mt-5 space-y-3">
              <p
                class="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Nado de Crol
              </p>
              <p
                class="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                Escrito por: <span class="text-neutral-700 dark:text-neutral-300">Juan Perez</span>
              </p>
              <p
                class="mb-6 font-light text-neutral-500 dark:text-neutral-300">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                quam sapiente molestiae numquam quas, voluptates omnis nulla
                ea odio quia similique corrupti magnam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail