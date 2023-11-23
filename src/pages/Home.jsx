import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);

    const audioElement = document.getElementById("background-music");
    if (isMusicPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  };
  return (
    <section className="ctn">
      <header>
        <button type="button" onClick={toggleMusic} className="music-toggle">
          {isMusicPlaying ? "🔕" : "🎵"}
        </button>
        <audio id="background-music" loop>
          <source src="src\assets\Song\Kosmorider.mp3" type="audio/mpeg" />
          <track kind="captions" label="French" srcLang="fr" src="" default />
        </audio>
        {/* <img className="soundon" src="src\assets\Image\du-son.png" alt="sound on"></img> */}
      </header>
      <div className="Home">
        <h1> Spooky Bounce</h1>
        <div>
          <Link to="/App">
            <button className="buttonplay" type="button">
              Play the game if you dare{" "}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
