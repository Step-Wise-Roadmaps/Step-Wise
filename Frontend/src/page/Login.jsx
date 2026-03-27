
import firstBackground from '../assets/video/firstBackground.mp4'

function Login() {
    return(
        <>
            <div>
                <div className='flex flex-col justify-center items-center h-screen'>
                    <div className='bg-cyan-900 rounded-2xl p-10  text-white'>
                        <div className='flex flex-col justify-center items-start'>
                            <h1 className='roboto-medium text-2xl pb-10'>Login to your Account</h1>
                            
                            <button className='px-41 py-2 bg-white text-black mb-7'>Login with Google</button>
                            <div className='flex mb-10'>
                                <div className='border-1 px-20 h-0 mt-3'></div>
                                <span className='px-1 roboto-extralight'>or Sign with Email</span>
                                <div className='border-1 px-20 h-0 mt-3'></div>
                            </div>

                            <div className='space-y-10'>
                                <div>
                                    <p className='my-2'>Email</p>
                                    <input className='bg-white text-black pl-5 px-62 py-2' type="Email" placeholder='Enter your Email' />
                                </div>

                                <div>
                                    <p className='my-2'>Password</p>
                                    <input className='bg-white text-black pl-5 px-62 py-2' type="Email" placeholder='Enter your Password' />

                                    <div className='flex mt-2 ml-5 space-x-64'>
                                        <p>Rember me</p>
                                        <p>Forget pass</p>
                                    </div>
                                </div>

                                <div>
                                    <button className='px-52 py-2 bg-white text-black roboto-medium'>Login</button>
                                </div>

                                <div className='flex justify-center space-x-2'>
                                    <p>Not Registered Yet?</p>
                                    <p>Create an account</p>
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