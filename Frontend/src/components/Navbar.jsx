
    import MainLogo from "../assets/NavbarImg/MainLogo.png"

    function Navbar() {
        return(
            <>
                <div className="w-full h-20 shadow-md">
                    <div className="flex items-center h-20 justify-center">
                        <div className="flex-1 flex justify-start cursor-pointer">
                            <img className="w-32 sm:w-40 md:w-45 ml-4 sm:ml-6" src={MainLogo} alt="Main Logo" />
                        </div>

                        <div className="hidden md:flex flex-none justify-center">
                            <div className="flex space-x-10">
                                <a href="#" class="hover:text-blue-400">Home</a>
                                <a href="#" class="hover:text-blue-400">About</a>
                                <a href="#" class="hover:text-blue-400">Contact</a>
                            </div>
                        </div>

                        

                        <div className="flex-1 flex justify-end mr-6">

                            <div className="hidden md:flex space-x-4">
                                <button className="px-4 py-2 cursor-pointer hover:text-blue-400 duration-200">Sign in</button>
                                <button className="px-7 py-3 cursor-pointer bg-cyan-950 text-white rounded-[50px] hover:bg-cyan-800 duration-200">Sign up</button>
                            </div>
                            <button id="menu-btn" className="md:hidden focus:outline-none cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24"    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                    </div>
                    <div className="flex justify-center">
                        <div className="w-150 items-center shadow-lg space-y-6 flex flex-col justify-center text-center border-t-1 border-blue-300 md:hidden p-4 space-y-2">
                            <a href="#" class="hover:text-blue-400">Home</a>
                            <a href="#" class="hover:text-blue-400">About</a>
                            <a href="#" class="hover:text-blue-400">Contact</a>
                        </div>
                    </div>

                </div>
            </>
        )
    }

    export default Navbar;