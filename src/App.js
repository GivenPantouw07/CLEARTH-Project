import logo from "./Logo_Clearth.svg";
<<<<<<< HEAD
import earth from "./earth.png";
=======
>>>>>>> ba7372dfaa455abe4bd1b76765363e1eb1e95fc7
import "./App.css";

function App() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
<<<<<<< HEAD
        <h1 className="clearth">LEARTH</h1>
        <div className="menu">
          <button>
            <a href="#">LOGIN</a>
          </button>
        </div>
      </div>
      <header>
        <div className="isi">
          <h1 className="bigfont">CLEARTH</h1>
          <p>START YOUR CLEARTH JOURNEY</p>
          <button className="get-started-btn">
            <a href="#">GET STARTED</a>
          </button>
        </div>
        <img src={earth} alt="earth1" className="earth" />
=======
        <div className="menu">
          <a href="#">LOG IN</a>
        </div>
      </div>
      <header>
        <button className="get-started-btn">Get Started</button>
>>>>>>> ba7372dfaa455abe4bd1b76765363e1eb1e95fc7
      </header>
    </div>
  );
}

export default App;
