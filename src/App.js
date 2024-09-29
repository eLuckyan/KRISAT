import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Main";
import Home from "./Pages/Home";
import About from "./Pages/About";
import StaticTemplate from "./Layout/StaticTemplate";
import ContentData from './Services/utils/json/contentData'
import Gallery from "./Pages/Gallery";

function App() {
  const {staticData} = ContentData();
  return (
    <>
      <Router basename="KRISAT">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />}></Route>
            <Route path="/Home" index element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Gallery" element={<Gallery />}></Route>
            <Route path="/AboutUs/:index?" element={<StaticTemplate navItem={"AboutUs"} subNav={staticData["About Us"]} content="AboutUs Content" />} />
            <Route path="/Farming/:index?" element={<StaticTemplate navItem={"Farming"} subNav={staticData["Farming"]} content="Farming Content" />} />
            <Route path="/Academics/:index?" element={<StaticTemplate navItem={"Academics"} subNav={staticData["Academics"]} content="Academics Content" />} />
            <Route path="/AcademicActivities/:index?" element={<StaticTemplate navItem={"AcademicActivities"} subNav={staticData["Academic Activities"]} content="Academic Activities Content" />} />
            <Route path="/LifeKRISAT/:index?" element={<StaticTemplate navItem={"LifeKRISAT"} subNav={staticData["Life @ KRISAT"]} content="Life @ KRISAT Content" />} />
            <Route path="/Facilities/:index?" element={<StaticTemplate navItem={"Facilities"} subNav={staticData["Facilities"]} content="Facilities Content" />} />
            <Route path="/Nursery/:index?" element={<StaticTemplate navItem={"Nursery"} subNav={staticData["Nursery"]} content="Nursery Content" />} />
            <Route path="/RulesRegulations/:index?" element={<StaticTemplate navItem={"RulesRegulations"} subNav={staticData["Rules & Regulations"]} content="Rules & Regulations Content" />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
