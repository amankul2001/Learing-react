import './navbar.css'
import logo from '../../assets/logo.png';

const Navbar = () =>{
    return(
        <>
        <nav>
            <div className="top-nav">
                topnav
            </div>
            <div className="bottom-nav">
                <div className="logo">
                     <img src={logo} alt="" />
                </div>
                <div className="nav-links">

                </div>
            </div>
        </nav>
        </>
    )
};

export default Navbar;