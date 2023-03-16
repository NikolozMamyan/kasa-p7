import { useState } from 'react';
import '../components/styles/collapse.css'
import fleche from '../assets/arrow_back.png'

function Collapse ({content, title, contentAb, titleAb}) {

    const [open, setOpen] = useState(false);

    return (
        <div className="collapse">
            <div className="button_flex"onClick={()=>setOpen(!open)}>
                {title} <div className='buttonab'>{titleAb}</div> 
                <img  className={open ? 'arrow_up' : 'arrow_down'}
                src={fleche} 
                alt='arrow'/>
            </div>   
            
            <div>{open && <div className={"textdesc" }>{content}
                {<div className='abouttext'> {contentAb} </div>}</div>}
            </div>
            
</div>
    )
} export default Collapse