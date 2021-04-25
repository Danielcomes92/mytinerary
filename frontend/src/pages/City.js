import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ScrollToTop from '../components/ScrollToTop';
import Header from '../components/Header';
import Footer from '../components/Footer';

import itinerariesActions from '../redux/actions/itinerariesActions';
import Itinerary from '../components/Itinerary';
import axios from 'axios';

class City extends React.Component  {
    state = {
        city: ''
    }
    
    filterCity = () => {
        this.setState({
            city: this.props.cities.find(city => city._id === this.props.match.params.id)
        })
    }

    getCity = () => {
        axios.get(`http://localhost:4000/api/city/${this.props.match.params.id}`)
        .then(res => this.setState({city: res.data.response}))
    }

    componentDidMount() {
        this.filterCity()
        this.props.getCityItineraries(this.props.match.params.id)
        !this.state.city && this.getCity()
    }
    
   render() {
       return(
            <>
            <ScrollToTop />
          
            {  
            this.state.city && this.props.cityItineraries.length !== 0 &&
            <>
                <div className="h65 flex flex-col bgCover bgCenter" style={{
                    backgroundImage: `url('../img/${this.state.city.image}.jpg')`
                }}>
                    <Header />
                </div>

                <div className="text-center">
                    <p className="text-orange-100 md:px-4 bg-black pb-2 font-semibold lobster text-3xl md:text-6xl">What to do in {this.state.city.city}</p>
                </div>
            </>
            }

            {
            this.props.cityItineraries.length === 0
            ?
            <>  
                <Header />
                <div className="w-11/12 md:w-8/12 mx-auto flex flex-col rounded-xl mt-20 mb-10 md:mb-20 rounded-md shadow-md hover:shadow-lg">     
                    <div className="text-center mt-6 md:mt-0 bg-orange-100 bgCover bg-center h65" style={{
                        backgroundImage: "url('/img/noitineraries.png')"
                    }}>
                        <span className="text-2xl lato font-bold">Sorry, we don't have itineraries available here yet</span>    
                    </div>     
                    <div className="w-full rounded-md">
                        <div className="bg-orange-100 bgCenter bgCover px-4">
                        
                        </div>
                        <div className="flex flex-row justify-between pl-0 pb-0 h-10 rounded-b-md shadow-md bg-gray-900"></div>
                    </div>
                </div>
            </>
            :
            this.props.cityItineraries.map(city => {
                return <Itinerary key={city._id} city={city}/>
            })
            }

            <div className="text-center mb-12">
                <Link to="/cities" className="">
                    <span className="shadow-md hover:shadow-xl text-white py-4 px-12 bg-blue-900 duration-500 transition hover:bg-white hover:text-blue-900 cursor-pointer lato rounded">Back to Cities</span>
                </Link>
            </div>
            <Footer />
            </>
       )
   }
}

const mapStateToProps = state => {
    return {
        cities: state.cityReducer.cities,
        cityItineraries: state.itineraryReducer.cityItineraries
    }
}

const mapDispatchToProps = {
    getCityItineraries: itinerariesActions.getCityItineraries
}
 
export default connect(mapStateToProps, mapDispatchToProps)(City);