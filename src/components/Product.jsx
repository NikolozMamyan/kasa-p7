import Carousel from "./Carousel"
import { useParams } from "react-router-dom";
import data from '../data/data.json'


function Logement () {
    const idproduct = useParams('id').id;
    const dataProduct = data.filter(el=> el.id === idproduct);
    const slides = dataProduct[0].pictures
    return (
            <Carousel slides = {slides}/>
            ) 
}

export default Logement