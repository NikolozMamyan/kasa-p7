import Carousel from "./Carousel"
import RatingA from "./Rating";
import Collapse from "./Collapse";
import '../components/styles/Product.css'
import {useParams} from "react-router-dom";
import data from '../data/data.json'
import NotFound from './NotFound'

function Logement () {
    const idproduct = useParams('id').id;
    const dataProduct = data.filter(el=> el.id === idproduct);
    let slides,name,description,equipments,title,location,rating,image
    if(dataProduct.length !==0) {
        console.log(dataProduct)
        slides = dataProduct[0].pictures
        name = dataProduct[0].host.name
        description = dataProduct[0].description
        equipments = dataProduct[0].equipments.map((item, index) => {
            return (
                <p className="paragraphe" key={index}>{item}</p>
            ) 
        })
        title = dataProduct[0].title
        location = dataProduct[0].location
        rating = dataProduct[0].rating
        image = dataProduct[0].host.picture
    }
    
    return  dataProduct.length!==0 ?(
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
    ):<NotFound/>
}
export default Logement