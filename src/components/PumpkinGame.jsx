import { useState, useEffect } from "react";
import pumpkinImage from "../assets/Image/non.png";

function PumpkinGame() {
  const [pumpkins, setPumpkins] = useState([]);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    setInterval(() => {
      createPumpkin();
    }, 500);

    setInterval(() => {
      setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
  }, []);

  if (timeRemaining == 0) {
    alert(`Game Over! Your Score: ${score}`);
    if (score > highScore) {
      setHighScore(score);
    }
    setScore(0);
    setTimeRemaining(30);
    setPumpkins([]);
    console.log("hello");
  }
  const createPumpkin = () => {
    const pumpkin = {
      id: Date.now(),
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
    };

    setPumpkins((prevPumpkins) => [...prevPumpkins, pumpkin]);
  };

  const destroyPumpkin = (id) => {
    setPumpkins((prevPumpkins) =>
      prevPumpkins.filter((pumpkin) => pumpkin.id !== id)
    );
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <div className="pumpkin-ctn">
      <section className="pumpkin-title">
        <h2>Score: {score}</h2>
        <h3>Time Remaining: {timeRemaining}</h3>
        <h3>High Score: {highScore}</h3>
      </section>
      {pumpkins.map((pumpkin) => (
        <img
          key={pumpkin.id}
          src={pumpkinImage}
          alt="Pumpkin"
          style={{
            position: "absolute",
            top: pumpkin.top,
            left: pumpkin.left,
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          onClick={() => destroyPumpkin(pumpkin.id)}
        />
      ))}
    </div>
  );
}
export default PumpkinGame;
