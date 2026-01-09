import {RxExit} from 'react-icons/rx'
import {TbLogin2} from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import Search from './Search';

const Navbar = () => {

    const user = false;

  return (
    <nav className='flex-grow'>
       <ul
       className='text-white flex items-center justify-end gap-3'
       >
        {
            user ? (
            <div className=' flex gap-5 items-center justify-end flex-grow'>
                <div
                className='hidden md:flex gap-5'
                >
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/user/all-links"}>All Links</Link>
                    </li>
                    <li>
                        <Link to={"/support-us"}>Support Us</Link>
                    </li>
                    <li>
                        <Link to={"/contact-us"}>Contact Us</Link>
                    </li>
                </div>
                <li
                className='hidden border-1 md:flex items-center justify-between w-33 px-4 py-1 rounded-4xl'
                >
                    <div>
                        <span
                        className='text-xs text-gray-400'
                        >Welcome</span>
                        <h3
                        className='font-semibold text-sm'
                        >Vishal</h3>
                    </div>
                    <div>
                        <MdOutlineKeyboardArrowDown className='h-6 w-6 cursor-pointer'/>
                    </div>
                </li>
                {/* <li
                className='bg-primary py-4 px-4 rounded-full shadow-[0px_0px_10px_rgb(99_88_220)] relative'
                >
                    <span
                    className='absolute top-1 right-2 text-white text-xs'
                    >22</span>
                    <FaBell className='w-4 h-4'/>
                </li> */}
                <li
                className='border-1 bg-gray-50/10 py-2 px-4 rounded-full'
                >
                    <span
                    className='text-xl'
                    >V</span>
                </li>
            </div>
            ) : (
            <div
            className=' flex gap-5'
            >
                <li
                className='text-md md:text-md'
                >
                    <Link to={"/login"}
                    className='bg-gray-50/10 border-1 py-2 px-7 shadow-lg rounded-full flex items-center gap-1'
                    >
                        <span>Login</span>
                        <RxExit/>    
                    </Link>
                </li>
                <li
                className='hidden md:block text-md'
                >
                    <Link 
                    className='bg-primary py-2 px-4 drop-shadow-[0px_0px_5px_rgb(99_88_220)] rounded-full flex items-center gap-1'
                    to={"/register"}>
                        <span>Register Now</span>
                    </Link>
                </li>
            </div>
            ) 
        }
            

            
        </ul> 
    </nav>
  )
}

export default Navbar