import logo from "./Logo_Clearth.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="menu">
          <a href="#">LOG IN</a>
        </div>
      </div>
      <header>
        <button className="get-started-btn">Get Started</button>
      </header>
    </div>
  );
}

export default App;
