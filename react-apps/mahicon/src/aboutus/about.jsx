import { Link } from "react-router-dom";
import { FooterDemo } from "../Footer/footer";
import { NavBar } from "../navbar/navbar";
export function AboutDemo() {
  return (
    <div className="container-fluid">
      <NavBar/>
      <FooterDemo/>
    </div>
  );
}
