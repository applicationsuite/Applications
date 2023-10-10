import { FooterDemo } from "../Footer/footer";
import { Link } from "react-router-dom";
import { NavBar } from "../navbar/navbar";

export function SolutionDemo() {
  return (
    <div className="container-fluid">
      <NavBar />
      <FooterDemo />
    </div>
  );
}
