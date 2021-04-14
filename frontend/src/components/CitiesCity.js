import { Link } from 'react-router-dom';


const CitiesCity = ({city}) => {
    return (
        <>
            <Link to={`/city/${city.id}`}>
                <div className="w-11/12 v50 mx-auto flex flex-col bg-gray-100 rounded-xl mt-5 mb-5 rounded-md shadow-md hover:shadow-lg mb-10 cursor-pointer">
                    <div className="w-full h75 bgCover BgCenter" style={{
                        backgroundImage: `url('./img/${city.image}.jpg')`
                    }}></div>
                
                    <div className="w-full text-left rounded-md">
                        <div className="text-left">
                            <p className="text-lg px-4 pb-2 bg-orange-100 font-semibold lobster text-5xl md:text-6xl">{city.city}</p>
                        </div>
                        <div>
                            <div className="flex flex-row items-center pl-0 pb-0 bg-gray-800 rounded-b-md shadow-md">
                                <div className="flex items-center flex-row ">
                                    <div className="bgCover bgCenter w-16 h-10 rounded-bl-md" style={{
                                        backgroundImage: `url('${city.flag}')`
                                    }}>
                                    </div>
                                <span className="mx-2 text-2xl italic text-gray-200 lobster">{city.country} - </span>
                                </div>
                                <div className="items-center">
                                    <div className="text-blue-300 lato mt-1">#Discover{city.continent}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>  
        </>
     )
}
 
export default CitiesCity;