import { Link } from 'react-router-dom'
import Product from './Product'
import './styles/Gallery.css'



function card({id,title,cover}) {
 
           
                return(
                    <Link to ={`product/${id}`} element={<Product/>} className="homme_card">
                    <img className='appart' src={cover} alt={title}/>
                    <h3>{title}</h3>
                </Link>
                )
            }
export default card