import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <h1> Spooky Bounce</h1>
      <div>
      <Link to="/App">
        <button className="buttonplay" type="button">Play the game if you dare </button>
      </Link>
      </div>
    </div>
  );
}

export default Home;
