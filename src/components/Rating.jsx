import red_star from '../assets/Vector.png'
import grey_star from '../assets/greyv.png'
const Rating = ({ content}) => {
    const fullStars = Array(5).fill(<img src={red_star} alt='Full star' className='redStar'/>)
    const emptyStars = Array(5).fill(<img src={grey_star} alt='Empty Star' className='greyStar'/>)
    return (
            <div className='ratingStars'>
                {fullStars.slice(5-content,).map((fullStar, index) => {
                return (<p key={index}>{fullStar}</p>)
                })}
                {emptyStars.slice(content,).map((emptyStar, index) => {
                return (<p key={index}>{emptyStar}</p>)
                })}
            </div>
    );
};

export default Rating;