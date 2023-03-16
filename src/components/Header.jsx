import image from '../assets/logo.png'
import './styles/Banner.css'
import { NavLink } from "react-router-dom";


 
function Header() {
    return (
        <div className='header'>
            <img  className='logo' src={image} alt='kasa-logo'/>
        <nav className='banner-links'>
        <NavLink to="/" className="nav-site nav-menu">Accueil</NavLink>
                <NavLink to="/about" className="nav-site nav-menu">A propos</NavLink>
        </nav>
     
        </div>
    )
}

export default Header