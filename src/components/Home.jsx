import './styles/Banner.css'
import Footer from './Footer'
import HomeGallery from './HomeGallery'
import Banner from './Banner'




function Home() {
    return (
        <div className='home'>
      <Banner/>
        <HomeGallery/>
        <Footer/>
    </div>
         ) 
     
     
}
export default Home