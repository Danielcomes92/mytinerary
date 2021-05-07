import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Slider from '../components/slider/Slider';

class Home extends React.Component {    

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return(
            <> 
                <div className="v85 flex flex-col heroContainer bg-gray-800" style={{
                    backgroundImage: "url('./img/bgsuiza.jpg')"
                }}>
                    <Header/>

                    <div className="flex flex-col md:w-1/2 items-center v80 mb-20 justify-end md:ml-16 px-4">
                        <h1 className="text-2xl text-center bg-black bg-opacity-50 font-semibold md:text-4xl md:text-left text-white text-orange-100 lato">Find your perfect trip, designed by insiders who know and love their cities!</h1>
                        <div className="flex justify-start mt-8">
                            <NavLink to="/cities" className="animated fadeInLeft">
                                <span className="shadow-md rounded hover:shadow-xl text-white rounded py-4 px-8 bg-orange-500 duration-500 transition hover:bg-white hover:text-orange-600 font-semibold cursor-pointer lato">LIFE'S SECRET</span>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="v15 bg-blue-800 text-white flex items-center shadow-md pb-12 md:pb-0">
                    <div className="mx-auto md:w-7/12 h50 flex flex-row justify-between">

                        <div className="flex flex-col md:flex-row text-center md:items-center">
                            <span>
                                <img src="./img/plane-icon.svg" className="mx-auto w40p" alt="plane icon"></img>
                            </span>
                            <span className="mx-2 lato text-orange-200 text-sm md:text-lg">+50 destinations</span>
                        </div>

                        <div className="flex flex-col md:flex-row text-center md:items-center">
                            <span>
                                <img src="./img/world-icon.svg" className="mx-auto w40p" alt="world icon"></img>
                            </span>
                            <span className="mx-2 lato text-orange-200 text-sm md:text-lg">Worldwide Company</span>
                        </div>

                        <div className="flex flex-col md:flex-row text-center md:items-center">
                            <span>
                                <img src="./img/palms-icon.svg" className="mx-auto w40p" alt="palms icon"></img>
                            </span>
                            <span className="mx-2 lato text-orange-200 text-sm md:text-lg">Popular places</span>
                        </div>

                        <div className="flex flex-col md:flex-row text-center md:items-center">
                            <span>
                                <img src="./img/visa-icon.svg" className="mx-auto w40p" alt="immigration icon"></img>
                            </span>
                            <span className="mx-2 lato text-orange-200 text-sm md:text-lg">Visa Information</span>
                        </div>

                    </div>
                </div>
                <div className="h-auto bg-gray-100 bg-opacity-75 text-black shadow-md md:mb-20">
                    <h1 className="font-semibold py-8 mb-12 md:text-4xl text-3xl text-center md:text-left md:ml-20 md:text-5xl lobster">Popular MyTineraries</h1>
                </div>
                
                <Slider /> 
  
                <Footer/>
            </>
        )
    }
}

export default Home;