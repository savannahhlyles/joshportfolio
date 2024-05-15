import React, { useEffect } from 'react';
import './Poetry.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import border from "/border.png";

function Poetry() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  
  return (
    <div className="poetry">
      <h1>Poetry</h1>

      <p data-aos="fade-up">
      with my gaze fixed on the jagged rocks, 
      <br></br>i whisper my soft words to the sea
      <br></br>and call her by name.
      <br></br>her tide pulls me closer
      <br></br>and embraces me,
      <br></br>certain and forgiving.
      <br></br>i wish to stay,
      <br></br>but the sea shares with me her knowledge
      <br></br>and sets me ashore,
      <br></br>for i must share with the world
      <br></br>the forgiving love that i’ve come to know.
      </p>

      <img src={border} alt="Leaf Border" />

      <p data-aos="fade-up">
      i sit and watch as the water freezes over, 
      <br></br>for i have no place else to be,
      <br></br>but here amongst the trees,
      <br></br>silent and still,
      <br></br>for it is in this state that i find comfort. 
      <br></br>therefore i shall remain
      <br></br>for as long as it takes
      <br></br>to find true peace.
      </p>

      <img src={border} alt="Leaf Border" />

      <p data-aos="fade-up">
      i feel like i am buried beneath the earth, 
      <br></br>listening as time passes by.
      <br></br>i hear birdsong.
      <br></br>i hear the buzzing of bees.
      <br></br>i hear trains and busy sidewalks. 
      <br></br>i feel safe.
      <br></br>i wish to remain here
      <br></br>for as long as it may take
      <br></br>for the earth to heal itself 
      <br></br>and flourish again.
      </p>

      <img src={border} alt="Leaf Border" />

      <p data-aos="fade-up">
      it is in the quiet of the morning 
      <br></br>that i find true comfort—
      <br></br>the sun peering just over the trees, 
      <br></br>its rays strewn across the lake
      <br></br>like little strings of hope, 
      <br></br>drawing me closer
      <br></br>with every passing second. 
      <br></br>with coffee in hand,
      <br></br>and a book to be read,
      <br></br>it is with great care that i have decided
      <br></br>to place my focus on these very moments— 
      <br></br>these little glimpses of hope,
      <br></br>so that i may plant hops
      <br></br>within my soul,
      <br></br>and allow it to grow.
      </p>

      <img src={border} alt="Leaf Border" />

      <p data-aos="fade-up">
      you sit atop the snowy mountain; your gaze affixed to
      <br></br>the alluring beauty
      <br></br>of the aurora borealis,
      <br></br>flowing across the night sky
      <br></br>like a dancing ribbon.
      <br></br>how you long to live amongst the stars;
      <br></br>you never were much of a dancer.
      <br></br>you wonder how you may achieve such notions, but nothing comes to mind—
      <br></br>so instead you look down
      <br></br>and see white bees
      <br></br>buzzing steadily across
      <br></br>the icy plains stretched beneath you—
      <br></br>frozen crystals bursting from the ground
      <br></br>at every angle.
      <br></br>should you choose to make
      <br></br>such a treacherous journey,
      <br></br>you may never return.
      <br></br>how willing are you
      <br></br>to sacrifice it all?
      <br></br>if you wish to speak with me, 
      <br></br>come forth and we shall find out. 
      <br></br>good luck.
      </p>

      <img src={border} alt="Leaf Border" />

      <p data-aos="fade-up">
      as the winter blossoms into spring,
      <br></br>i find myself unable to do the same,
      <br></br>for there is a dam across the river that flows toward paradise. 
      <br></br>but what could cause such a blockage?
      <br></br>i have spoken with the blossoms—
      <br></br>“your fear may keep you afloat,
      <br></br>but your fear is blocking the water’s flow,” said the blossoms. 
      <br></br>“but would i not sink without my fear?” i asked.
      <br></br>“sometimes you must sink in order to find your way.”
      <br></br>i let my fear blow away with the wind,
      <br></br>and i sink to the river bottom.
      <br></br>there i find a small door, a way through—
      <br></br>and when i open the door,
      <br></br>i find hope,
      <br></br>and hope looks me in the eyes and smiles,
      <br></br>“welcome home.”
      </p>

      <img src={border} alt="Leaf Border" />

      <p data-aos="fade-up">
      i rest here in the wasteland
      <br></br>and let the red sun scorch my face,
      <br></br>for i have grown weary
      <br></br>of the heavy sorrows
      <br></br>pulled from the constellations.
      <br></br>i have journeyed among the stars—
      <br></br>traced every corner of the universe 
      <br></br>searching for answers.
      <br></br>the universe has shared with me her secrets.
      <br></br>i am taking off this suit
      <br></br>and letting the storm rush in,
      <br></br>for there is no greater courage that blooms, 
      <br></br>than from the blossom that hides within.
      </p>

      <img src={border} alt="Leaf Border" />

      <p data-aos="fade-up">
      i watch over the great lake 
      <br></br>with conifers above,
      <br></br>the silt beneath my feet
      <br></br>with its potent sting.
      <br></br>i find comfort in these moments.
      <br></br>i call to the moon for instruction, 
      <br></br>for i am but a vacant celestial body.
      <br></br>she spills her rays into my spirit 
      <br></br>and fills me to the brim
      <br></br>with her sweet magic—
      <br></br>eternal vitality.
      <br></br>my eyes open wider
      <br></br>than ever before
      <br></br>and glow a fluorescent blue.
      <br></br>i am a goddess of the shore—
      <br></br>i am a wanderer, a traveler.
      <br></br>i return my gaze to the water.
      <br></br>i dive under—
      <br></br>a sea wolf after sockeye
      <br></br>i immerse myself with the earth’s ancestors— 
      <br></br>fish and bird, fox and elk.
      <br></br>i allow them to flow through me 
      <br></br>and course through my veins.
      <br></br>i am a goddess of the sea.
      <br></br>i shall never be alone,
      <br></br>for i have found my people, my home, 
      <br></br>in the ever loving embrace of this planet 
      <br></br>in all her beauty.
      <br></br>i shall remain
      <br></br>as this body meets its end
      <br></br>and my spirit lives on,
      <br></br>to find a new body—
      <br></br>a new creature, a new life,
      <br></br>in the moon’s likeness—
      <br></br>as her creation—
      <br></br>in her gaze,
      <br></br>until the earth gives way
      <br></br>and i float amongst the stars.
      <br></br>i’ll follow the moon
      <br></br>to my journey’s end.
      <br></br>i am home.
      <br></br>i am free.
      </p>

      <img src={border} alt="Leaf Border" />

      <p data-aos="fade-up">
      lonely corallite— 
      <br></br>bathed in riches;
      <br></br>bathed in blood.
      <br></br>peculiar squid—
      <br></br>bred of thorn;
      <br></br>rich in love.
      <br></br>we’ll follow suit
      <br></br>and immerse ourselves 
      <br></br>in the glory of the deep, 
      <br></br>where the faint of heart 
      <br></br>may trace in blood
      <br></br>our stories of old,
      <br></br>yet the qualms of the chosen
      <br></br>shall remain untouched.
      <br></br>i’ll remain here,
      <br></br>on my bed of oysters
      <br></br>where harm is distant
      <br></br>and sing my jagged songs of love.
      </p>

    </div>
  );
}

export default Poetry;