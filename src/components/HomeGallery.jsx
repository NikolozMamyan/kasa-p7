import data from '../data/data.json'
import Card from './Card'
import './styles/Gallery.css'
function Gallery() {
    return(
        <section className="home_gallery">
              {data.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
    </section>
    )
}

export default Gallery