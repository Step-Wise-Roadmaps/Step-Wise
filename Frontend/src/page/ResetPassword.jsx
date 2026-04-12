import firstBackground from '../assets/video/firstBackground.mp4';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { resetPassword, reset } from '../features/auth/authSlice';

const MailIcon = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 10.94 13a2 2 0 0 0 2.12 0L21 7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 5.25h15A1.5 1.5 0 0 1 21 6.75v10.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.25V6.75a1.5 1.5 0 0 1 1.5-1.5Z" />
    </svg>
);

function ResetPassword() {
    const [password, setPassword] = useState('');
    const { token } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoading, isSuccess, isError, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) {
            alert(message);
            dispatch(reset());
        }

        if (isSuccess) {
            alert("Success: Password has been reset!");
            dispatch(reset());
            setTimeout(() => navigate('/login'), 2000);
        }
    }, [isError, isSuccess, message, navigate, dispatch]);

    const onSubmit = (e) => {
        e.preventDefault();
        // ትክክለኛው action resetPassword ነው
        dispatch(resetPassword({ token, password }));
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950">
            <div className="absolute inset-0">
                <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                    <source src={firstBackground} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-slate-950/70" />
            </div>

            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-16">
                    <div className="hidden max-w-2xl text-white lg:block">
                        <h1 className="roboto-extrabold text-5xl leading-tight">Create a new password</h1>
                        <p className="mt-6 text-lg text-slate-300">Enter your strong new password below to regain access to StepWise.</p>
                    </div>

                    <div className="mx-auto w-full max-w-md">
                        <div className="rounded-[28px] border border-white/10 bg-white/80 p-5 backdrop-blur-xl">
                            <div className="rounded-3xl bg-white p-8 shadow-sm">
                                <h2 className="roboto-extrabold text-3xl text-slate-950">Reset Password</h2>
                                
                                <form onSubmit={onSubmit} className="mt-8 space-y-5">
                                    <div className="space-y-2">
                                        <label className="roboto-medium text-sm text-slate-700">New Password</label>
                                        <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 focus-within:bg-white">
                                            <MailIcon />
                                            <input
                                                className="w-full bg-transparent py-3.5 pl-3 text-sm outline-none"
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                placeholder="••••••••"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full rounded-2xl bg-slate-950 py-3.5 text-white hover:bg-cyan-900 transition disabled:bg-slate-400"
                                    >
                                        {isLoading ? "Updating..." : "Update Password"}
                                    </button>

                                    <p className="text-center text-sm">
                                        <Link to="/login" className="font-bold text-slate-950 hover:underline">Back to login</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;