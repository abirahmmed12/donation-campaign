
import { Outlet } from 'react-router-dom';
import Navbar from '../components/header/Navbar/Navbar';


const Mainlayout = () => {
    return (
        <div className=' max-w-screen-xl m-auto'>
            
            <Navbar></Navbar>
          <div className='mt-8'>
          <Outlet></Outlet>
          </div>
        </div>
        
    );
};

export default Mainlayout;