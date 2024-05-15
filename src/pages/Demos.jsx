import React, { useEffect } from 'react';
import './Demos.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

function Demos() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <div className="demos">
      <h1>Demos</h1>
      <p>Coming soon!</p>
    </div>
  );
}

export default Demos;
