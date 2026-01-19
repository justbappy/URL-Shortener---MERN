import { Link, NavLink } from "react-router-dom"
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
                <Link to={"/"} className="text-shadow-[0px_0px_2px_rgb(99_88_220)]">URL Shortener</Link>
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
                className="md:hidden text-white flex gap-4 justify-around"
                >
                    <li>
                        <NavLink to={"/"}
                        style={
                            ({isActive}) => ({
                                color: isActive? "#6358dc" : "white"
                            })
                        }
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/user/all-links"}
                        style={
                            ({isActive}) => ({
                                color: isActive? "#6358dc" : "white"
                            })
                        }
                        >All Links</NavLink>
                    </li>
                    {/* <li>
                        <Link to={"/support"}>Support us</Link>
                    </li> */}
                    <li>
                        <NavLink to={"/contact-us"}
                        style={
                            ({isActive}) => ({
                                color: isActive? "#6358dc" : "white"
                            })
                        }
                        >Contact us</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header