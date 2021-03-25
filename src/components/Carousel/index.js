import React,{useEffect,useState} from 'react';
import Button from '../Button';
import './index.css';

function Carousel(props) {
    const [page,setPage] = useState(0);
    // useEffect(()=>{
    //     setPage(props.items[0].title)
    // },[props.items])

    const switchPage=(e,page)=>{
        e.preventDefault();
        console.log(page);
    }

    return (
        <div style={{width:props.width, height:props.height}} className={`${props.className ? props.className :null} carousel-container`}>
            {console.log(props.items[page].title)}
            {page ? 
            <div className='carousel-container__item'>
                <p>{props.items[page].title}</p>
            </div>:null}
            {/* {props.items ? props.items.map((item,id)=>{
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
            }):null} */}
            
            <div className="carousel-container__buttons">
                {props.items ? props.items.map((button,id)=>{
                    return(
                        <Button onClick={e=>switchPage(e,id)} key={id} className="carousel-container__buttons-button" content={button.title}/>
                    )
                }):null}
            </div>
        </div>
    )
}

export default Carousel
