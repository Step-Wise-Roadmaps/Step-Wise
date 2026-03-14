
import heroImgg from '../assets/HeroImg/heroImgg.png'

function Hero() {
    return(
        <>
            <div>
                <div className='flex flex-col justify-center '>
                    <img className='object-cover bg-no-repeat bg-center' src={heroImgg} alt="Hero Image" />
                </div>
            </div>
        </>
    )
}

export default Hero;