
import { Link } from 'react-router-dom';

// import background video
import firstBackground from '../assets/video/firstBackground.mp4';

// import google icon
import google from '../assets//authImg/google.png';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { login, reset } from '../features/auth/authSlice';

import { useSelector, useDispatch } from 'react-redux';

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

const LockIcon = () => (
    <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 10.5V8a4.5 4.5 0 1 1 9 0v2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 10.5h10.5A2.25 2.25 0 0 1 19.5 12.75v5.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 18.25v-5.5a2.25 2.25 0 0 1 2.25-2.25Z" />
    </svg>
);

const GitHubIcon = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42A3.18 3.18 0 0 0 3.67 18c-1.08-.74.08-.72.08-.72a2.52 2.52 0 0 1 1.84 1.24 2.56 2.56 0 0 0 3.49 1 2.54 2.54 0 0 1 .76-1.6c-2.67-.3-5.47-1.33-5.47-5.92a4.63 4.63 0 0 1 1.24-3.22 4.3 4.3 0 0 1 .12-3.17s1-.32 3.3 1.23a11.39 11.39 0 0 1 6 0c2.27-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 0 1 .12 3.17 4.62 4.62 0 0 1 1.24 3.22c0 4.6-2.8 5.61-5.48 5.91a2.84 2.84 0 0 1 .81 2.2v3.26c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
);

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            alert(message);
        }

        if (isSuccess) {
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
        const userData = { email, password };
        dispatch(login(userData));
    };

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
                            Welcome back
                        </p>
                        <h1 className="roboto-extrabold mt-6 text-5xl leading-tight xl:text-6xl">
                            Sign in and keep your learning roadmap moving.
                        </h1>
                        <p className="roboto-light mt-6 max-w-xl text-lg leading-8 text-slate-300">
                            Access your personalized paths, saved progress, and next milestones from one clean workspace built for focused growth.
                        </p>

                        <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                                <p className="roboto-extrabold text-2xl text-white">Fast access</p>
                                <p className="roboto-light mt-2 text-sm leading-7 text-slate-300">
                                    Jump back into your plan with zero clutter.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                                <p className="roboto-extrabold text-2xl text-white">Clear progress</p>
                                <p className="roboto-light mt-2 text-sm leading-7 text-slate-300">
                                    Track milestones and keep momentum each week.
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
                                        Log in to your account
                                    </h1>
                                    <p className="roboto-light mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                                        Continue your roadmap with a clean, secure sign-in experience.
                                    </p>
                                </div>

                                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                                    >
                                        <img className="h-5 w-5" src={google} alt="Google" />
                                        Continue with Google
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                                    >
                                        <GitHubIcon />
                                        Continue with GitHub
                                    </button>
                                </div>

                                <div className="my-8 flex items-center gap-4">
                                    <div className="h-px flex-1 bg-slate-200" />
                                    <span className="roboto-light text-xs uppercase tracking-[0.22em] text-slate-400">
                                        Or continue with email
                                    </span>
                                    <div className="h-px flex-1 bg-slate-200" />
                                </div>

                                <form onSubmit={onSubmit} className="space-y-5">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="roboto-medium text-sm text-slate-700">
                                            Email address
                                        </label>
                                        <div className="group flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-cyan-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-cyan-500/10 hover:border-slate-300">
                                            <MailIcon />
                                            <input
                                                id="email"
                                                className="w-full bg-transparent py-3.5 pl-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-base"
                                                type="email"
                                                name="email"
                                                value={email}
                                                onChange={onChange}
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between gap-3">
                                            <label htmlFor="password" className="roboto-medium text-sm text-slate-700">
                                                Password
                                            </label>
                                            <button
                                                type="button"
                                                className="text-sm font-medium text-cyan-700 transition hover:text-cyan-800 hover:underline"
                                            >
                                                Forgot password?
                                            </button>
                                        </div>

                                        <div className="group flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-cyan-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-cyan-500/10 hover:border-slate-300">
                                            <LockIcon />
                                            <input
                                                id="password"
                                                className="w-full bg-transparent py-3.5 pl-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-base"
                                                type="password"
                                                name="password"
                                                value={password}
                                                onChange={onChange}
                                                placeholder="Enter your password"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between gap-4 pt-1">
                                        <label className="flex items-center gap-3 text-sm text-slate-600">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500/30"
                                            />
                                            <span className="roboto-light">Remember me</span>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="roboto-medium w-full rounded-2xl bg-slate-950 px-4 py-3.5 text-sm text-white shadow-lg shadow-slate-950/15 transition hover:bg-cyan-900 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
                                    >
                                        {isLoading ? 'Processing...' : 'Log In'}
                                    </button>

                                    <p className="text-center text-sm text-slate-600">
                                        <span className="roboto-light">Don&apos;t have an account? </span>
                                        <Link
                                            to="/register"
                                            className="roboto-medium text-slate-950 transition hover:text-cyan-800 hover:underline"
                                        >
                                            Create one
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

export default Login;
