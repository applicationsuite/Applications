import "../career/career.css";
import { Link } from "react-router-dom";
import { FooterDemo } from "../Footer/footer";
import { NavBar } from "../navbar/navbar";

export function CareerDemo() {
  return (
    <div>
      <NavBar />
      <div >
        <div className="banner">
          <img src="banner.png" width="100%" height="250" />
          <div className="row">
            <div className="banner-text  col-5">
              <h2>Career</h2>
              We seek people who look at problems as opportunities <br />
              and are not shy of challenges. Email your CV to
              <br /> hr@mahicon.com
            </div>
            <div className="col-1 btn banner-text-home">
              <Link to="/">HOME</Link>/CAREER
            </div>
          </div>
        </div>
        <div className="container mt-3">
          <div className="form-container">
            <div className="row  p-5">
              <div className="col-6 ">
                <input type="text" placeholder="Keywords" size="70" />
              </div>
              <div className="col-6">
                <input type="text" placeholder="Location" size="70" />
                <br />
                <input type="checkbox" /> Remote positions only
              </div>
              <span className=" btn bg-danger p-1 text-white d-flex justify-content-center">
                Search Jobs
              </span>
            </div>
          </div>
          <div className="mt-2">
            There are no listings matching your search.
          </div>
          <hr />
        </div>
        <FooterDemo />
      </div>
    </div>
  );
}
