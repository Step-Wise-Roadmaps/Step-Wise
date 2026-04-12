
import firstBackground from '../assets/video/firstBackground.mp4';

import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { forgotPassword, reset } from '../features/auth/authSlice';

const MailIcon = () => (
    <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 10.94 13a2 2 0 0 0 2.12 0L21 7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 5.25h15A1.5 1.5 0 0 1 21 6.75v10.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.25V6.75a1.5 1.5 0 0 1 1.5-1.5Z" />
    </svg>
);

function ForgotPassword() {

    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message  } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
            alert(message);
        }

        if (isSuccess) {
            alert(message);
        }

        dispatch(reset());
    }, [user, isLoading, isError, isSuccess, message])

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(forgotPassword({email}));
    }

    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950">
            <div className="absolute inset-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                >
                    <source src={firstBackground} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-slate-950/70" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.16),transparent_35%)]" />
            </div>

            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-16">
                    <div className="hidden max-w-2xl text-white lg:block">
                        <p className="roboto-bold text-sm uppercase tracking-[0.24em] text-cyan-300">
                            Secure account recovery
                        </p>
                        <h1 className="roboto-extrabold mt-6 text-5xl leading-tight xl:text-6xl">
                            Reset your password and get back into your workspace.
                        </h1>
                        <p className="roboto-light mt-6 max-w-xl text-lg leading-8 text-slate-300">
                            We&apos;ll help you recover access with a clean, simple flow designed to get you back to learning fast.
                        </p>

                        <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                                <p className="roboto-extrabold text-2xl text-white">Private</p>
                                <p className="roboto-light mt-2 text-sm leading-7 text-slate-300">
                                    Recovery instructions are sent only to your registered email.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                                <p className="roboto-extrabold text-2xl text-white">Simple</p>
                                <p className="roboto-light mt-2 text-sm leading-7 text-slate-300">
                                    One quick step to request a fresh password reset link.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none">
                        <div className="rounded-[28px] border border-white/10 bg-white/80 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-5">
                            <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/80 sm:p-8">
                                <div className="text-center sm:text-left">
                                    <p className="roboto-bold text-sm uppercase tracking-[0.22em] text-cyan-700">
                                        StepWise
                                    </p>
                                    <h1 className="roboto-extrabold mt-3 text-3xl text-slate-950 sm:text-4xl">
                                        Forgot your password?
                                    </h1>
                                    <p className="roboto-light mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                                        Enter your email address and we&apos;ll send you a secure link to reset your password.
                                    </p>
                                </div>

                                <div className="mt-8 rounded-2xl border border-cyan-100 bg-cyan-50/80 p-4">
                                    <p className="roboto-medium text-sm text-cyan-900">
                                        Use the email linked to your StepWise account so we can find it quickly.
                                    </p>
                                </div>

                                <form onSubmit={onSubmit} className="mt-8 space-y-5">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="roboto-medium text-sm text-slate-700">
                                            Email address
                                        </label>
                                        <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 transition hover:border-slate-300 focus-within:border-cyan-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-cyan-500/10">
                                            <MailIcon />
                                            <input
                                                id="email"
                                                className="w-full bg-transparent py-3.5 pl-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-base"
                                                type="email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="roboto-medium w-full rounded-2xl bg-slate-950 px-4 py-3.5 text-sm text-white shadow-lg shadow-slate-950/15 transition hover:bg-cyan-900 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 sm:text-base"
                                    >
                                        {isLoading ? "Sending.." : "Send"}
                                    </button>

                                    <p className="text-center text-sm text-slate-600">
                                        <span className="roboto-light">Remember your password? </span>
                                        <Link
                                            to="/login"
                                            className="roboto-medium text-slate-950 transition hover:text-cyan-800 hover:underline"
                                        >
                                            Back to login
                                        </Link>
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

export default ForgotPassword;
