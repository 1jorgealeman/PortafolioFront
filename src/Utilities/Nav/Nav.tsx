import React from 'react';
import instagram from '../../Img/instagram.svg';
import github from '../../Img/github.svg';
import linkedin from '../../Img/linkedin.svg';
import './Nav.scss';
const Nav=()=>{

    return (
        <header className="ed-header s-bg-grey s-py-2">
            <div className="ed-grid lg-grid-6">        
                <div className="s-cross-center s-main-start redes">
                    <img  src={instagram}/> 
                    <img src={github}/>
                    <img src={linkedin}/>
                </div>
                
                <div className="s-cross-center s-main-center">
                    <img  className="" src={linkedin}/> 
                </div>

                <nav className="nav lg-cols-4 s-cross-center ed-grid full">
                    <ul className="menu s-main-distribute lg-to-right s-mb-0 s-pl-0 s-py-1">
                        <li className="lg-mr-3">
                            <a className="link s-column s-cross-center active" href="#">
                                <span>Sobre mi</span>
                            </a>
                        </li>
                        <li className="lg-mr-3">
                            <a className="link s-column s-cross-center" href="#">
                                <span>Portafolio</span>
                            </a>
                        </li>
                        <li className="lg-mr-3">
                            <a className="link s-column s-cross-center" href="#">
                                <span>Contactame</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
      </header>
    )

}
export default Nav;