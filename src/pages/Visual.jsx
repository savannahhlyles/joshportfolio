import React, { useEffect } from 'react';
import './Visual.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

function Visual() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <div className="visuals">
      <h1>Visual Art</h1>
    </div>
  );
}

export default Visual;
