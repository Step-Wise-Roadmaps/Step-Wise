
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
                            <h1 className='roboto-extrabold text-black text-8xl'>Any Skill,</h1>
                            <h1 className='roboto-extrabold text-black text-7xl'>One Step at a Time.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;