import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Slider from '../components/Slider';

class Home extends React.Component {    
    render() {
        return(
            <> 
                <div className="v80 heroContainer bg-gray-800" style={{
                    backgroundImage: "url('./img/bgsuiza.jpg')"
                }}>
                    <Header/>

                    <div className="w-1/2">
                        <h1 className="text-1xl font-semibold px-2 text-center md:text-3xl mx-auto py-4 text-white">Find your perfect trip, designed by insiders who know and love their cities!</h1>
                        <NavLink to="/cities">
                            <button className="mt-8 mx-2 text-white rounded-full py-4 px-8 bg-red-600 duration-500 transition hover:bg-white hover:text-red-600 hover:border-red-400 font-semibold cursor-pointer">LIFE'S SECRET</button>
                        </NavLink>
                    </div>
                </div>

                <div className="v20 bg-blue-600 text-white italic flex flex-col items-center"></div>
                <div className="v20 bg-black bg-opacity-75 text-white italic flex flex-col items-center"></div>

                

                <h1 className="mt-46 font-semibold text-4xl px-2 md:text-5xl lobster tracking-wide">Popular MyTineraries</h1>
                <Slider />
  
                <Footer/>
            </>
        )
    }
}

export default Home;