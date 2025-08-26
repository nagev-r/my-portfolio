import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollHandler from "./components/ScrollHandler";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  console.log("App component rendered");
  return (
    <Router>
      <div className="app-layout">
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <ScrollHandler />
        </main>
        <Navbar />
      </div>
      <footer className="site-footer">
        <div className="footer-logo">★</div> 
          <p className="subtext">© 2025 Nageline Vallon-Rodriguez<br/> All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
