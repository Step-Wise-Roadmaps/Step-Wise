
import google from '../assets//authImg/google.png'

function Register() {
    return (
        <>
            <div>
                <div className="relative flex flex-col items-center justify-center min-h-screen px-4">

                    <div className='absolute inset-0 bg-black/40'></div>
                    <div className="relative z-10 text-white bg-cyan-900 p-6 sm:p-8 md:p-10 rounded-lg w-full max-w-md md:max-w-lg">
                        <div className="space-y-6 w-full">
                            <h1 className="roboto-medium text-xl sm:text-2xl">Register</h1>

                            <button className="bg-white text-black py-2 w-full roboto-regular rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300">
                                <span className="flex justify-center gap-2 items-center">
                                    <img className='w-[20px] h-[20px]' src={google} alt="Google" />
                                    Register with Google
                                </span>
                            </button>

                            <div>
                                <p className="my-2">Fullname</p>
                                <input className='bg-white text-black w-full p-4 py-2 outline-none rounded-md' type="text" placeholder='Enter Fullname' />
                            </div>

                            <div>
                                <p className="my-2">Email</p>
                                <input className='bg-white text-black w-full p-4 py-2 outline-none rounded-md' type="email" placeholder='Enter Email' />
                            </div>

                            <div>
                                <p className="my-2">Password</p>
                                <input className='bg-white text-black w-full p-4 py-2 outline-none rounded-md' type="password" placeholder='Enter Password' />
                            </div>

                            <div>
                                <p className="my-2">Skills</p>
                                <select className='w-full bg-white text-black py-2 p-4 outline-none rounded-md' name="Skills" id="Skills">
                                    <option value="">Select a skill</option>
                                    <option value="Photoshop">Photoshop</option>
                                    <option value="WebDevelopment">Web Development</option>
                                    <option value="Design">UI/UX Design</option>
                                </select>
                            </div>

                            <div>
                                <button className="bg-white text-black py-2 w-full roboto-regular rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300">
                                    Register
                                </button>
                            </div>

                            <div className='flex justify-center space-x-2 text-sm'>
                                <p className='roboto-light'>Already have an account?</p>
                                <p className='roboto-regular underline cursor-pointer'>Login</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;