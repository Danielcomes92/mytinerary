import { Link } from 'react-router-dom';

const CardCity = ({city}) => {
    return (
        <>
            <Link to={`/city/${city._id}`}>
                <div className="w-full h65 cardCityContainer mx-auto flex flex-col bg-gray-100 shadow-md hover:shadow-lg transform transition duration-700 hover:scale-105">
                    <div className="w-full h65 bgCover bgCenter" style={{
                        backgroundImage: `url('./img/${city.image}.jpg')`
                    }}>
                        <p className="bg-white text-center w-full bg-opacity-50 text-black px-4 font-semibold lobster text-5xl md:text-5xl">{city.city}</p>
                    </div>
                </div>
            </Link>
        </>
     )
}
 
export default CardCity;