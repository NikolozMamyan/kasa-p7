import { Link } from "react-router-dom"
import '../components/styles/Notfound.css'

function Error () {
    return (
        <div className='notfound'>
        <div className="notfound_infos">
            <h1 className='notfound_title'>404</h1>
            <p className='notfound_content'>Oups! La page que vous demandez n'existe pas.</p>
        </div>
            <Link className='notfound_home' to='/'>Retourner sur la page d'accueil</Link>
    </div>
            
            ) 
}
export default Error