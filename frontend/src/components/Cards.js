const Cards = ({play, pause}) => {
    return(
        <section className="cardsContainer mx-auto">
            <span className="text-5xl"><b>¿</b>What to see...<b>?</b></span>
            <div className="mt-4 grid md:grid-cols-2  lg:grid-cols-3 gap-4">
                <div className="card flex-1 rounded-md shadow-md bg-gray-100 mx-auto">
                    <video onMouseOver={play} onMouseLeave={pause} className="rounded-t-md" src="../img/fontana.mp4" muted loop> </video>
                    <div className="p-2 mt-2 flex flex-row items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>Fontana Di Trevi - <b>Italy</b></span>
                    </div>
                </div>

                <div className="card flex-1 rounded-md shadow-md bg-gray-100 mx-auto">
                    <video onMouseOver={play} onMouseLeave={pause} className="rounded-t-md" src="../img/eiffel.mp4" muted loop> </video>
                    <div className="p-2 mt-2 flex flex-row items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>Eiffel Tower - <b>France</b></span>
                    </div>
                </div>

                <div className="card flex-1 rounded-md shadow-md bg-gray-100 mx-auto">
                    <video onMouseOver={play} onMouseLeave={pause} className="rounded-t-md" src="../img/neuschwastein.mp4" muted loop> </video>
                    <div className="p-2 mt-2 flex flex-row items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>Neuschwastein Castle - <b>Germany</b></span>
                    </div>
                </div>

                <div className="card flex-1 rounded-md shadow-md bg-gray-100 mx-auto">
                    <video onMouseOver={play} onMouseLeave={pause} className="rounded-t-md" src="../img/londoneye.mp4" muted loop> </video>
                    <div className="p-2 mt-2 flex flex-row items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>London Eye - <b>United Kingdom</b></span>
                    </div>
                </div>

                <div className="card flex-1 rounded-md shadow-md bg-gray-100 mx-auto">
                    <video onMouseOver={play} onMouseLeave={pause} className="rounded-t-md" src="../img/greece.mp4" muted loop> </video>
                    <div className="p-2 mt-2 flex flex-row items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>Mykonos - <b>Greece</b></span>
                    </div>
                </div>

                <div className="card flex-1 rounded-md shadow-md bg-gray-100 mx-auto">
                    <video onMouseOver={play} onMouseLeave={pause} className="rounded-t-md" src="../img/denmark.mp4" muted loop> </video>
                    <div className="p-2 mt-2 flex flex-row items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>Copenhagen - <b>Denmark</b></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards;