import logo from "./Logo_Clearth.svg";
import earth from "./earth.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1 className="clearth">LEARTH</h1>
        <div className="menu">
          <button>
            <a href="#">LOGIN</a>
          </button>
        </div>
      </div>
      <header>
        <div className="isi">
          <h1>CLEARTH</h1>
          <p>Start your CLEARTH journey</p>
          <button className="get-started-btn">GET STARTED</button>
        </div>
        <img src={earth} alt="earth1" className="earth" />
      </header>
    </div>
  );
}

export default App;
