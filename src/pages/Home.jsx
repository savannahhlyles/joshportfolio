// Home.js
import React from 'react';
import './Home.css'; 
import headerImg from "/images/background.jpg";
import leaf1 from "/images/leaf1.png";
import leaf2 from "/images/leaf2.png";
import leaf3 from "/images/leaf3.png";
import linkedin from "/images/linkedin.png";
import phone from "/images/phone.png";
import email from "/images/email.png";

function Home() {
  return (
    <div className="outerbox">

        <div className="image-container">
        <img src={headerImg} alt="Header Image" />
          <div className="text-container">
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
            <p id="bio1">
                I am currently pursuing a degree in sound design
                <br></br>with a minor in music production at the
                <br></br><a href="https://www.scad.edu/" target="_blank" id="scad"> Savannah College of Art and Design.</a> 
                <br></br>Through this program, I am actively refining
                <br></br>my expertise in the field.
            </p>
            <p id="bio2">
                I've crafted songs and poetry since childhood, 
                <br></br>drawing inspiration from my surroundings. Now, I'm 
                <br></br><span id="emphasis">recording and mixing,</span>
                <br></br>blending melodies with guitar and banjo, 
                <br></br>reflecting natural motifs with metaphorical depth.
            </p>
            <p id="bio3">
                Join me on this journey as we explore the realms of
                <br></br> <span id="emphasis">artistry and expression</span>
                <br></br>together.
            </p>
            <img src={leaf1} alt="Leaf" id="leaf1"/>
            <img src={leaf2} alt="Leaf" id="leaf2"/>
            <img src={leaf3} alt="Leaf" id="leaf3"/>

            <a href="tel:+8035773092">
            <img src={phone} alt="Phone" id="phone"/>
            </a>
            <a href="mailto:joshuabelk1@icloud.com">
            <img src={email} alt="Email" id="email"/>
            </a>
            <a href="https://www.linkedin.com/in/joshua-belk-6907aa299/" target="_blank">
            <img src={linkedin} alt="LinkedIn" id="linked"/>
            </a>
          </div>
        </div>
        
    </div>
  );
}

export default Home;
