
import heroImgg from '../assets/HeroImg/heroImgg.png'

function Hero() {
    return(
        <>
            <div className='relative'>
                <div className='flex flex-col justify-center'>
                    <img className='object-cover bg-no-repeat bg-center mt-20 h-[89vh]' 
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
        </>
    )
}

export default Hero;