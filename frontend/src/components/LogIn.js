import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import Footer from "./Footer"
import Header from "./Header"

import authActions from "../redux/actions/authActions"

const LogIn = (props) => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const [logUser, setLogUser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = logUser;

    const handleDataUser = (e) => {
        setLogUser({
            ...logUser,
            [e.target.name] : e.target.value
        })
    }
    
    const validatePassword = () => {
        let passwordValidated = Array.from(password).some(Number)
        return passwordValidated
    }

    const sendData = (e) => {
        e.preventDefault();
        if(email.length >= 6 && password.length >= 5) {
            props.logUser(logUser)
            setLogUser({
                email: '',
                password: ''
            })
        } else {
            console.log('Some fields are incomplete or wrong')
        }
    }

    console.log(props)
    return (
            <>
            <Header />

            <div className="mh70 items-center flex align-middle h-screen -mt-10 -mb-16 md:h-full md:mt-0 md:mb-0">
                <div className="container mx-auto">
                    <div className="flex justify-center px-6 md:mt-10">
                        <div className="w-full lg:w-11/12 flex">
                            <div
                                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-md"
                                style={{
                                    backgroundImage: "url('/img/login-bg.jpg')"
                                }}
                            ></div>
                            <div className="w-full lg:w-1/2 bg-white px-5 rounded lg:rounded-l-none">
                                <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
                                <form className="md:px-8 px-2 pt-6 pb-8 mb-4 bg-white rounded">
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="text"
                                            placeholder="Email"
                                            name="email"
                                            value={email}
                                            onChange={handleDataUser}

                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            placeholder="************"
                                            name="password"
                                            value={password}
                                            onChange={handleDataUser}
                                        />
                                    </div>
                                    <div className="mb-2 text-center">
                                    <button
                                        className="w-full md:w-8/12 px-4 py-2 tracking-wide text-white bg-blue-500 duration-100 transition md:hover:bg-blue-700 focus:outline-none focus:shadow-outline  shadow-inner text-sm md:text-base"
                                        type="button"
                                        onClick={sendData}
                                    >
                                        Sign In
                                    </button>
                                    </div>
                                    <div className="mb-6 text-center">
                                        <div className="w-full mx-auto cursor-pointer md:w-8/12 items-center px-3 py-2 border border-t-0 border--0 font-normal duration-100 transition tracking-normal shadow-inner text-white bg-gray-100 md:hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                                            <div className="flex justify-center items-center">
                                                <img className="w-5 h-5" src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google icon"/>
                                                
                                                <span className="mx-2 text-gray-800 text-sm md:text-base">
                                                    Sign In with Google
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <Link to="/signup" className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                                            Create an Account!
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            </>
    )
}

const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    logUser: authActions.logUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)