import React, { useState } from "react";
import { Link } from "react-router-dom";

function Page404() {
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
    <div>
      <video autoPlay muted loop className="background-video404">
        <source src="src\assets\Video\Video404.mp4" type="video/mp4" />
      </video>
      <button type="button" onClick={toggleMusic} className="music-toggle">
        {isMusicPlaying ? "🔕" : "🎵"}
      </button>
      <audio id="background-music" loop>
        <source src="src\assets\Song\Kosmorider.mp3" type="audio/mpeg" />
        <track kind="captions" label="French" srcLang="fr" src="" default />
      </audio>
    </div>
  );
}

export default Page404;
