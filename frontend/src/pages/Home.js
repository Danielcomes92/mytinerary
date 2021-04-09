import React from 'react';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Slider from '../components/Slider';

class Home extends React.Component {

    state = {
        playVideo: true
    }

    play = (e) => {
        this.setState({
            playVideo: !this.state.playVideo
        })
        e.target.play()
    }

    pause = (e) => {
        this.setState({
            playVideo: !this.state.playVideo
        })
        e.target.pause()
    }
    
    render() {
        return(
            <> 
                <div className="heroContainer heroMainImage w-full bg-gray-800" style={{
                    backgroundImage: "url('./img/hero-background.png')"
                }}>
                    <Header/>
                </div>
                <div className="h-20 bg-gray-900 text-white italic flex flex-col items-center mb-32">
                    <h1 className="text-4xl mx-auto mt-4">Find your perfect trip, designed by insiders who know and love their cities!</h1>
                    <button className="mt-8 mx-2 px-12 py-2 bg-red-600 duration-500 transition hover:bg-white hover:text-red-700 border hover:border-red-400 rounded font-semibold cursor-pointer">CITIES</button>
                </div>
                <Slider />
                <Cards play={this.play} pause={this.pause}/>
  
                <Footer/>
            </>
        )
    }
}

export default Home;