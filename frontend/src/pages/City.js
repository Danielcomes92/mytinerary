import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ScrollToTop from '../components/ScrollToTop';
import Header from '../components/Header';
import Footer from '../components/Footer';

import itinerariesActions from '../redux/actions/itinerariesActions';
import { Itinerary } from '../components/Itinerary';

class City extends React.Component  {
    state = {
        city: ''
    }
    
    filterCity = () => {
        this.setState({
            city: this.props.cities.find(city => city._id === this.props.match.params.id)
        })
    }

    componentDidMount() {
        this.filterCity()
        this.props.getCityItineraries(this.props.match.params.id)
    }
    
   render() {
       return(
            <>
            <ScrollToTop />
          
            <div className="h65 flex flex-col bgCover bgCenter" style={{
                    backgroundImage: `url('../img/${this.state.city.image}.jpg')`
                }}>
                <Header />
            </div>

            <div className="text-center">
                <p className="text-orange-100 md:px-4 bg-black pb-2 font-semibold lobster text-3xl md:text-6xl">What to do in {this.state.city.city}</p>
            </div> 
            {
                this.props.cityItineraries.length === 0
                ?
                <div className="w-11/12 md:w-8/12 mx-auto flex flex-col bg-gray-100 rounded-xl mt-12 md:mt-20 mb-10 md:mb-20 rounded-md shadow-md hover:shadow-lg">     
                    <div className="text-center pt-10 pb-10 bg-orange-100">
                        <span className="text-2xl lato font-bold">No itineraries available </span>    
                    </div>     
                    <div className="w-full rounded-md">
                        <div className="bg-orange-100 bgCenter bgCover px-4">
                           
                        </div>
                        <div className="flex flex-row justify-between pl-0 pb-0 h-10 rounded-b-md shadow-md bg-gray-500"></div>
                    </div>
                </div>
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