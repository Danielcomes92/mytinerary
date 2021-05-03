const NoCitiesAlert = () => {
    return (
        <div className="flex flex-col col-span-3 md:w-9/12 mx-auto md:mt-5 mb-10">
            <div className="w-full md:pb-2">
                <div className="text-center">
                    <p className="text-base mb-2 font-semibold md:text-3xl lato">No coincidences found, look for another city</p>
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
