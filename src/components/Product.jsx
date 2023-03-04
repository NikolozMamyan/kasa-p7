import Carousel from "./Carousel"
import RatingA from "./Rating";
import Collapse from "./Collapse";
import '../components/styles/Product.css'
import { useParams } from "react-router-dom";
import data from '../data/data.json'

function Logement () {
    const idproduct = useParams('id').id;
    const dataProduct = data.filter(el=> el.id === idproduct);
    const slides = dataProduct[0].pictures
    const name = dataProduct[0].host.name
    const description = dataProduct[0].description
    const equipments = dataProduct[0].equipments.map((item, index) => {
        return (
<p key={index}>{item}</p>
        )
        
    })
    const title = dataProduct[0].title
    const location = dataProduct[0].location
    const rating = dataProduct[0].rating
    const image = dataProduct[0].host.picture
   //// const equipments = dataProduct[0].equipments
    return (
        <section>
            <Carousel slides = {slides}/>
<div className="appartcontent">
    <div className="info">
        <h1 className="titleh">{title}</h1>
            <p className="location">{location}</p>
                <button className="infobut">{dataProduct[0].tags[0]}</button>
                <button className="infobut">{dataProduct[0].tags[1]}</button>
</div>
<div className="host">
        <div className="person"><p className="name">{name}</p>
        <img src={image} alt='img' className="imgperson"/>
        </div>
        
        <div className="rating"><RatingA content={rating}/></div>
    </div>
</div>
<div className="collapse_product">
            <Collapse title={'Déscription'} content={description}/>
            <Collapse title={'Equipements'} content={equipments}/>
     </div>
</section>
            
            )
}

export default Logement

