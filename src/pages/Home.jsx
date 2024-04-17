// Home.js
import React from 'react';
import './Home.css'; 

function Home() {
  return (
    <div className="home-container">
        <h1>Joshua Belk</h1>
        <div className="tagline">
          <p>
            MUSICIAN
          </p>
          <p>
            POET
          </p>
          <p>
            STORYTELLER
          </p>
        </div>

        <div className="bio">
        <p>
        As a dedicated musician and poet, I'm on a journey of artistic exploration. 
        Currently enrolled in sound design with a minor in music production at the 
        Savannah College of Art and Design, I'm honing my skills to embark on a dual 
        career path in post-production sound editing and music creation.
        </p>
        <p>
        For as long as I can remember, I've been crafting songs and poetry, drawing 
        inspiration from the world around me. Now, I'm delving into recording and mixing,
        weaving together intricate melodies with fingerstyle guitar and clawhammer banjo. 
        My artistic palette often reflects natural motifs intertwined with rich metaphorical layers.
        </p>
        <p>
        In my creative endeavors, I'm captivated by the enigmatic essence of human memory and the profound 
        emotions of euphoria and nostalgia. Each day, I strive to evolve as both a writer and musician, 
        fueled by a passion for growth and self-discovery. Join me on this journey as we explore the boundless 
        realms of artistry and expression together.
        </p>
        
        </div>

    </div>
  );
}

export default Home;
