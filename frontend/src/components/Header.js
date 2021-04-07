const Header = () => {
    return(
        <div className="absolute z-10">
            <div className="flex justify-between text-white p-10 h-20 items-center w-screen">
                <div>
                    <img className="mt-14" src="./img/pngegg.png" width="125px"></img>
                </div>
                <div className="flex">
                    <div className="mr-4">
                        <button className="mx-1">HOME</button>
                        <button className="mx-1">CITIES</button>
                    </div>
                    <div>
                        <button className="mx-1">LOGIN</button>
                        <button className="mx-1">SIGNUP</button>
                        <span>USERIMAGE</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;