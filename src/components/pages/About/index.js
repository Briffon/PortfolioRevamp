import React from 'react'
import Carousel from '../../Carousel';
import './index.css';

function About() {
    return (
        <Carousel width='100%' height='100vh' className="page about-container" items={
                [
                    {title:'About'},
                    {title:'Technologies'},
                    {title:'Services'}
                ]
            }
        />
        // <Carousel className="page about-container">
        //     <div>
        //         <p className="legend">Legend 1</p>
        //     </div>
        //     <div>
        //         <p className="legend">Legend 2</p>
        //     </div>
        //     <div>
        //         <p className="legend">Legend 3</p>
        //     </div>
        //     <div>
        //         <p className="legend">Legend 3</p>
        //     </div>
        // </Carousel>
    )
}

export default About;
