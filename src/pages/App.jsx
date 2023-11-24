import React, { useState } from "react";
import PumpkinGame from "../components/PumpkinGame";

function App() {
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
    <section className="bgapp">
      <header>
        <button type="button" onClick={toggleMusic} className="music-toggle">
          {isMusicPlaying ? "🔕" : "🎵"}
        </button>
        <audio id="background-music" loop>
          <source src="src\assets\Song\TheShiningTheme.mp3" type="audio/mpeg" />
          <track kind="captions" label="French" srcLang="fr" src="" default />
        </audio>
      </header>
      <PumpkinGame />
    </section>
  );
}

export default App;
