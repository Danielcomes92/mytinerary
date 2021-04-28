import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';

import userActions from '../redux/actions/userActions';

const SignUp = () => {
	const [newUser,  setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        urlPic: '',
        country: '',
        password: ''
    });
	
	const countries = ['United States', 'Argentina', 'Chile', 'Mexico', 'Brazil', 'Canada', 'France', 'Spain', 'United Kingdom', 'Russia', 'New Zealand', 'Denmark'];

	const { firstName, lastName, email, urlPic, country, password } = newUser;
	
	useEffect(() => {
		window.scroll(0, 0)
	}, [])

	const handleDataUser = (e) => {
		e.preventDefault();
		setNewUser({
			...newUser,
			[e.target.name] : e.target.value
		})
		validatePassword()
	}

	const validatePassword = () => {
		let passwordValidated = Array.from(password).some(Number)
		return passwordValidated
	}

	const sendData = async () => {
		if(firstName.length >= 2 && lastName.length >= 2 && email.length >= 6 && email.includes('@') && urlPic.length >= 5 && country && password.length >= 8 && validatePassword()) {
			// console.log('todos los campos ok')
			const response = await axios.post('http://localhost:4000/api/signup', newUser);
			if(response.data.success) {
				setNewUser({
					firstName: '',
					lastName: '',
					email: '',
					urlPic: '',
					country: '',
					password: ''
				})
			}
		} else {
			console.log('hay datos incompletos o erroneos')
		}
	}

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
						<div className="w-full lg:w-7/12 bg-white px-5 rounded lg:rounded-l-none">
							<h3 className="pt-4 mb-4 text-2xl text-center">Create an Account!</h3>
							<form className="px-8 pt-2 pb-4 mb-4 bg-white rounded">
								<div className="mb-4 md:flex md:justify-between">
									<div className="mb-4 md:mr-2 md:mb-0">
										<label className={firstName.length >= 2 ? "block mb-2 text-sm font-bold text-green-500" : "block mb-2 text-sm font-bold text-red-500"} htmlFor="firstName">First Name</label>
										<input
											className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="firstName"
											type="text"
											placeholder="First Name"
											name="firstName"
											value={firstName}
											onChange={handleDataUser}
										/>
									</div>
									<div className="md:ml-2">
										<label className={lastName.length >= 2 ? "block mb-2 text-sm font-bold text-green-500" : "block mb-2 text-sm font-bold text-red-500"} htmlFor="lastName">Last Name</label>
										<input
											className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="lastName"
											type="text"
											placeholder="Last Name"
											name="lastName"
											value={lastName}
											onChange={handleDataUser}
										/>
									</div>
								</div>
								<div className="mb-4">
									<label className={email.length >= 6 && email.includes('@') && email.includes('.') ? "block mb-2 text-sm font-bold text-green-500" : "block mb-2 text-sm font-bold text-red-500"} htmlFor="email">Email</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="email"
										type="email"
										placeholder="Email"
										name="email"
										value={email}
										onChange={handleDataUser}
									/>
								</div>
								<div className="mb-4 md:flex md:justify-between">
									<div className="mb-4 md:mr-2 md:mb-0">
										<label className={urlPic.length >= 5 ? "block mb-2 text-sm font-bold text-green-500" : "block mb-2 text-sm font-bold text-red-500"} htmlFor="urlPhoto">URL Photo</label>
										<input
											className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="urlPhoto"
											type="text"
											placeholder="URL Photo"
											name="urlPic"
											value={urlPic}
											onChange={handleDataUser}
										/>
									</div>
									<div className="md:ml-2">
										<label className={country ? "block mb-2 text-sm font-bold text-green-500" : "block mb-2 text-sm font-bold text-red-500"} htmlFor="country">Select Country</label>
										<select id="country" name="country" onChange={handleDataUser} value={country} className="w-full border bg-white rounded pr-12 px-3 py-2 outline-none text-sm text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline">
											<option disabled selected value=''>Countries</option>
										{
											countries.map( (country, index) => <option key={index} value={country}> {country} </option>)
										}
										</select>
										
									</div>
								</div>
								<div className="mb-0 md:flex md:justify-between">
									<div className="mb-4 md:mr-2 md:mb-0">
										<label className={ validatePassword() && password.length >= 8 ? "block mb-2 text-sm font-bold text-green-500" : "block mb-2 text-sm font-bold text-red-500"} htmlFor="password">Password</label>
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
									{/* <div className="md:ml-2">
										<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">Confirm Password</label>
										<input
											className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="c_password"
											type="password"
											placeholder="************"
										/>
									</div> */}
								</div>
								<div className="mb-6">
									{/* <p className="text-xs italic text-red-500">* Please choose a valid password</p> */}
									<p className="text-xs md:text-sm italic text-gray-600">{ validatePassword() && password.length >= 8 ? "Password ok!" : "* Password must have a number and a minimum of 8 characters" } </p>
									{/* <p className="text-xs italic text-red-500">* Both password field must match</p> */}
								</div>
								<div className="mb-2 text-center">
									<button
										className="w-full md:w-8/12 px-4 py-2 tracking-wide text-white bg-blue-500 duration-100 transition md:hover:bg-blue-700 focus:outline-none shadow-inner focus:shadow-outline text-sm md:text-base"
										type="button"
										onClick={sendData}
									>
										Register Account
									</button>
								</div>
								<div className="mb-6 text-center">
									<div className="w-full mx-auto cursor-pointer md:w-8/12 items-center px-3 py-2 border border-t-0 border--0 font-normal duration-100 transition tracking-normal shadow-inner text-white bg-gray-100 md:hover:bg-gray-300 focus:outline-none focus:shadow-outline">
										<div className="flex justify-center items-center">
											<img className="w-5 h-5" src="https://img.icons8.com/color/48/000000/google-logo.png"/>
											<span className="mx-2 text-gray-800 text-sm md:text-base">
											Sign Up with Google
											</span>
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

	}
}

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)