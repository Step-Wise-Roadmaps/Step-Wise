import { useState } from 'react';

import rokateImg from '../assets/HeroImg/rokateImg.png';
import bookImg from '../assets/HeroImg/bookImg.png';
import pointer from '../assets/HeroImg/pointer.png';
import Photography from '../assets/HeroImg/Photography.png';
import secondBackground from '../assets/video/secondBackground.mp4';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full rounded-2xl border border-slate-200 bg-white/90 px-5 py-4 shadow-sm shadow-slate-200/60 backdrop-blur-sm transition hover:border-cyan-200 hover:shadow-md md:px-6">
            <button
                className="flex w-full items-center justify-between gap-4 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="roboto-bold text-base text-slate-900 md:text-lg">{question}</span>
                <span
                    className={`text-lg text-cyan-900 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                >
                    v
                </span>
            </button>
            <div
                className={`overflow-hidden text-sm text-slate-600 transition-all duration-300 md:text-base ${
                    isOpen ? 'max-h-40 pt-3' : 'max-h-0'
                }`}
            >
                <p className="roboto-light leading-7">{answer}</p>
            </div>
        </div>
    );
};

const methodSteps = [
    {
        title: 'Discover a goal',
        description: 'Start with the skill you want to learn and the level you are at today.',
        image: rokateImg,
    },
    {
        title: 'Get an AI roadmap',
        description: 'Receive a guided sequence of lessons, projects, and milestones in minutes.',
        image: pointer,
    },
    {
        title: 'Learn with clarity',
        description: 'Follow a structured path that keeps progress visible and removes guesswork.',
        image: bookImg,
    },
];

const popularPaths = [
    {
        title: 'Photography',
        description:
            'Master framing, exposure, editing, and storytelling with a practical path from beginner to pro.',
    },
    {
        title: 'UI/UX Design',
        description:
            'Build strong design fundamentals, wireframes, systems, and portfolio-ready product workflows.',
    },
    {
        title: 'Frontend Development',
        description:
            'Move from HTML and CSS basics to React, responsive interfaces, and polished production apps.',
    },
    {
        title: 'Data Analytics',
        description:
            'Learn spreadsheets, SQL, dashboards, and decision-ready analysis with real-world exercises.',
    },
];

function Hero() {
    const faqs = [
        {
            question: 'How does StepWise AI create personalized roadmaps?',
            answer:
                'StepWise looks at your goal, your experience level, and the order topics should be learned in so you get a practical step-by-step path instead of a random list of resources.',
        },
        {
            question: 'Is there a limit to the number of paths I can explore?',
            answer:
                'No. You can create multiple learning journeys and track each one independently as your interests evolve.',
        },
        {
            question: 'Can I request a specific path or course?',
            answer:
                'Yes. If you do not see the topic you want, request a custom path and StepWise can generate a roadmap tailored to that exact goal.',
        },
    ];

    return (
        <div className="bg-slate-50 text-slate-900">
            <section className="relative isolate overflow-hidden">
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={secondBackground}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-slate-950/65" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_35%),linear-gradient(to_bottom,rgba(15,23,42,0.35),rgba(15,23,42,0.88))]" />

                <div className="relative mx-auto flex min-h-[calc(100vh-2rem)] max-w-7xl items-center px-6 pb-20 pt-28 sm:px-8 lg:px-12">
                    <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
                        <div className="max-w-3xl">
                            <span className="roboto-bold inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-100 backdrop-blur-sm">
                                AI-powered learning roadmap
                            </span>
                            <h1 className="roboto-extrabold mt-6 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                                Learn any skill with a roadmap that feels clear from day one.
                            </h1>
                            <p className="roboto-light mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                                StepWise turns overwhelming topics into a guided path with focused milestones,
                                curated resources, and steady progress you can actually follow.
                            </p>

                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <button className="roboto-bold rounded-full bg-cyan-400 px-7 py-4 text-sm text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 sm:text-base">
                                    Start Learning
                                </button>
                                <button className="roboto-medium rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm text-white backdrop-blur-sm transition hover:bg-white/15 sm:text-base">
                                    Explore Paths
                                </button>
                            </div>

                            <div className="mt-12 grid gap-4 sm:grid-cols-3">
                                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                                    <p className="roboto-extrabold text-2xl text-white">1,200+</p>
                                    <p className="roboto-light mt-1 text-sm text-slate-300">Curated learning steps</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                                    <p className="roboto-extrabold text-2xl text-white">Fast</p>
                                    <p className="roboto-light mt-1 text-sm text-slate-300">Roadmaps generated in minutes</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                                    <p className="roboto-extrabold text-2xl text-white">Focused</p>
                                    <p className="roboto-light mt-1 text-sm text-slate-300">Less noise, more progress</p>
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto w-full max-w-md">
                            <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
                                <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/70">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="roboto-bold text-sm uppercase tracking-[0.2em] text-cyan-700">
                                                Weekly Focus
                                            </p>
                                            <h2 className="roboto-extrabold mt-2 text-2xl text-slate-900">
                                                Frontend Roadmap
                                            </h2>
                                        </div>
                                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                                            Active
                                        </span>
                                    </div>

                                    <div className="mt-6 space-y-4">
                                        <div className="rounded-2xl bg-slate-50 p-4">
                                            <p className="roboto-bold text-sm text-slate-900">Module 1</p>
                                            <p className="roboto-light mt-1 text-sm text-slate-600">
                                                HTML, semantic structure, and accessible layouts
                                            </p>
                                        </div>
                                        <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-4">
                                            <p className="roboto-bold text-sm text-slate-900">Module 2</p>
                                            <p className="roboto-light mt-1 text-sm text-slate-600">
                                                Tailwind styling, responsive patterns, and reusable UI blocks
                                            </p>
                                        </div>
                                        <div className="rounded-2xl bg-slate-50 p-4">
                                            <p className="roboto-bold text-sm text-slate-900">Module 3</p>
                                            <p className="roboto-light mt-1 text-sm text-slate-600">
                                                React fundamentals and shipping polished interfaces
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <div className="mb-2 flex items-center justify-between text-sm text-slate-500">
                                            <span>Progress</span>
                                            <span>68%</span>
                                        </div>
                                        <div className="h-3 rounded-full bg-slate-100">
                                            <div className="h-3 w-[68%] rounded-full bg-cyan-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="method" className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-7xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60 sm:p-10 lg:p-12">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="roboto-bold text-sm uppercase tracking-[0.24em] text-cyan-700">How it works</p>
                        <h2 className="roboto-extrabold mt-4 text-3xl text-slate-900 sm:text-4xl lg:text-5xl">
                            A simpler way to move from interest to mastery
                        </h2>
                        <p className="roboto-light mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                            Every roadmap is designed to remove friction, organize the next best step, and keep you learning with confidence.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {methodSteps.map((step) => (
                            <div
                                key={step.title}
                                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-100">
                                    <img className="h-12 w-12 object-contain" src={step.image} alt={step.title} />
                                </div>
                                <h3 className="roboto-extrabold mt-6 text-xl text-slate-900">{step.title}</h3>
                                <p className="roboto-light mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="explore" className="px-6 py-4 sm:px-8 lg:px-12 lg:py-8">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-2xl">
                        <p className="roboto-bold text-sm uppercase tracking-[0.24em] text-cyan-700">Popular paths</p>
                        <h2 className="roboto-extrabold mt-4 text-3xl text-slate-900 sm:text-4xl lg:text-5xl">
                            Explore roadmap templates learners love
                        </h2>
                        <p className="roboto-light mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                            Start with a proven path, then personalize it around your pace, interests, and goals.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        {popularPaths.map((path) => (
                            <div
                                key={path.title}
                                className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/70 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                                        <img className="h-7 w-7 object-contain" src={Photography} alt={path.title} />
                                    </div>
                                    <div>
                                        <h3 className="roboto-extrabold text-xl text-slate-900 transition group-hover:text-cyan-800">
                                            {path.title}
                                        </h3>
                                        <p className="roboto-light mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                                            {path.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 rounded-[28px] border border-cyan-100 bg-gradient-to-r from-cyan-50 to-white p-8 shadow-sm shadow-slate-200/60 sm:p-10">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-2xl">
                                <p className="roboto-extrabold text-2xl text-slate-900 sm:text-3xl">
                                    Don&apos;t see the path you need?
                                </p>
                                <p className="roboto-light mt-3 text-base leading-7 text-slate-600">
                                    Request a custom roadmap and let StepWise create a learning plan tailored to your exact target skill.
                                </p>
                            </div>
                            <button className="roboto-bold rounded-full bg-slate-950 px-7 py-4 text-sm text-white transition hover:bg-cyan-900 sm:w-fit sm:text-base">
                                Request a Path
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faq" className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <p className="roboto-bold text-sm uppercase tracking-[0.24em] text-cyan-700">FAQ</p>
                        <h2 className="roboto-extrabold mt-4 text-3xl text-slate-900 sm:text-4xl">
                            Frequently asked questions
                        </h2>
                        <p className="roboto-light mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                            A quick look at how StepWise helps learners build focused, personalized growth plans.
                        </p>
                    </div>

                    <div className="mt-10 space-y-4">
                        {faqs.map((faq) => (
                            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;

