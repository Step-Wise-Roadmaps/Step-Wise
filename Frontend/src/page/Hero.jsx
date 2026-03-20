
// img
import heroImgg from '../assets/HeroImg/heroImgg.png'
import rokateImg from '../assets/HeroImg/rokateImg.png'
import bookImg from '../assets/HeroImg/bookImg.png'
import pointer from '../assets/HeroImg/pointer.png'
import Photography from '../assets/HeroImg/Photography.png'

function Hero() {
    return(
        <>
            <div>
                <div className='relative'>
                    <div className='flex flex-col justify-center'>
                        <img className='object-cover saturate-200 contrast-75 bg-no-repeat bg-center mt-20 h-[89vh]' 
                        src={heroImgg} 
                        alt="Hero Image" />

                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
                            <div>
                                <h1 className='roboto-extrabold text-black text-4xl md:text-8xl xl:text-8xl [text-shadow:_2px_0px_5px_rgb(21_94_117)]'>Any Skill,</h1>
                                <h1 className='roboto-extrabold text-black text-2xl md:text-4xl xl:text-7xl [text-shadow:_2px_0px_5px_rgb(21_94_117)]'>One Step at a Time.</h1>
                            </div>

                            <div className='mt-1'>
                                <p className='roboto-bold text-black text-xs md:text-xl xl:text-3xl'>Smart Roadmaps for Fast Learning.</p>
                                <p className='roboto-light text-black text-xs md:text-xl xl:text-2xl'>Skip the confusion of endless tutorials. Get a hand-picked, structured </p>
                            </div>

                            <div className='mt-10 md:mt-12'>
                                <button className='px-6 py-4 md:px-14 md:py-4 md:text-lg focus:outline-hidden text-xs bg-cyan-950 rounded-full hover:bg-cyan-800 duration-200 cursor-pointer roboto-regular'>Start Learning</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 w-full h-[89vh] flex items-center justify-center">
                    <div className="md:h-96 md:bg-blue-200 w-full max-w-6xl flex md:rounded-4xl shadow-lg">
                        <div className='md:m-10 m-5 flex justify-center flex-col items-center w-full'>
                            <div className=''>
                                <h1 className='roboto-extrabold text-cyan-950 text-4xl md:text-5xl [text-shadow:_2px_0px_5px_rgb(21_94_117)]'>Our Method</h1>
                                <div className='flex md:w-64 w-48 justify-center'>
                                    <div className='md:w-48 w-40 border-t-5 border-[#46A7C9]'></div>
                                </div>
                            </div>

                            <div className='w-full md:flex mt-10 space-y-5 justify-center md:space-x-40 md:h-64'>
                                <div className='space-y-6'>
                                    <div className='flex justify-center'>
                                        <img className='md:w-32 w-24' src={rokateImg} alt="" />
                                    </div>
                                    <p className='text-center roboto-regular'>Explore current coerces  </p>
                                </div>

                                <div className='space-y-6'>
                                    <div className='flex justify-center'>
                                        <img className='md:w-32 w-24' src={pointer} alt="" />
                                    </div>
                                    <p className='text-center roboto-regular'>Explore current coerces  </p>
                                </div>

                                <div className='space-y-6'>
                                    <div className='flex justify-center'>
                                        <img className='md:w-32 w-24' src={bookImg} alt="" />
                                    </div>
                                    <p className='text-center roboto-regular'>Explore current coerces  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full bg-gray-50 mt-20 px-5 py-5 md:px-30 md:py-15'>
                    <div className='flex justify-center md:justify-start'>
                        <div className='flex flex-col justify-center md:justify-start'>
                            <h1 className='roboto-extrabold text-cyan-950 text-2xl md:text-5xl [text-shadow:_2px_0px_5px_rgb(21_94_117)]'>Explore Popular Path</h1>
                            <div className='flex justify-center'>
                                <div className='w-40 md:w-94 border-t-5 border-[#46A7C9]'></div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-20'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className="p-10 border-1 rounded-xl shadow-xl border-[#46A7C9] transform transition duration-500 hover:rotate-3 hover:scale-105 cursor-pointer flex items-center">
                                <div className='space-y-10'>
                                    <div className='flex items-center space-x-5'>
                                        <div className='bg-blue-100 px-3 py-3 rounded-4xl'>
                                            <img className='w-[30px]' src={Photography} alt="" />
                                        </div>
                                        <h1 className='animate-pulse roboto-extrabold text-cyan-950 text-xl md:text-xl lg:text-2xl'>Photography</h1>
                                    </div>

                                    <div>
                                        <p className='roboto-thin text-xl'>From manual camera settings to professional color grading. Learn to capture stories with precision and artistic flair.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10 border-1 rounded-xl shadow-xl border-[#46A7C9] transform transition duration-500 hover:rotate-3 hover:scale-105 cursor-pointer flex items-center">
                                <div className='space-y-10'>
                                    <div className='flex items-center space-x-5'>
                                        <div className='bg-blue-100 px-3 py-3 rounded-4xl'>
                                            <img className='w-[30px]' src={Photography} alt="" />
                                        </div>
                                        <h1 className='animate-pulse roboto-extrabold text-cyan-950 text-xl md:text-xl lg:text-2xl'>Photography</h1>
                                    </div>

                                    <div>
                                        <p className='roboto-thin text-xl'>From manual camera settings to professional color grading. Learn to capture stories with precision and artistic flair.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10 border-1 rounded-xl shadow-xl border-[#46A7C9] transform transition duration-500 hover:rotate-3 hover:scale-105 cursor-pointer flex items-center">
                                <div className='space-y-10'>
                                    <div className='flex items-center space-x-5'>
                                        <div className='bg-blue-100 px-3 py-3 rounded-4xl'>
                                            <img className='w-[30px]' src={Photography} alt="" />
                                        </div>
                                        <h1 className='animate-pulse roboto-extrabold text-cyan-950 text-xl md:text-xl lg:text-2xl'>Photography</h1>
                                    </div>

                                    <div>
                                        <p className='roboto-thin text-xl'>From manual camera settings to professional color grading. Learn to capture stories with precision and artistic flair.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10 border-1 rounded-xl shadow-xl border-[#46A7C9] transform transition duration-500 hover:rotate-3 hover:scale-105 cursor-pointer flex items-center">
                                <div className='space-y-10'>
                                    <div className='flex items-center space-x-5'>
                                        <div className='bg-blue-100 px-3 py-3 rounded-4xl'>
                                            <img className='w-[30px]' src={Photography} alt="" />
                                        </div>
                                        <h1 className='animate-pulse roboto-extrabold text-cyan-950 text-xl md:text-xl lg:text-2xl'>Photography</h1>
                                    </div>

                                    <div>
                                        <p className='roboto-thin text-xl'>From manual camera settings to professional color grading. Learn to capture stories with precision and artistic flair.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mt-15'>
                            <div className='px-5 sm:px-15 md:px-20 py-10 rounded-xl shadow-xl bg-white flex items-center '>
                                <div className='space-y-5'>
                                    <h1 className='roboto-extrabold text-lg md:text-2xl'>don’t see what your looking ? </h1>
                                    <div className='flex justify-center'>
                                        <button className='px-3 py-5 md:px-10 md:py-5 bg-blue-500 rounded-2xl text-white duration-300 hover:bg-cyan-900 cursor-pointer'>Request a Path</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Hero;