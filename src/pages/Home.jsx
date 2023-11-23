import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="ctn">
        <header>
            <img className="soundon" src="src\assets\Image\du-son.png" alt="sound on"></img>
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