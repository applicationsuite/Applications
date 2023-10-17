import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { About } from "../../../About";
import { Career } from "../../../Career";
import { Contact } from "../../../Contact";
import { Services } from "../../../Services";

export const Header = () => {
  return (
    <header className="header">
      <nav>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </BrowserRouter>
      </nav>
    </header>
  );
};
