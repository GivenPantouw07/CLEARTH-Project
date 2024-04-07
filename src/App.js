import logo from "./Logo_Clearth.svg";
import earth from "./earth.png";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login.jsx";

function App() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <h1 className="clearth">LEARTH</h1>
          <div className="menu">
            <nav>
              <button>
                <Link to="src/components/login/Login.jsx">LOGIN</Link>
              </button>
            </nav>
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
      <Routes>
        <Route path="/src/components/login/Login.jsx" Component={Login} />
      </Routes>
    </Router>
  );
}

export default App;
