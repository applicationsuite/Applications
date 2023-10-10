import "../navbar/navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Servicemenu } from "../service-menu/service-menu";
export function NavBar() {
  function servicemenu() {
  
  }
  return (
    <div className="container-fluid nav-bar ">
      <div className="container">
        <nav>
          <div className="d-flex justify-content-between">
            <div className="mt-5 ms-5">
              <h2>Mahicon</h2>
            </div>
            <div>
              <div className="mt-3 me-5" class="tel">
                <span className="bi bi-telephone-fill">(+31) 687848707</span>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end me-5  nav-font">
            <Link className="btn" to="/" class="nav-link">
              HOME
            </Link>

            <Link className="btn " to="/service" class="nav-link">
              <div onMouseOver={servicemenu}>SEVICES</div>
            </Link>

            <Link
              className="btn  "
              to="/clouds"
              data-bs-toggle="button"
              class="nav-link"
            >
              CLOUDS
            </Link>

            <Link
              className="btn"
              to="/solution"
              data-bs-toggle="button"
              class="nav-link"
            >
              SOLUTION
            </Link>

            <Link
              className="btn"
              to="/career"
              data-bs-toggle="button"
              class="nav-link"
            >
              CAREER
            </Link>

            <Link
              className="btn "
              to="/about"
              data-bs-toggle="button"
              class="nav-link"
            >
              ABOUT US
            </Link>

            <Link
              className="btn"
              to="/blog"
              data-bs-toggle="button"
              class="nav-link"
            >
              BLOG
            </Link>

            <Link
              className="btn"
              to="/contact"
              data-bs-toggle="button"
              class="nav-link"
            >
              CONTACT US
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
