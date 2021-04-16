const NoCitiesAlert = ({handleVideo}) => {
    return (
        <div className="flex flex-col col-span-2 v40 w-full mt-10 lg:mb-20">
            <div className="mx-auto w-1/2">
                <video className="rounded shadow-md hover:shadow-lg" onMouseOver={handleVideo} onMouseLeave={handleVideo} src="../img/MyTinerary.mp4" muted loop></video>
            </div>
            
            <div className="w-full px-4 pb-2">
                <div className="text-center">
                    <p className="text-lg font-semibold lobster text-6xl">Oh, that place is unknown for us! :( </p>
                </div>
            </div>
        </div>
    );
}
 
export default NoCitiesAlert;