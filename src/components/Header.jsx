import { Link } from 'react-router-dom'
import image from '../assets/logo.png'
import './styles/Banner.css'

 
function Header() {
    return (
        <div className='header'>
            <img  className='logo' src={image} alt='kasa-logo'/>
        <nav className='banner-links'>
            <Link to="/">Accueil</Link>
            <Link to="/about"> A propos</Link>
            <Link to="*"></Link>
            
        </nav>
        </div>
    )
}

export default Header