const CitiesCity = ({city}) => {
    return (
        <>
            <div className="w-11/12 v50 mx-auto flex flex-col bg-gray-100 rounded-xl mt-5 mb-5 rounded-md shadow-md hover:shadow-lg mb-10 cursor-pointer">
                <div className="w-full h75 bgCover BgCenter" style={{
                    backgroundImage: `url('./img/${city.image}.jpg')`
                }}></div>
            
                <div className="w-full px-4 pb-2 text-left">
                    <div className="text-left">
                        <p className="text-lg font-semibold lobster text-6xl">{city.city}</p>
                    </div>
                    <div>
                        <div className="flex flex-row items-center mb-2">
                            <div><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="#ff9300" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="11" r="3" />
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                            </svg></div>    
                            <div>
                               <span className="mx-2 text-xl italic text-orange-600">{city.country} -</span>
                            </div>
                            <div className="items-center">
                                <div className="text-orange-700 lato">#Discover{city.continent}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     )
}
 
export default CitiesCity;