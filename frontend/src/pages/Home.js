import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Slider from '../components/Slider';

class Home extends React.Component {    
    render() {
        return(
            <> 
                <div className="heroContainer heroMainImage w-full bg-gray-800" style={{
                    backgroundImage:"linear-gradient(to top, rgba(0, 0, 0, 0), rgba(15, 15, 15, 0.4)), url('./img/hero-background.png')"
                }}>
                    <Header/>
                </div>
                <div className="h-auto bg-gray-900 text-white italic flex flex-col items-center">
                    <h1 className="text-1xl font-semibold px-2 text-center md:text-4xl mx-auto py-4">Find your perfect trip, designed by insiders who know and love their cities!</h1>
                </div>
                <div className="w-full text-center mb-20">
                    <NavLink to="/cities">
                        <button className="mt-8 mx-2 text-white rounded-full py-4 px-8 bg-red-600 duration-500 transition hover:bg-white hover:text-red-600 border hover:border-red-400 font-semibold cursor-pointer">LIFE'S SECRET</button>
                    </NavLink>
                </div>

                <h1 className="mt-46 font-semibold text-4xl px-2 md:text-5xl lobster tracking-wide">Our clients favourite places</h1>
                <Slider />
  
                <Footer/>
            </>
        )
    }
}

export default Home;