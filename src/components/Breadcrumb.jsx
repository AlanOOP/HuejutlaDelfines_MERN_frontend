<<<<<<< HEAD

import { Link } from 'react-router-dom';
=======
// import React from 'react';
// import { Link } from 'react-router-dom';
>>>>>>> ae19f65f1bc766fccbe99e6dba83cf5a13ac9c8e

const Breadcrumb = ({ path }) => {



    return (
        <ol className="flex items-center whitespace-nowrap p-2 border-y border-gray-200 " aria-label="Breadcrumb">
            <li className="inline-flex items-center">
                <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 " href="#">
                    <svg className="flex-shrink-0 me-3 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                    Home
                </a>
                <svg className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400  " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </li>
            <li className="inline-flex items-center">
                <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 " href="#">
                    <svg className="flex-shrink-0 me-3 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="14" y="3" rx="1" /><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" /></svg>

                    <svg className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400  " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </a>
            </li>
            <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-gray-200" aria-current="page">
                {path}
            </li>
        </ol>
    )
}

export default Breadcrumb