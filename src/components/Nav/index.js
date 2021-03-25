import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import './index.css';

function Nav() {

    const scrollTo=(e,post)=>{
        e.preventDefault();
        scroll.scrollTo(post-(post/10));
    }

    return (
        <div className="nav-container">
            <img className="nav-container-logo" src="./images/logo-white.png" alt="logo"/>
                <ul className="nav-container__links">
                    <li onClick={e=>scrollTo(e,0)}>Home</li>
                    <li onClick={e=>scrollTo(e,1080)}>About</li>
                    <li onClick={e=>scrollTo(e,2160)}>Portfolio</li>
                    <li onClick={e=>scrollTo(e,3240)}>Contact</li>
                    <img src="./images/me.png" alt="Britton Smith"/>
                </ul>
                {/* <Link 
                    activeClass="active"
                    to="landing-container"
                    spy={true}
                    smooth="true"
                    offset={-70}
                    duration={500}
                >Landing</Link>

                <Link 
                    activeClass="active"
                    to="about-container"
                    spy={true}
                    smooth="true"
                    offset={-70}
                    duration={800}
                >About</Link>

                <Link 
                    activeClass="active"
                    to="Portfolio"
                    spy={true}
                    smooth="true"
                    offset={-70}
                    duration={500}
                >Portfolio</Link>

                <Link 
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth="true"
                    offset={-70}
                    duration={500}
                >Contact</Link>  */}
        </div>
    )
}

export default Nav;
