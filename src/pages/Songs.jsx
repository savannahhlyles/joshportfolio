import React, { useEffect } from 'react';
import './Songs.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

function Songs() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <div className="songs">
      <h1>Songwriting</h1>
    </div>
  );
}

export default Songs;
