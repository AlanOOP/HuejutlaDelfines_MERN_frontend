
import Sidebar from './Sidebar';
import Layout from '../../components/Layout';

const LayoutUser = ({children}) => {
  return (
    <div className='flex-grow'>
        <Layout>

            
            <div className="mx-4 my-24 md:mx-12 md:mt-32 lg:mt-24 flex flex-col md:flex-row">  
                <Sidebar />

            {
            children
            }
            </div>
        </Layout>

    </div>
  )
}

export default LayoutUser