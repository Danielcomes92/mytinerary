import Header from '../components/Header'
import Footer from './Footer'


const City = (props) => {
    // console.log(props.match.params.id)

    let numRandom = Math.ceil(Math.random() * 5 )
    
    return (
        <>        
            <div className="h-screen flex flex-col heroContainer bg-gray-800 rounded" style={{
                    backgroundImage: `url('../img/itinerariesbg-${numRandom}.jpg')`
                }}>
                <Header />
                
                <div className="bg-white w-11/12 md:w-9/12 h80 mx-auto flex flex-col md:flex-row mt-64 mb-16 md:mt-24">
                    <div className="w-full h-full md:w-2/4 bg-red-500 p-2 bgCenter bgCover" style={{
                        backgroundImage: "url('../img/eiffel.jpg')"
                    }}>
                        
                    </div>
                    <div className="w-full h-full md:w-3/4 bg-blue-900 p-2 overflow-y-auto overflow-x-hidden">
                        <div className="text-center">
                            <span className="lobster text-4xl md:text-6xl text-white text-center">Coming soon!</span>
                        </div>
                        <div className="h30 w-11/12 bg-yellow-400 mx-auto mt-4 mb-2">
                        </div>
                        <div className="h30 w-11/12 bg-yellow-400 mx-auto mt-4 mb-2">
                        </div>
                        {/* <div className="h30 w-11/12 bg-yellow-400 mx-auto mt-4 mb-2">
                        </div>
                        <div className="h30 w-11/12 bg-yellow-400 mx-auto mt-4 mb-2">
                        </div> */}
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
 
export default City;