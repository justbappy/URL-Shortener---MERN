import { Link } from "react-router-dom"
import Navbar from "../UI/Navbar"
import Search from "../UI/Search"

const Header = () => {
  return (
    <div
    className=""
    >
        <div
        className="flex justify-between items-center py-7 md:gap-10"
        >
            <h1
            className="text-primary text-3xl md:text-4xl font-semibold"
            >
                <span className="text-shadow-[0px_0px_2px_rgb(99_88_220)]">URL Shortener</span>
            </h1>
            <Navbar/>
        </div>
        {/* <div className="md:hidden block">
            <Search/>
        </div> */}
        <div>
            {/* mobile nav */}
            <nav>
                <ul
                className="md:hidden text-white flex gap-4 justify-center"
                >
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/user/all-links"}>All Links</Link>
                    </li>
                    <li>
                        <Link to={"/contact-us"}>Contact us</Link>
                    </li>
                    <li>
                        <Link to={"/support-us"}>Support us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header