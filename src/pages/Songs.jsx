import React, { useEffect } from 'react';
import './Songs.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import header1 from "/header1.jpg";

function Songs() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <div className="songs">
      <h1>Songwriting</h1>
      <p id="title1" data-aos="fade-right">
      Polyptych
      </p>
      <p id="chords1" data-aos="fade-right">
      Chords: D, Bbm, Am, Bbm, F#, Em
      </p>
      <p id="song1" data-aos="fade-up">
      Cherish by thorn
      <br></br>Your vice in remission
      <br></br>I look to the sun
      <br></br>And watch your arrows rush in
      <br></br>Watermelon vine
      <br></br>Sonnets written in brevity
      <br></br>I go to the sycamore
      <br></br>And taste her poison leaves
      <br></br>ow long must I remain in silence 
      <br></br>Before I return to the dogs and the dust?
      <br></br>I cast my sorrows
      <br></br>Over plates of gold
      <br></br>I hang them on my wall
      <br></br>In hopes that you’ll collect them
      <br></br>Great Blue Heron
      <br></br>The breeze of the marsh
      <br></br>She wades in the muddied water 
      <br></br>I ask her to fish for my heart
      <br></br>How long must I remain in silence 
      <br></br>Before I return to the dogs and the dust?
      </p>

      <p id="title2" data-aos="fade-right">
      Flowers
      </p>
      <p id="chords2" data-aos="fade-right">
      Chords: Em, Am, Bm, D, Em
      </p>
      <p id="song2" data-aos="fade-up">
      You pulled the flowers from my garden
      <br></br>I am not the one you seek
      <br></br>He is of the air
      <br></br>Lives within the sun’s rays
      <br></br>And in the roots you pull yourself
      <br></br>The owl is calling
      <br></br>She needs my hands
      <br></br>I shall soar alongside her 
      <br></br>And lift her wings
      <br></br>My life will be no more
      <br></br>I look to the spider
      <br></br>That reigns over my garden 
      <br></br>She weaves my bed for me 
      <br></br>Starlit and graceful
      <br></br>She offers a second chance
      <br></br>I have arrived
      <br></br>At my new place of dwelling 
      <br></br>It’d be kind of you to join me 
      <br></br>With the sunlight in our grasp 
      <br></br>We could rest softly forevermore
      </p>

      <p id="title3" data-aos="fade-right">
      Four-legged 
      <br></br>Wildebeest
      </p>
      <p id="chords3" data-aos="fade-right">
      Chords: G, C, Am, G, Em, Bbm
      </p>
      <p id="song3" data-aos="fade-up">
      Standing amongst the untamed violet plains
      <br></br>With hesitation
      <br></br>I call upon the moon
      <br></br>In desperation
      <br></br>In my gaze, the blackened forest 
      <br></br>Sweet temptation
      <br></br>The souls held captive
      <br></br>Like hooves underwater
      <br></br>In the crystal caverns
      <br></br>Amid the quiet
      <br></br>Hear the spellbinding language 
      <br></br>Of the fork-tongued creatures
      <br></br>The pear has gone sour
      <br></br>I try to restore it
      <br></br>Yet the blackened birch sap 
      <br></br>Awakens the darkness
      <br></br>That my dear friend, the afterlife 
      <br></br>May bring
      <br></br>I pluck deep from the caverns 
      <br></br>Your soul adrift
      <br></br>In the crystal caverns
      <br></br>Amid the quiet
      <br></br>Hear the spellbinding language 
      <br></br>Of the fork-tongued creatures
      <br></br>I shall make my descent
      <br></br>I will follow the violets
      <br></br>I will drown in your honeyed wine 
      <br></br>As the fates have written
      <br></br>I will follow the violets
      <br></br>I will follow the violets
      <br></br>I will follow the violets
      <br></br>I will follow the violets
      </p>

      <img src={header1} alt="Header" id="header1" />

    </div>
  );
}

export default Songs;
