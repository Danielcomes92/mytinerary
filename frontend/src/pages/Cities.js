import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cards from '../components/Cards';

class Cities extends React.Component {

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
                <div className="heroCitiesContainer heroMainImage w-full bg-gray-800" style={{
                    backgroundImage: "url('./img/hero-cities-background.png')"
                }}>
                    <Header/>
                </div>

                <div className="findCitiesContainer h-64 bg-blue-900">

                </div>
                <Cards play={this.play} pause={this.pause} />

                <Footer />
            </>
        )
    }
}


export default Cities;