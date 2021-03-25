import React from 'react'
import Carousel from '../../Carousel';
import './index.css';
import Typist from 'react-typist';

function About(props) {
    return (
        <Carousel width='100%' height='100vh' className={`${props.className} page about-container`} items={
                [
                    {title:'About Me',html:<div className="about-container__about-me carousel-container__item">
                        <h2>About Me</h2>
                        <Typist>
                            Hello! My name is Britton Smith, a web developer/designer from FullSail university.
                        </Typist>
                    </div>
                    },
                    {title:'Services',html:<div className="about-container__services carousel-container__item">
                        <div className="about-container__services__item">
                            <h2>Design</h2>
                            <img src="./images/design.jpg" alt="design image"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                        <div className="about-container__services__item">
                            <h2>Develop</h2>
                            <img src="./images/develop.jpg" alt="develop image"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                        <div className="about-container__services__item">
                            <h2>Google Analytics</h2>
                            <img src="./images/google.png" alt="google analytics image"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
                    },{title:'Technologies',html:<div className="about-container__technologies carousel-container__item">
                    </div>
                },
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
