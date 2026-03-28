
import { Link } from 'react-router-dom'

// import background video
import firstBackground from '../assets/video/firstBackground.mp4'

// import google icon
import google from '../assets//authImg/google.png'

function Login() {
    return(
        <>
           <div>
                <div className='relative flex flex-col justify-center items-center min-h-screen px-4'>
                    
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className='absolute inset-0 w-full h-full object-cover'
                    >
                        <source src={firstBackground} type="video/mp4" />
                    </video>

                    <div className='absolute inset-0 bg-black/40'></div>
                    <div className='relative z-10 bg-transparent border-2 backdrop-blur-lg border-white/20 shadow-2xl shadow-black/40 rounded-2xl p-6 sm:p-8 md:p-10 text-white w-full max-w-md md:max-w-lg'>
                    
                        <div className='flex flex-col justify-center items-start w-full'>
                            
                            <h1 className='roboto-medium text-xl sm:text-2xl pb-6 sm:pb-10'>
                                Login to your Account
                            </h1>

                            <button className='w-full py-2 bg-white text-black mb-6 roboto-regular rounded-lg cursor-pointer outline-none hover:bg-gray-200 transition duration-300'>
                                <span className='flex items-center gap-2 justify-center'>
                                    <img className='w-[20px] h-[20px]' src={google} alt="" />
                                    Login with Google
                                </span>
                            </button>

                            <div className='flex items-center w-full mb-8'>
                                <div className='flex-1 border-t'></div>
                                <span className='px-2 text-sm roboto-extralight'>
                                    or Sign with Email
                                </span>
                                <div className='flex-1 border-t'></div>
                            </div>

                            <div className='space-y-6 w-full'>
                            
                            <div className='w-full'>
                                <p className='my-2'>Email</p>
                                <input 
                                className='w-full bg-white text-black pl-4 py-2 rounded-md outline-none' 
                                type="email" 
                                placeholder='Enter your Email' 
                                />
                            </div>

                            <div className='w-full'>
                                <p className='my-2'>Password</p>
                                <input 
                                className='w-full bg-white text-black pl-4 py-2 rounded-md outline-none' 
                                type="password" 
                                placeholder='Enter your Password' 
                                />

                                <div className='flex justify-between mt-2 text-sm'>
                                    <label className='flex items-center gap-2 cursor-pointer'>
                                        <input 
                                        type="checkbox" 
                                        className='w-4 h-4 accent-cyan-500 cursor-pointer'
                                        />
                                        <span>Remember me</span>
                                    </label>
                                    <p className='cursor-pointer hover:underline'>
                                        Forgot password?
                                    </p>
                                </div>
                            </div>

                            <div className='w-full'>
                                <button className='w-full py-2 bg-white text-black roboto-medium rounded-lg hover:bg-gray-200 transition duration-300 cursor-pointer'>
                                Login
                                </button>
                            </div>

                            <div className='flex justify-center space-x-2 text-sm'>
                                <p className='roboto-light'>Not Registered Yet?</p>
                                <Link to="/register" className='roboto-regular underline cursor-pointer'>Create an account</Link>
                            </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;