import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Main";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />}></Route>
            <Route path="/Home" index element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
