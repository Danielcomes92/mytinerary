import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="flex justify-between mt-32 px-12 py-4 h-auto bg-gray-900 text-gray-300 relative bottom-0 w-full">
            <div className="w-1/2 flex flex-col">
                <Link exact to="/"><span className="font-light text-2xl">Home</span></Link>
                <Link to="/cities"><span className="font-light text-2xl">Cities</span></Link>
                <p className="font-light text-2xl">All rights reserved | 2021 </p>
            </div>
            <div className="w-1/2 text-right">
                <p>Social media</p>
                <p>Social media</p>
                <p>Social media</p>
                <p>Social media</p>
            </div>
        </footer>
    )
}

export default Footer;