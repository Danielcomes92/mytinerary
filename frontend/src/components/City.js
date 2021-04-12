const City = ({city}) => {
    return(
        <div className="w-full image-city-slider" style={{
            backgroundImage: `url(../img/${city.image})`
        }}>
            <div className="w-full p-2 mt-1">
                <span className="bg-white bg-opacity-75 p-2">{city.city} - <b>{city.place}</b></span>
            </div>
        </div>
    )
}

export default City;