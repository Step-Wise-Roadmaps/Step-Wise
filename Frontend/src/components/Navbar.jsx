
import { useState } from "react";
import MainLogo from "../assets/NavbarImg/MainLogo.png"

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <>
            <div className="w-full position-ab h-20 shadow-md  bg-white fixed z-40">
                <div className="flex items-center h-20 justify-center">
                    <div className="flex-1 flex justify-start cursor-pointer">
                        <img className="w-32 sm:w-40 md:w-45 ml-4 sm:ml-6" src={MainLogo} alt="Main Logo" />
                    </div>

                    <div className="hidden md:flex flex-none justify-center shadow-md shadow-cyan-950 rounded-full px-10 py-2">
                        <nav className="flex space-x-10">
                            <a href="#" className="roboto-regular hover:text-cyan-800 duration-100">Method</a>
                            <a href="#" className="roboto-regular hover:text-cyan-800 duration-100">Explore</a>
                            <a href="#" className="roboto-regular hover:text-cyan-800 duration-100">FAQ</a>
                        </nav>
                    </div>

                    

                    <div className="flex-1 flex justify-end mr-6">

                        <div className="hidden md:flex space-x-4">
                            <button className="roboto-regular px-4 py-2 cursor-pointer hover:text-cyan-800 duration-200">Sign in</button>
                            <button className="roboto-regular px-8 py-[10px] cursor-pointer bg-cyan-950 text-white rounded-[50px] hover:bg-cyan-800 duration-200">Sign up</button>
                        </div>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden focus:outline-none cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                </div>
                {/* {isMenuOpen && ( */}
                    <div className={`md:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="flex justify-center">
                            <div className="w-150 items-center shadow-lg flex flex-col justify-center text-center border-t border-blue-300 p-4 space-y-4">
                                <a href="#" className="roboto-regular hover:text-cyan-800 duration-100">Method</a>
                                <a href="#" className="roboto-regular hover:text-cyan-800 duration-100">Explore</a>
                                <a href="#" className="roboto-regular hover:text-cyan-800 duration-100">FAQ</a>
                                <button className="roboto-regular px-4 py-2 cursor-pointer hover:text-cyan-800 duration-200">Sign in</button>
                                <button className="roboto-regular w-full px-30 py-3 cursor-pointer bg-cyan-950 text-white rounded-[50px] hover:bg-cyan-800 duration-200">Sign up</button>
                            </div>
                        </div>
                    </div>
                {/* )} */}

            </div>
        </>
    )
}

export default Navbar;