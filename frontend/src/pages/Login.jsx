import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaKey } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

const Login = () => {
  return (
    <div
    className='flex justify-between bg-[#e5e5e5]'
    >
        {/* hero image */}
        <div
        className='hidden w-full lg:flex items-center justify-center h-dvh'
        >
            <img src="images/Group.png" alt="login" 
            className='w-135'
            />
        </div>

        {/* form */}
        <div
        className='flex w-full items-center justify-center lg:justify-start h-dvh'
        >        
            <div
            className='bg-white py-10 px-5 md:py-10 md:px-15 flex flex-col gap-4 w-[90%]'
            >
                <div className='text-4xl font-medium'>
                    <h1>Welcome to</h1>
                    <h1
                    className='text-[#6358dc] font-bold'
                    >URL Shortener</h1>
                </div>

                <form
                className='flex flex-col gap-5'
                >
                    <button
                    className='bg-white drop-shadow-lg flex w-full justify-center items-center gap-2 py-3 cursor-pointer'
                    >
                        <FcGoogle/>
                        <span>Sign In With Google</span>
                    </button>
                    <button
                    className='bg-white drop-shadow-lg flex w-full justify-center items-center gap-2 py-3 cursor-pointer'
                    >
                        <FaFacebookF
                        className='text-[#3b5999]'
                        />
                        <span>Sign In With Facebook</span>
                    </button>
                </form>

                <div
                className='flex items-center'
                >
                    <div
                    className='border-2 border-gray-400 flex-grow'
                    ></div>
                    <span
                    className='px-3'
                    >OR</span>
                    <div
                    className='border-2 border-gray-400 flex-grow'
                    ></div>
                </div>

                <div>
                    <form action=""
                    className='flex flex-col gap-4'
                    >
                        <div
                        className='bg-[#ececec] flex items-center px-3 py-2 gap-3' 
                        >
                            <div>
                                <IoMail className='h-6 w-6'/>
                            </div>
                            <div
                            className='flex flex-col w-full'
                            >
                                <label htmlFor="" className='text-sm text-gray-700'>Email</label>
                                <input type="email" name="email"   placeholder='enter email address'
                                className='focus:outline-none w-full'
                                />
                            </div>
                        </div>
                        <div
                        className='bg-[#ececec] flex items-center px-3 py-2 gap-3' 
                        >
                            <div>
                                <FaKey className='h-6 w-6'/>
                            </div>
                            <div
                            className='flex flex-col w-full'
                            >
                                <label htmlFor="" className='text-sm text-gray-700'>Password</label>
                                <input type="password" name="password" placeholder='enter password'
                                className='focus:outline-none w-full'
                                />
                            </div>
                        </div>
                        <div
                        className='flex justify-between'
                        >
                            <div
                            className='flex items-center gap-1 text-sm'
                            >
                                <input type="checkbox" name="" />
                                <label htmlFor="">Remember Me?</label>
                            </div>
                            <div
                            className='text-blue-600 text-sm'
                            >
                                Forgot password?
                            </div>
                        </div>
                        <div>
                            <button
                            className='bg-[#6358dc] w-full py-3 text-md text-white'
                            >Login</button>
                        </div>
                    </form>
                    <div
                    className='text-center mt-6'
                    >
                        <span>Don't have an account?</span>
                        <Link to={"/register"} className='text-blue-600'> Register</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login