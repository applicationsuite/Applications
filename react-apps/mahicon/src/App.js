import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HomeDemo } from "./Home/home";
import { CloudDemo } from "./cloud/cloud";
import { BlogDemo } from "./blog/blog";
import { AboutDemo } from "./aboutus/about";
import { CareerDemo } from "./career/career";
import { ContactDemo } from "./contact/contact";
import { ServicesDemo } from "./servicess/service";
import { SolutionDemo } from "./sloutions/solution";
function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeDemo />} />
          <Route path="/blog" element={<BlogDemo />} />
          <Route path="/clouds" element={<CloudDemo />} />
          <Route path="/About" element={<AboutDemo />} />
          <Route path="/career" element={<CareerDemo />} />
          <Route path="/contact" element={<ContactDemo />} />
          <Route path="/service" element={<ServicesDemo />} />
          <Route path="/solution" element={<SolutionDemo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
