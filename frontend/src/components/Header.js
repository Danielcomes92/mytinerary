import { useState } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import authActions from "../redux/actions/authActions";

const Header = (props) => {
    const { firstName, urlPic } = props.userLogged || ''
    

    const [menuClass, setMenuClass] = useState({
        open: false,
        classes:'hidden md:block'
    });

    const handleMenuNav = () => {
        if(menuClass.open) {
            setMenuClass({
                open: !menuClass.open,
                classes:'md:block'
            })
        } else {
            setMenuClass({
                open: !menuClass.open,
                classes:'hidden md:block'
            })
        }
    }

    console.log(props)
    return(
        <div className="w-full fixed top-0 md:static md:bg-transparent overflow:hidden z-30">
            <div className="h-12 w-full bg-black bg-opacity-90 flex hidden md:block">
                <div className="w-10/12 mx-auto flex justify-center md:justify-between pt-1">
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
                    <div className="flex items-center">
                        <span className="text-white mx-2">{firstName ? `Welcome ${firstName}!` : ""}</span>
                        <span className="material-icons text-5xl text-white">person</span>
                    </div>
                </div>
            </div>

            <div className="bg-black md:bg-opacity-75 md:h-24 flex items-center">

                <div className="w-11/12 md:w-10/12 mx-auto flex justify-between text-white items-center">
                    <Link className="h-16 flex items-center" to="/">
                        <div className="flex flex-row items-center">
                            <div className="logo w60h60 animated infinite pulse" style={{
                                backgroundImage: "url('../img/pngegg.png')"
                            }}>
                            </div>
                            <span className="text-2xl ml-2 lato font-normal"><span className="text-blue-300">MY</span>TINERARY</span>
                        </div>
                    </Link>

                    <div className={menuClass.classes}>
                        <div className="flex flex-col md:flex-row md:justify-between items-center lato font-normal z-30 navResponsive">
                            <span className="md:hidden font-semibold mt-4">{firstName ? `Welcome ${firstName}!` : ""}</span>
                            <span className="material-icons text-6xl mt-4 mb-2 md:hidden">person</span>
                            <NavLink exact to="/" className="mt-5 mb-2 md:mt-0 md:mb-0 text-md"><span className="mx-2 cursor-pointer">Home</span></NavLink>
                            <NavLink exact to="/cities" className="mt-5 mb-2 md:mt-0 md:mb-0 text-md"><span className="mx-2 cursor-pointer">Cities</span></NavLink>
                            {
                                !props.userLogged
                                ?
                                <>
                                    <Link to="/signup" className="text-md mt-5 mb-2 md:mt-0 md:mb-0 mx-2 px-4 py-2  bg-blue-500 duration-100 transition md:hover:bg-blue-700 focus:outline-none focus:shadow-outline shadow-inner">Sign Up</Link>
                                    <Link to="/login" className="text-md mt-5 mb-4 md:mt-0 md:mb-0 md:ml-2 cursor-pointer">Log In</Link>                    
                                </>
                                :
                                <button onClick={() => props.logOut()} className="mt-5 mb-4 md:mt-0 md:mb-0 md:ml-2 cursor-pointer text-md">Log Out</button>                    
                            }
                        </div>
                    </div>

                    <div onClick={handleMenuNav} className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    logOut: authActions.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);