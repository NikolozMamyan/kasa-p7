import {useState } from "react"
import '../components/styles/Carousel.css'
import Right from '../assets/droite.png'
import Left from '../assets/gauche.png'
function Carousel({slides}) {

    const [currentIndex, setCurrentIndex] = useState(0)
    const GoToPrevious =() => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1 ;
        setCurrentIndex(newIndex);
    };
    const GoToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
return(
    
    <main className="carousel" style={{backgroundImage: `url(${slides[currentIndex]})`}}>
        {
            slides.length > 1 && <>
            <img  className='left' src={Left} alt='flecheG' onClick={GoToPrevious}/>
        <img className='right'src={Right} alt='flechD' onClick={GoToNext}/>
        <p className="slidecount">{currentIndex + 1} /{slides.length}</p>
        </>
        }
        
    </main>
)
}

export default Carousel