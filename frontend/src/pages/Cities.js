import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

class Cities extends React.Component {
    render() {
        return(
            <>
                <div className="heroCitiesContainer heroMainImage w-full bg-gray-800" style={{
                    backgroundImage: "url('./img/hero-cities-background.png')"
                }}>
                    <Header/>
                </div>

                <div className="findCitiesContainer h-64 bg-blue-900">

                </div>
                
                {/* <div className="videoContainer">
                    <video className="videoCities mx-auto" src="../img/mytinerary.mp4" autoPlay loop muted></video>
                </div> */}

                <Footer />
            </>
        )
    }
}


export default Cities;