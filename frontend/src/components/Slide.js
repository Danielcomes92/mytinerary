import City from "./City";

const Slide = ({cities}) => {
    return(
        <div className="carousel-cell grid grid-cols-2 grid-rows-2">
        {
            cities.map(city => {
            return <City key={city.id} city={city} />            
        })
        }
        </div>
    )
}

export default Slide;