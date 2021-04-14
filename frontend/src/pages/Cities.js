import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import CitiesCity from '../components/CitiesCity'
import NoCitiesAlert from '../components/NoCitiesAlert';
import axios from 'axios';

class Cities extends React.Component {
    state = {
        cities: [],
        citiesUpdated: [],
        noCitiesAlert: false,
        playVideo: true,
        loading: true
    }
      
    componentDidMount() {
        axios.get('http://localhost:4000/api/cities')
        .then(resp => this.setState({
            cities: resp.data.response,
            citiesUpdated: resp.data.response,
            loading: false
        }))
    }
    
    updateCountries(e) {
        let findCity = ((e.target.value).trim()).toUpperCase()
        let citiesFiltered;
        
        if(findCity) {
            citiesFiltered = this.state.cities.filter(city => (city.city).toUpperCase().includes(findCity) && Array.from(city.city)[0].toUpperCase() === findCity[0])
        }
        
        if(citiesFiltered) {
            if(citiesFiltered.length > 0) {
                this.setState({
                    citiesUpdated: citiesFiltered,
                    noCitiesAlert: false
                })
            } else {
                this.setState({
                    noCitiesAlert: true
                })
            }               
        } else {
            this.setState({
                citiesUpdated: this.state.cities
            })
        }
    }

    handleVideo = (e) => {
        this.setState({
            playVideo: !this.state.playVideo
        })
        if(this.state.playVideo) {
            e.target.play()
        } else {
            e.target.pause()
        }
    }

    render() {
        return(
            <>
            <div className="heroCitiesContainer heroMainImage w-full bg-gray-800" style={{
            backgroundImage:"url('./img/hero-cities-background.jpg')"
            }}>
                <Header/>
            </div>
            
                <div className="v10 bg-blue-900 flex flex-col items-center">
                    <div className="w-full flex items-center mt-6">
                        <input onChange={this.updateCountries.bind(this)} className="focus:outline-none shadow-md md:w-1/3 mx-auto rounded-full py-3 px-16 md:px-6" type="text" placeholder="Find your next destination">
                        </input>
                    </div>
                    {/* <div className="w-2/6 mx-auto items-center flex justify-end ml-80">
                        <div className="absolute mb-12 -mr-16 md:mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="28" height="28" viewBox="0 0 24 24" stroke-width="2.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="10" cy="10" r="7" />
                                <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                        </div>
                    </div> */}
                </div>

                <div className="w-11/12 mx-auto mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2">

                    {   
                        this.state.noCitiesAlert
                        ?
                            <NoCitiesAlert handleVideo={this.handleVideo}/>
                        :
                        this.state.citiesUpdated.map(city => {
                            return <CitiesCity key={city.id} city={city} />
                        })
                    }

                    </div>
                </div>

                <Footer />
            </>
        )
    }
}


export default Cities;