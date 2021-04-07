import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class Home extends React.Component {
    render() {
        return(
            <>
                <Header/>
                <video className="w-screen" autoPlay loop muted src="./img/mytinerary.mp4"></video>
                <Footer/>
            </>
        )
    }
}

export default Home;