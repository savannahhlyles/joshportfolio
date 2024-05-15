import React, { useEffect } from 'react';
import './Visual.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import blue from "/blue.jpg";
import dress from "/dress.jpg";
import mixed from "/mixed.jpg";
import sun from "/sun.jpg";

function Visual() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <div className="visuals">
      <h1>Visual Art</h1>
      <img src={dress} alt="Dress Art" id="dress" data-aos="flip-left"/>
      <img src={sun} alt="Sun Art" id="sun" data-aos="flip-right"/>
      <img src={blue} alt="Blue Art" id="blue" data-aos="flip-left"/>
      <img src={mixed} alt="Mixed Art" id="mixed" data-aos="flip-right"/>
    </div>
  );
}

export default Visual;
