import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'


const City = (props) => {
    let id = props.match.params.id;
    const[city, setCity] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/api/City/${id}`)
        .then(resp => setCity(resp.data.response))
    }, [id])
    
    return (
        <>
            <ScrollToTop />
            <div className="h65 flex flex-col bgCover bgCenter" style={{
                    backgroundImage: `url('../img/${city.image}.jpg')`
                }}>
                <Header />
            </div>

            <div className="text-center">
                <p className="text-orange-100 md:px-4 bg-black pb-2 font-semibold lobster text-3xl md:text-6xl">What to do in {city.city}</p>
            </div> 

            <div className="w-11/12 md:w-10/12 mx-auto flex flex-col bg-gray-100 rounded-xl mt-12 md:mt-20 mb-10 md:mb-20 rounded-md shadow-md hover:shadow-lg">          
                <div className="w-full  rounded-md">
                    <div className="v40 bg-gray-700 overflow-y-auto px-4">
                        <p className="text-orange-100 text-lg text-center font-semibold lobster text-5xl md:text-6xl">Site under construction, coming soon!</p>
                    </div>
                    <div className="flex flex-row justify-between pl-0 pb-0 bg-gray-800 rounded-b-md shadow-md bg-gray-900">
                        <div className="flex flex-row items-center pl-0 pb-0 bg-gray-800 rounded-b-md shadow-md bg-gray-900">
                            <div className="bgCover bgCenter w-16 h-10 rounded-bl-md" style={{
                                    backgroundImage: `url('${city.flag}')`
                                }}>
                            </div>
                            <div className="flex items-center flex-row">
                                <span className="mx-2 text-2xl italic text-gray-200 lobster">{city.country} - </span>
                            </div>
                            <div className="items-center">
                                <div className="text-blue-300 lato mt-1">#GoingTo{city.continent}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mb-12">
                <Link to="/cities" className="">
                    <span className="shadow-md hover:shadow-xl text-white py-4 px-12 bg-blue-900 duration-500 transition hover:bg-white hover:text-blue-900 cursor-pointer lato rounded">Back to Cities</span>
                </Link>
            </div>
            <Footer />
        </>
    );
}
 
export default City;