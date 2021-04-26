import React from 'react';
import { connect } from 'react-redux';

import { Loader } from '../components/Loader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardCity from '../components/CardCity';
import NoCitiesAlert from '../components/NoCitiesAlert';

import citiesActions from '../redux/actions/citiesActions';

class Cities extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.getCities()
    }

    render() {
        return(
            <>
            <div className="heroCities w-full bg-gray-800" style={{
            backgroundImage:"url('./img/hero-cities-background.jpg')"
            }}>
                <Header/>
            </div>
            
            <div className="h-24 bg-blue-900 flex flex-col items-center">
                <div className="w-full flex items-center mt-6">
                    <input onChange={ (e) => this.props.filterCities(e.target.value) } className="focus:outline-none shadow-md md:w-1/3 mx-auto rounded-full py-3 px-16 md:px-6" type="text" placeholder="Find your next destination">
                    </input>
                </div>
            </div>

            {
                this.props.loading && <Loader />
            }

            <div className="w-11/12 mx-auto mt-20 mh70">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {   
                        this.props.noCitiesAlert
                        ? //si la variable nocitiesalert es true, va a mostrar esa alerta
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