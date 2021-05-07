import React from 'react';
import { connect } from 'react-redux';

import { Loader } from '../components/Loader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardCity from '../components/city/CardCity';
import NoCitiesAlert from '../components/city/NoCitiesAlert';

import citiesActions from '../redux/actions/citiesActions';

class Cities extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.getCities()
    }

    updatePosition = () => {
        window.innerWidth >= 768 && window.scrollTo({top: 70, left: 0, behavior: 'smooth' })
    }

    render() {
        return(
            <>
            <div className="heroCities w-full bg-gray-800 flex flex-col justify-between" style={{
            backgroundImage:"url('./img/hero-cities-background.jpg')"
            }}>
                <Header/>


            </div>
            
                
            <div className="h-18 bg-blue-900 flex flex-col items-center shadow-md">
               <div className="w-full flex items-center mt-2 mb-2 xl:mt-3 xl:mb-3">
                    <input onClick={ this.updatePosition } onChange={ (e) => this.props.filterCities(e.target.value) } className="placeholder-black focus:outline-none border border-gray-300 shadow-md md:w-1/3 mx-auto rounded-full py-2 px-16 md:px-10" type="text" placeholder="Find your next destination"></input>
                </div>
            </div>

            {
            this.props.loading && <Loader />
            }

            <div className="w-11/12 mx-auto mt-4 mb-4 md:mb-0 md:mt-6 mh70">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {   
                        this.props.noCitiesAlert
                        ? //si la variable nocitiesalert es true, va a mostrar esta alerta
                        <NoCitiesAlert />
                        : //de lo contrario me va a recorrer el array de citiesUpdated
                        this.props.citiesUpdated.map(city => {
                            return <CardCity key={city._id} city={city} />
                        })
                    }
                </div>
            </div>

            <Footer />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        citiesUpdated: state.cityReducer.citiesUpdated,    
        noCitiesAlert: state.cityReducer.noCitiesAlert,
        loading: state.cityReducer.loading
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities,
    filterCities: citiesActions.filterCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);