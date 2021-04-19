import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import CitiesCity from '../components/CitiesCity'
import NoCitiesAlert from '../components/NoCitiesAlert';
import axios from 'axios';
import ScrollToTop from '../components/ScrollToTop';

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
            cities: resp.data.response, //guardo en cities la respuesta para mantener una referencia original sin modificaciones
            citiesUpdated: resp.data.response, //guardo en citiesupdated al principio la referencia original para que tenga las ciudades cargadas desde el primer momento y poder recorrerarlas
            loading: false
        }))
    }
    
    // Cuando el input cambia, ejecuta la funcion updatecountries
    updateCountries = (e) => {
        //esta funcion toma por parametro el evento que la llamo

        //creo una variable donde voy a guardar lo que el usuario tenga ingresado en el input en ese momento
        //aplico un trim para limpiar espacios adelante y detras del string, y a su vez lo convierto a mayusculas
        let findCity = e.target.value.trim().toUpperCase()
           
        //en caso de que findcity tenga algo adentro va  a cumplirse esta condicion
        if(findCity) {
            var citiesFiltered = this.state.cities.filter(city => (city.city).toUpperCase().includes(findCity) && Array.from(city.city)[0].toUpperCase() === findCity[0])
            // filtro el array ORIGINAL de cities
            // comprobando la propiedad city de cada city, es decir el nombre
            // llevo el valor de la propiedad a mayusculas, por que es la manera en que normalizo este valor con el del input
            // verifico con la funcion includes si el nombre de la ciudad que estoy recorriendo incluye dicho valor

            // si se cumple en algun momento esa condicion, agarro el nombre de esa ciudad y lo convierto a array para poder utilizar el elemento en la posicion 0
            // y lo comparo con la posicion 0 del input,

            // si ambas condiciones se cumplen entonces lo guardo en la variable citiesFiltered

            // en caso de que ninguno cumpla con la condicion entonces el filtro me va a devolver un array vacio
        }
        
        // con la respuesta favorable o no guardada en cities filtered entro aca;
        if(citiesFiltered) {
            //si citiesfiltered tiene un length mayor a 0 significa que al menos una ciudad paso la validacion
            if(citiesFiltered.length > 0) {
                this.setState({
                    //actualizo con el setState el array de citiesUpdated y paso a false la alerta
                    citiesUpdated: citiesFiltered,
                    noCitiesAlert: false
                })
            } else {
                //si citiesfiltered existe osea el usuario ingreso algo pero ninguna ciudad paso la validacion entonces seteo una alerta indicandolo
                this.setState({
                    noCitiesAlert: true
                })
            }               
        } else {
            //si el usuario borra todo el input, eso significa que no esta buscando nada
            //con lo cual el array citiesupdated va a tomar el valor de la referencia original
            this.setState({
                citiesUpdated: this.state.cities
            })
        }
    }

    render() {
        return(
            <>
            <ScrollToTop />
            <div className="heroCitiesContainer heroMainImage w-full bg-gray-800" style={{
            backgroundImage:"url('./img/hero-cities-background.jpg')"
            }}>
                <Header/>
            </div>
            
            <div className="h-24 bg-blue-900 flex flex-col items-center">
                <div className="w-full flex items-center mt-6">
                    <input onChange={this.updateCountries} className="focus:outline-none shadow-md md:w-1/3 mx-auto rounded-full py-3 px-16 md:px-6" type="text" placeholder="Find your next destination">
                    </input>
                </div>
            </div>

            {
                this.state.loading &&
                <div className="sk-cube-grid">
                    <div className="sk-cube sk-cube1"></div>
                    <div className="sk-cube sk-cube2"></div>
                    <div className="sk-cube sk-cube3"></div>
                    <div className="sk-cube sk-cube4"></div>
                    <div className="sk-cube sk-cube5"></div>
                    <div className="sk-cube sk-cube6"></div>
                    <div className="sk-cube sk-cube7"></div>
                    <div className="sk-cube sk-cube8"></div>
                    <div className="sk-cube sk-cube9"></div>
                </div>
            }

            <div className="w-11/12 mx-auto mt-20 mh70">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {   
                        this.state.noCitiesAlert
                        ? //si la variable nocitiesalert es true, va a mostrar esa alerta
                        <NoCitiesAlert />
                        : //de lo contrario me va a recorrer el array de citiesUpdated
                        this.state.citiesUpdated.map(city => {
                            return <CitiesCity key={city._id} city={city} />
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