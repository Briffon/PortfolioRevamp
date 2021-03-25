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
        setPage(page);

        document.getElementsByClassName('active')[0].classList.remove('active');
        document.getElementsByClassName('carousel-container__buttons-button')[page].classList.add('active');
    }

    const next =(e)=>{
        e.preventDefault();
        let next=page+1;
        if(props.items[next]){
            setPage(next);
            if(document.getElementsByClassName('disable')[0]){
                document.getElementsByClassName('disable')[0].classList.remove('disable');
            }

            if(!props.items[next+1]){
                document.getElementsByClassName('carousel-container__pagination-next')[0].classList.add('disable');
            }

            document.getElementsByClassName('active')[0].classList.remove('active');
            document.getElementsByClassName('carousel-container__buttons-button')[next].classList.add('active');
        }
    }

    const previous =(e)=>{
        e.preventDefault();
        let previous = page-1;

        if(props.items[previous]){
            setPage(previous);
            if(document.getElementsByClassName('disable')[0]){
                document.getElementsByClassName('disable')[0].classList.remove('disable');
            }
            if(!props.items[previous-1]){
                document.getElementsByClassName('carousel-container__pagination-previous')[0].classList.add('disable');
            }

            document.getElementsByClassName('active')[0].classList.remove('active');
            document.getElementsByClassName('carousel-container__buttons-button')[previous].classList.add('active');
        }
    }

    return (
        <div style={{width:props.width, height:props.height}} className={`${props.className ? props.className :null} carousel-container`}>
            {props.items[page].html}
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
                    if(id===0){
                        return(
                            <Button onClick={e=>switchPage(e,id)} key={id} className="active carousel-container__buttons-button" content={button.title}/>
                        )
                    }else{
                        return(
                            <Button onClick={e=>switchPage(e,id)} key={id} className="carousel-container__buttons-button" content={button.title}/>
                        )
                    }
                }):null}
            </div>

            <div carousel-container__pagination>
                <button onClick={e=>previous(e)} className="disable carousel-container__pagination-previous">{`<`}</button>
                <button onClick={e=>next(e)} className="carousel-container__pagination-next">{`>`}</button>
            </div>
        </div>
    )
}

export default Carousel
