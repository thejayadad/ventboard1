import { Link } from "react-router-dom";
import { IoMdHome, IoIosStar, IoIosListBox } from "react-icons/io";


const Navbar = () =>{
    return (
        <nav>
                    <Link className="nav_link" to="/"><IoMdHome className="icon" />Home</Link>
                    <Link className="nav_link" to="/mission"><IoIosStar className="icon" />Mission</Link>
                    <Link className="nav_link" to="/messagepage"><IoIosListBox className="icon" />Message</Link>
        </nav>
    )
}


export default Navbar;