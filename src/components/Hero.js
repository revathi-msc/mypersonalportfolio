import React from 'react'
import TypeWriter from 'typewriter-effect'
import Heroimage from '../images/R1.png'
import CV from '../assets/revathiresume.pdf'
import { Link } from 'react-scroll'
const Hero = () => {
    return (
       <div id="hero" className="container">
            <div className="hero_left">
                <p className="name">RevathiMahalingam</p>
                <p className="title"><span class="title_span">I'm a  </span>
                    <TypeWriter
                        options={{
                            strings: ['Programmer','Developer'],
                            autoStart: true,
                            delay:60,
                            loop: true,
                        }}
                    />
                </p>
                <div className="hero_btns">
                    <p className="cv_download"><a target="_blank" rel="noreferrer" href={CV}>Download CV <span><i className="fa fa-download" aria-hidden="true"></i></span></a></p>
                    <p className="hire_btn">
                        <Link to="contact">Hire Me</Link>
                    </p>
                </div>
            </div>
            <div className="hero_right">
                <img src={Heroimage} alt="profile_image" />
            </div>
        </div>
    )
}

export default Hero