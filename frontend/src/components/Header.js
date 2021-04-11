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
        <div className="w-full bg-gray-900 fixed md:static  py-2 md:py-0 md:bg-transparent px-6 overflow:hidden">
            <div className="w-full pt-2 md:pt-4 flex justify-between font-bold text-white items-center">

                <NavLink className="mx-10" exact to="/">
                    <div className="items-center logo cursor-pointer flex justify-center" style={{
                        backgroundImage: "url('./img/pngegg.png')"
                    }}>
                      <span className="text-3xl pl-12 md:text-4xl md:pt-16 lobster">MyTinerary</span>
                    </div>
                </NavLink>

                <div className="flex hidden md:block">
                    <div className="mr-4 mt-10 flex justify-between items-center">
                        <NavLink exact to="/"><span className="mx-2 cursor-pointer">HOME</span></NavLink>
                        <NavLink to="/cities"><span className="mx-2 cursor-pointer">CITIES</span></NavLink>
                        <span className="mx-2 px-4 py-2 bg-red-500 bg-red-600 duration-500 transition hover:bg-white hover:text-red-700 hover:border hover:border-red-400 rounded font-semibold  cursor-pointer">SIGN UP</span>
                        <span className="ml-12 mx-2 cursor-pointer">LOG IN</span>
                        <img href="#" src="./img/userunknown.png" width="40px" alt="user icon"></img>                    
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </div>


            </div>
        </div>
    )
}

export default Header;