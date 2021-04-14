import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import CitiesCity from '../components/CitiesCity'
// import Cards from '../components/Cards';

class Cities extends React.Component {
    state = {
        cities: [],
        citiesUpdated: [],
        noCitiesAlert: false,
    }
      
    componentDidMount() {
        const cities = [
            {id: 1, city: 'Porto', country: 'Portugal', image: 'porto', continent: 'Europe', description: '', flag: 'https://media.api-sports.io/flags/pt.svg'},
            {id: 3, city: 'Lisbon', country: 'Portugal', image: 'lisbon', continent: 'Europe', description: '', flag: 'https://media.api-sports.io/flags/pt.svg'},
            {id: 2, city: 'Barcelona', country: 'Spain', image: 'barca', continent: 'Europe', description: '', flag: 'https://media.api-sports.io/flags/es.svg'},
            {id: 4, city: 'Paris', country: 'France', image: 'paris', continent: 'Europe', description: '', flag: 'https://media.api-sports.io/flags/fr.svg'},
            {id: 5, city: 'Bordeaux', country: 'France', image: 'bordeaux', continent: 'Europe', description: '', flag: 'https://media.api-sports.io/flags/fr.svg'},
            {id: 6, city: 'Florence', country: 'Italy', image: 'florence', continent: 'Europe', description: '', flag: 'https://media.api-sports.io/flags/it.svg'},
            {id: 7, city: 'Rome', country: 'Italy', image: 'rome', continent: 'Europe', description: '', flag: 'https://media.api-sports.io/flags/it.svg'},
            {id: 8, city: 'London', country: 'England', image: 'londonc', continent: 'Europe', description: '', flag: 'https://media.api-sports.io/flags/gb.svg'},
            {id: 9, city: 'San Francisco', country: 'Usa', image: 'sanfran', continent: 'North-America', description: '', flag: 'https://media.api-sports.io/flags/us.svg'},
            {id: 10, city: 'Miami', country: 'Usa', image: 'miami', continent: 'North-America', description: '', flag: 'https://media.api-sports.io/flags/us.svg'},
            {id: 11, city: 'New York City', country: 'Usa', image: 'ny', continent: 'North-America', description: '', flag: 'https://media.api-sports.io/flags/us.svg'},
            {id: 12, city: 'Copenhagen', country: 'Denmark', image: 'copenhagen', continent: 'Europe', description: '', flag: 'https://media.api-sports.io/flags/dk.svg'},
            {id: 13, city: 'Berlin', country: 'Germany', image: 'berlin', continent: 'Europe', description: '', flag: 'https://media.api-sports.io/flags/de.svg'},
            {id: 14, city: 'Rio de Janeiro', country: 'Brazil', image: 'rio', continent: 'South-America', description: '', flag: 'https://media.api-sports.io/flags/br.svg'},
            {id: 15, city: 'Amsterdam', country: 'Netherlands', image: 'amsterdam', continent: 'Europe', description: '', flag: 'https://media.api-sports.io/flags/nl.svg'}
        ]

        this.setState({
            cities: cities,
            citiesUpdated: cities
        })

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

    render() {
        return(
            <>
            <div className="heroCitiesContainer heroMainImage w-full bg-gray-800" style={{
            backgroundImage:"url('./img/hero-cities-background.jpg')"

            }}>
                <Header/>
            </div>
            
                <div className="v10 bg-blue-900 flex items-center">
                    <div className="w-full flex">
                        <input onChange={this.updateCountries.bind(this)} className="focus:outline-none shadow-md md:w-1/3 mx-auto rounded-full py-3 px-6" type="text" placeholder="Find your next destination"></input>
                    </div>
                </div>
                {/* <Cards play={this.play} pause={this.pause} /> */}

                <div className="w-11/12 mx-auto mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2">

                    {   
                        this.state.noCitiesAlert
                        ?
                        <div className="flex justify-center h-12 bg-red-700 w-full text-white font-bold">
                            <h1 className="">No conozco ninguna ciudad con ese nombre</h1>
                        </div>
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