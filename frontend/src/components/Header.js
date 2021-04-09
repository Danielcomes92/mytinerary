import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <div className="fixed top-0 w-full z-30 px-6">
            <div className="w-full flex justify-between font-bold text-white items-center">
                <div>
                    <NavLink exact to="/"><img href="#" className="cursor-pointer w-3/12" src="./img/pngegg.png" alt="logo"></img></NavLink>
                </div>
                <div className="flex">
                    <div className="mr-4 flex justify-between items-center">
                        <NavLink exact to="/"><span className="mx-2 cursor-pointer">HOME</span></NavLink>
                        <NavLink to="/cities"><span className="mx-2 cursor-pointer">CITIES</span></NavLink>
                        <span className="mx-2 px-4 py-2 bg-red-500 bg-red-600 duration-500 transition hover:bg-white hover:text-red-700 hover:border hover:border-red-400 rounded font-semibold  cursor-pointer">SIGN UP</span>
                        <span className="ml-12 mx-2 cursor-pointer">LOG IN</span>
                        <img href="#" src="./img/userunknown.png" width="40px" alt="user icon"></img>                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;