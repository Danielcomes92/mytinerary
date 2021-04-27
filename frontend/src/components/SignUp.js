import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export const SignUp = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <>
        <Header />
            {/* <!-- Container --> */}
		<div className="container mx-auto">
			<div className="flex justify-center px-6 my-12 mt-20 md:mt-10">
				{/* <!-- Row --> */}
				<div className="w-full lg:w-11/12 flex">
					{/* <!-- Col --> */}
					<div
						className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 xl:w-6/12 bg-cover rounded-l-md"
						style={{
                            backgroundImage: "url('/img/signin-bg.jpg')"
                        }}
					></div>
					{/* <!-- Col --> */}
					<div className="w-full lg:w-7/12 bg-white px-5 rounded lg:rounded-l-none">
						<h3 className="pt-4 mb-4 text-2xl text-center">Create an Account!</h3>
						<form className="px-8 pt-2 pb-4 mb-4 bg-white rounded">
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">First Name</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										placeholder="First Name"
									/>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">Last Name</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="lastName"
										type="text"
										placeholder="Last Name"
									/>
								</div>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">Email</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
								/>
							</div>
                            <div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="urlPhoto">URL Photo</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="urlPhoto"
										type="text"
										placeholder="URL Photo"
									/>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="country">Select Country</label>
                                    <select id="country" className="w-full border bg-white rounded pr-12 px-3 py-2 outline-none text-sm text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline">
                                        <option disabled selected className="text-gray-400">Choose one</option>
                                        <option className="">Option 2</option>
                                        <option className="">Option 3</option>
                                    </select>
                                    
								</div>
							</div>
							<div className="mb-0 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">Password</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
										placeholder="************"
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
                                <p className="text-xs italic text-red-500">* Please choose a valid password</p>
                                <p className="text-xs italic text-gray-600">* Password must have one letter in uppercase, one number and a minimum of 8 characters</p>
                                {/* <p className="text-xs italic text-red-500">* Both password field must match</p> */}
                            </div>
							<div className="mb-2 text-center">
								<button
									className="w-full md:w-8/12 px-4 py-2 tracking-wide text-white bg-blue-500 duration-100 transition md:hover:bg-blue-700 focus:outline-none shadow-inner focus:shadow-outline text-sm md:text-base"
									type="button"
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
