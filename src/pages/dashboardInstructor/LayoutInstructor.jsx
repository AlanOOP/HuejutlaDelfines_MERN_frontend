import React from 'react';
import Sidebar from './Sidebar';
import Layout from '../../components/Layout';

const LayoutInstructor = ({ children }) => {
    return (
        <div className='flex-grow'>
            <Layout>
                <div className="my-2 flex flex-col md:flex-row">
                    <Sidebar />

                    {
                        children
                    }
                </div>
            </Layout>
        </div>
    )
}

export default LayoutInstructor