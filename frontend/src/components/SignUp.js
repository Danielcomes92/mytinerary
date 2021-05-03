import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import GoogleLogin from 'react-google-login';
import Header from './Header';
import Footer from './Footer';

import authActions from '../redux/actions/authActions';

toast.configure()

const SignUp = (props) => {
	useEffect(() => {
		window.scroll(0, 0)
	}, [])

	const updatePosition = () => {
        window.innerWidth >= 768 && window.scrollTo({top: 235, left: 0, behavior: 'smooth' })
    }

	const [type, setType] = useState(true)

	const [newUser,  setNewUser] = useState({
		firstName: '',
        lastName: '',
        email: '',
        urlPic: '',
        password: ''
    });

	const [errors,  setErrors] = useState({
		firstName: '',
		lastName: '',
		email: '',
		urlPic: '',
		country: '',
		password: ''
	});
	
	const { firstName, lastName, email, urlPic, country, password } = newUser;
	const countries = ['United States', 'Argentina', 'Chile', 'Mexico', 'Brazil', 'Canada', 'France', 'Spain', 'United Kingdom', 'Russia', 'New Zealand', 'Denmark'];
	
	const handleUserData = (e) => {
		e.preventDefault();
		setNewUser({
			...newUser,
			[e.target.name] : e.target.value
		})
	}
	
	const sendData = async (e = null, googleUser = null) => {
		e && e.preventDefault();
		
		let user = googleUser ? googleUser : newUser

		if(user.firstName && user.lastName && user.email && user.urlPic && user.country && user.password) {
			const response = await props.newUser(user)
			//si no existe response, significa que no hubo errores
			if(!response) {
				setNewUser({
					firstName: '',
					lastName: '',
					email: '',
					urlPic: '',
					country: '',
					password: ''
				})
			} else {
				setErrors({
					firstName: '',
					lastName: '',
					email: '',
					urlPic: '',
					password: ''
				})
				
				//mapeo errores
				response.details.map(err => setErrors(prevState => {
					return {...prevState, [err.context.label]: err.message}
				}))
			}
		} else { // si no completo ningun campo el usuario
			toast.error('All the fields are mandatory', {position: toast.POSITION.TOP_RIGHT})
		}
	}

    const responseGoogle = (response) => {
		if(response.profileObj) {
			const { givenName, familyName, email, imageUrl, googleId } = response.profileObj;
			
			const googleUser = {
				firstName: givenName,
				lastName: familyName,
				email: email,
				urlPic: imageUrl,
				country: 'no_city',
				password: googleId
			}
			sendData(null, googleUser)
		}
    }

	// console.log(newUser)
    return (
        <>
			<Header />
			<div className="container mx-auto mt-20">
				<div className="flex justify-center px-6 my-20">
					<div className="w-full lg:w-11/12 flex">
						<div
							className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 xl:w-6/12 bg-cover rounded-l-md"
							style={{
								backgroundImage: "url('/img/signin-bg.jpg')"
							}}
						></div>
						<div onClick={updatePosition} className="w-full lg:w-7/12 bg-white px-5 rounded lg:rounded-l-none mt-10 md:mt-0">
							<h3 className="pt-4 mb-4 text-2xl text-center">Create an Account!</h3>
							<form className="md:px-8 px-2 pt-2 pb-4 mb-4 bg-white rounded">
								<div className="mb-2 md:flex md:justify-between">
									<div className="mb-2 md:mr-2 mt-2">
										<input
											className="placeholder-gray-600 focus:placeholder-gray-400 w-full px-6 py-2 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
											id="firstName"
											type="text"
											placeholder="First name"
											name="firstName"
											value={firstName}
											onChange={handleUserData}
										/>
									<div className="text-xs text-red-400 h-6">
										{errors.firstName && errors.firstName}
									</div>
									</div>
									<div className="md:ml-2 mb-2 mt-2">
										<input
											className="placeholder-gray-600 focus:placeholder-gray-400 w-full px-6 py-2 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
											id="lastName"
											type="text"
											placeholder="Last Name"
											name="lastName"
											value={lastName}
											onChange={handleUserData}
										/>
										<div className="text-xs text-red-400 h-6">
											{errors.lastName && errors.lastName}
										</div>
									</div>
								</div>
								<div className="mb-2">
									<input
										className="placeholder-gray-600 focus:placeholder-gray-400 w-full px-6 py-2 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
										id="email"
										type="email"
										placeholder="Email"
										name="email"
										value={email}
										onChange={handleUserData}
									/>
									<div className="text-xs text-red-400 h-6">
										{errors.email && errors.email}
									</div>
								</div>
								<div className="mb-2 md:flex md:justify-between">
									<div className="mb-2 mt-2 md:mr-2 md:mb-0">
										<input
											className="placeholder-gray-600 focus:placeholder-gray-400 w-full px-6 py-2 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
											id="urlPhoto"
											type="text"
											placeholder="URL Photo"
											name="urlPic"
											value={urlPic}
											onChange={handleUserData}
										/>
										<div className="text-xs text-red-400 h-6">
											{errors.urlPic && errors.urlPic}
										</div>
									</div>
									<div className="md:ml-2 mt-2">
										<select id="country" name="country" onChange={handleUserData} value={country} className="block w-full md:w-52 text-gray-700 pr-12 px-6 py-2 border border-gray-300 bg-white focus:outline-none text-sm focus:shadow-outline shadow">
											<option disabled selected value=''>Select Country </option>
											{
											countries.map( (country, index) => <option key={index} value={country}> {country} </option>)
											}
										</select>
										<div className="h-6"></div>
									</div>
								</div>
								<div className="mb-0 md:flex md:justify-between">
									<div className="mb-2 mt-2 md:mr-2">
										<input
											className="placeholder-gray-600 focus:placeholder-gray-400 w-full px-6 py-2 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
											id="password"
											type={type ? "password" : "text"}
											placeholder="Password"
											name="password"
											value={password}
											onChange={handleUserData}
											autoComplete="off"
										/>
										<div className="text-xs text-red-400 h-6">
											{errors.password && errors.password}
										</div>
										<p onClick={() => setType(!type)} className="text-sm text-gray-600 mx-1 mt-1 cursor-pointer">{type ? "Show password" : "Hide password"}</p>
									</div>
								</div>
								<div className="mb-10">					
									<p className="text-xs md:text-sm italic text-gray-500">* Password must contain at least 1 number and 4 letters </p>
								</div>
								<div className="mb-2 text-center">
									<button
										className="w-full md:w-8/12 bxShadow px-4 py-3 text-white bg-blue-500 duration-100 transition md:hover:bg-blue-700 focus:outline-none shadow-inner focus:shadow-outline text-sm md:text-base"
										type="button"
										onClick={sendData}
									>
										Register Account
									</button>
								</div>
								<div className="mb-6 text-center">
									<div className="mb-6 text-center mt-4 text-black">
                                        <div className="focus:outline-none"> 
                                            <GoogleLogin
                                                clientId="526192152002-ar0p539juka51qiejcqnmh51tkl4t5kb.apps.googleusercontent.com"
												
                                                buttonText="Sign Up with Google"
                                                onSuccess={responseGoogle}
                                                onFailure={responseGoogle}
                                                cookiePolicy={'single_host_origin'}
                                                className="noOutline w-full mx-auto flex justify-center cursor-pointer md:w-8/12 text-white bg-gray-100 md:hover:bg-gray-300"
                                            />
                                        </div>
                                    </div>
								</div>
								<hr className="mb-4 border-t" />
								<div className="text-center">
									<Link to="/login" className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
										Already have an account? Login!
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer />
        </>
    )
}

const mapStateToProps = state => {
	return{
		userLogged: state.authReducer.userLogged
	}
}

const mapDispatchToProps = {
	newUser: authActions.newUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)