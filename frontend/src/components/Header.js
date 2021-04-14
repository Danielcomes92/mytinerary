import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [menuMobileClasses, setMenuMobileClasses] = useState('navResponsive hidden md:hidden bg-gray-800 z-30');

    const openMenuNav = () => {
        setMenuMobileClasses('navResponsive md:hidden bg-gray-800 z-30')
    }
    const closeMenuNav = () => {
        setMenuMobileClasses('navResponsive hidden md:hidden bg-gray-800 z-30')
    }

    

    return(
        <div className="w-full fixed md:static md:bg-transparent overflow:hidden">

            <div className="h-12 w-full bg-black bg-opacity-90 flex items-center">
                <div className="w-10/12 mx-auto flex justify-center md:justify-between">
                    <div className="text-gray-100 flex justify-between items-center">
                        <div className="flex justify-between lato mr-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                            </svg>
                            <span className="text-sm md:text-normal">1.826.723.800</span>
                        </div>
                        <div className="flex justify-between lato">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                            <span className="text-sm md:text-normal">Contact@MyTinerary.io</span>
                        </div>
                    </div>
                    <div>
                        <div className="w-10 h-10 logo" style={{
                            backgroundImage: "url('./img/userunknown.png')"
                        }}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black bg-opacity-75 h-24 flex items-center">

                <div className="w-11/12 md:w-10/12 mx-auto flex justify-between text-white items-center">
                    <NavLink className="" exact to="/">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mb-3 icon icon-tabler icon-tabler-plane-departure" width="50" height="50" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z" transform="rotate(-15 12 12) translate(0 -1)" />
                            <line x1="3" y1="21" x2="21" y2="21" />
                            </svg>    
                            <span className="text-2xl ml-2 lato font-normal"><span className="text-blue-300">MY</span>TINERARY</span>
                        </div>
                    
                    </NavLink>

                    <div className="flex hidden md:block">
                        <div className="flex justify-between items-center  lato font-normal">
                            <NavLink exact to="/"><span className="mx-2 cursor-pointer">Home</span></NavLink>
                            <NavLink to="/cities"><span className="mx-2 cursor-pointer">Cities</span></NavLink>
                            <span className="mx-2 px-4 py-1 bg-red-500 bg-blue-800 duration-500 transition hover:bg-white hover:text-blue-700 hover:border hover:border-red-400 rounded cursor-pointer">Sign Up</span>
                            <span className="ml-2 cursor-pointer">Log In</span>                    
                        </div>
                    </div>

                    <div className={menuMobileClasses}>
                        <div onClick={closeMenuNav} className="flex justify-end pt-4 px-8">
                            <span className="text-3xl mr-6 text-gray-100">X</span>
                        </div>
                        <div className="flex flex-col h-full md:flex-row items-center px-20">
                            <div id="user-icon-image" className="cursor-pointer mb-4" style={{
                                backgroundImage: "url('./img/userunknown.png')" 
                            }}>
                            </div>                           
                            <NavLink exact to="/" className="mb-1"><span className="text-gray-100 text-xl">Home</span></NavLink>
                            <NavLink to="/cities" className="mb-1"><span className="text-gray-100 text-xl">Cities</span></NavLink>
                            <span className="mb-1 w-full text-center py-2 text-xl bg-red-500 text-white bg-red-600 rounded font-semibold ">SIGN UP</span>
                            <span className="mb-1 text-gray-100 text-xl">LOG IN</span>
                        </div>
                    </div>
                    
                    <div onClick={openMenuNav} className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Header;