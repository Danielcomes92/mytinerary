const NoCitiesAlert = () => {
    return (
        <div className="flex flex-col col-span-2 w-full md:mt-5 mb-10">
            <div className="w-full md:pb-2">
                <div className="text-center">
                    <p className="text-lg font-bold md:text-3xl lato">Sorry, we have no coincidences, find another city</p>
                </div>
            </div>    
            
            <div className="heroCities mx-auto hidden md:block" style={{
                backgroundImage: "url('/img/nocities.jpg')"
            }}>
            </div>

            <div className="heroCities mx-auto md:hidden" style={{
                backgroundImage: "url('/img/nocitiesmobile.jpg')"
            }}>   
            </div>
                
        </div>
    );
}
 
export default NoCitiesAlert;
