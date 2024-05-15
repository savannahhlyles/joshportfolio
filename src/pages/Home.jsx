import React, { useEffect } from 'react';
import './Home.css'; 
import headerImg from "/background.jpg";
import leaf1 from "/leaf1.png";
import leaf2 from "/leaf2.png";
import leaf3 from "/leaf3.png";
import linkedin from "/linkedin.png";
import phone from "/phone.png";
import email from "/email.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div className="outerbox">

        <div className="image-container">
        <img src={headerImg} alt="Header Image" />
          <div className="text-container" >
            <div className="name-container">
                <h1>Joshua Belk</h1>
            </div>

            <div className="tagline-container">
                <div className="tagline">
                    <p>MUSICIAN</p>
                    <p>POET</p>
                    <p>STORYTELLER</p>
                </div>
            </div>
          </div>
        </div>

        <div className="bio-container">
          <div className="bio">
            <p id="bio1" data-aos="fade-right">
                I am currently pursuing a degree in sound design
                <br></br>with a minor in music production at the
                <br></br><a href="https://www.scad.edu/" target="_blank" id="scad"> Savannah College of Art and Design.</a> 
                <br></br>Through this program, I am actively refining
                <br></br>my expertise in the field.
            </p>
            <p id="bio2" data-aos="fade-left">
                I've crafted songs and poetry since childhood, 
                <br></br>drawing inspiration from my surroundings. Now, I'm 
                <br></br><span id="emphasis">recording and mixing,</span>
                <br></br>blending melodies with guitar and banjo, 
                <br></br>reflecting natural motifs with metaphorical depth.
            </p>
            <p id="bio3" data-aos="fade-right">
                Join me on this journey as we explore the realms of
                <br></br> <span id="emphasis">artistry and expression</span>
                <br></br>together.
            </p>
            <img src={leaf1} alt="Leaf" id="leaf1"/>
            <img src={leaf2} alt="Leaf" id="leaf2"/>
            <img src={leaf3} alt="Leaf" id="leaf3"/>

            <a href="tel:+8035773092" data-aos="fade-up">
            <img src={phone} alt="Phone" id="phone"/>
            </a>
            <a href="mailto:joshuabelk1@icloud.com" data-aos="fade-up">
            <img src={email} alt="Email" id="email"/>
            </a>
            <a href="https://www.linkedin.com/in/joshua-belk-6907aa299/" target="_blank" data-aos="fade-up">
            <img src={linkedin} alt="LinkedIn" id="linked"/>
            </a>
          </div>
        </div>
        
    </div>
  );
}

export default Home;
