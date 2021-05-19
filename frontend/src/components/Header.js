import { useState } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import authActions from "../redux/actions/authActions";

const Header = (props) => {
    const { firstName, urlPic } = props.userLogged || ''

    const [menuClass, setMenuClass] = useState({
        open: true,
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

    return(
        <div className="w-full fixed top-0 md:static md:bg-transparent overflow:hidden z-30">
            <div className="h-16 w-full bg-black  flex hidden md:block">
                <div className="w-10/12 mx-auto flex items-center pt-2 justify-center md:justify-between">
                    <div className="text-gray-100 flex justify-between items-center">
                        <div className="flex justify-between lato mr-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                            </svg>
                            <span className="text-sm md:text-normal flex items-center">1.826.723.800</span>
                        </div>
                        <div className="flex justify-between lato">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                            <span className="text-sm md:text-normal flex items-center">Contact@MyTinerary.io</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="text-white mx-2">{firstName ? `Welcome ${firstName}!` : ""}</span>
                            <div className="w-12 h-12 bg-opacity-none bgCenter bgCover rounded-full" style={{
                                backgroundImage: `url(${ urlPic ? urlPic : '../img/userunknown.png'})`
                            }}></div>
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
                            <div className="my-2 w-16 h-16 bgCenter bgCover rounded-full md:hidden" style={{
                                backgroundImage: `url(${urlPic ? urlPic : '/img/userunknown.png'})`
                            }}></div>
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

                    <div className="md:hidden">
                        <input type="checkbox" id="checkbox1" className="checkbox1 visuallyHidden" />
                            <label htmlFor="checkbox1">
                                <div onClick={handleMenuNav} className="hamburger hamburger1">
                                    <span className="bar bar1"></span>
                                    <span className="bar bar2"></span>
                                    <span className="bar bar3"></span>
                                    <span className="bar bar4"></span>
                                </div>
                            </label>
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