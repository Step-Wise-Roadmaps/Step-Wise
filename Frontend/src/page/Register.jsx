
// import background video
import firstBackground from '../assets/video/firstBackground.mp4'

// import google icon
import google from '../assets//authImg/google.png'

import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { register, reset } from '../features/auth/authSlice';

function Register() {

    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        password: '',
        selected_skill_id: ''
    })

    const { full_name, email, password, selected_skill_id } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            alert(message);
        }

        if (isSuccess || user) {
            navigate('/');
        }

        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("selected_skill_id:", selected_skill_id);
        const userData = { full_name, email, password, selected_skill_id };
        dispatch(register(userData));
    };

    return (
        <>
            <div>
                <div className="relative flex flex-col items-center justify-center min-h-screen px-4">

                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className='absolute inset-0 w-full h-full object-cover'>
                        <source src={firstBackground} type="video/mp4" />
                    </video>

                    <div className='absolute inset-0 bg-black/40'></div>
                    <div className="relative z-10 text-white bg-transparent border-2 border-white/20 shadow-2xl shadow-black/40 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-lg w-full max-w-md md:max-w-lg">
                        <form onSubmit={onSubmit} className="space-y-6 w-full">
                            <h1 className="roboto-medium text-xl sm:text-2xl">Register</h1>

                            <button type="button" className="bg-white text-black py-2 w-full roboto-regular rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300">
                                <span className="flex justify-center gap-2 items-center">
                                    <img className='w-[20px] h-[20px]' src={google} alt="Google" />
                                    Register with Google
                                </span>
                            </button>

                            <div>
                                <p className="my-2">Fullname</p>
                                <input 
                                    className='bg-white text-black w-full p-4 py-2 outline-none rounded-md' 
                                    type="text" 
                                    name="full_name"
                                    value={full_name} 
                                    onChange={onChange} 
                                    placeholder='Enter Fullname' 
                                    required 
                                />
                            </div>

                            <div>
                                <p className="my-2">Email</p>
                                <input 
                                    className='bg-white text-black w-full p-4 py-2 outline-none rounded-md' 
                                    type="email" 
                                    name="email" 
                                    value={email} 
                                    onChange={onChange} 
                                    placeholder='Enter Email' 
                                    required 
                                />
                            </div>

                            <div>
                                <p className="my-2">Password</p>
                                <input 
                                    className='bg-white text-black w-full p-4 py-2 outline-none rounded-md' 
                                    type="password" 
                                    name="password" 
                                    value={password} 
                                    onChange={onChange} 
                                    placeholder='Enter Password' 
                                    required 
                                />
                            </div>

                            <div>
                                <p className="my-2">Skills</p>
                                <select 
                                    className='w-full bg-white text-black py-2 p-4 outline-none rounded-md' 
                                    name="selected_skill_id" 
                                    value={selected_skill_id} 
                                    onChange={onChange}
                                >
                                    <option value="">Select a skill</option>
                                    <option value="1">Photoshop</option>
                                    <option value="2">Web Development</option>
                                    <option value="3">UI/UX Design</option>
                                </select>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isLoading}
                                className="bg-white text-black py-2 w-full roboto-regular rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300">
                                {isLoading ? 'Processing...' : 'Register'}
                            </button>

                            <div className='flex justify-center space-x-2 text-sm'>
                                <p className='roboto-light'>Already have an account?</p>
                                <Link to="/login" className='roboto-regular underline cursor-pointer'>Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;