import City from "./City";

const Slide = ({cities}) => {
    return(
        <div className="carousel-cell grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 p-2">
        {
            cities.map(city => {
            return <City key={city.id} city={city} />            
        })
        }
        </div>
    )
}

export default Slide;