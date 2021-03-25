import React from 'react';
import './index.css';

function Carousel(props) {
    return (
        <div style={{width:props.width, height:props.height}} className={`${props.className ? props.className :null} carousel-container`}>
            {props.items ? props.items.map((item,id)=>{
                if(id!==0){
                    return(
                        <div key={id} className='hidden carousel-container__item'>
                            <p>{item.title}</p>
                        </div>
                    )
                }else{
                    return(
                        <div key={id} className='carousel-container__item'>
                            <p>{item.title}</p>
                        </div>
                    )
                }
            }):null}
            
            <div className="carousel-container__buttons">
                {props.items ? props.items.map((button,id)=>{
                    return(
                        <button key={id} className="carousel-container__buttons-button">{button.title}</button>
                    )
                }):null}
            </div>
        </div>
    )
}

export default Carousel
