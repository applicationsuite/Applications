import "../Home/home.css";
import { FooterDemo } from "../Footer/footer";
import { NavBar } from "../navbar/navbar";
import { Link } from "react-router-dom";

export function HomeDemo() {
  return (
    <div className="container-fluid">
      <NavBar />
      <header>
        <div className="top-header">
          <div className="top-heading">
            <p className="first">
              We provide outstanding services for all clients and partners.
            </p>
            <p className="second">RESPONSIVE WEB DESIGN</p>
            <p class="third">Get Supported Your Website on All Devices</p>
          </div>
          <div className="laptop-image">
            <img src="laptop.png" />
          </div>
        </div>
        <div className="logo">
          <img src="logo1.png" />
          <img src="logo2.png" />
          <img src="logo3.png" />
          <img src="logo4.png" />
          <img src="logo5.png" />
          <img src="logo6.png" />
        </div>
      </header>
      <section>
        <div className="section-menu ">
          <div className="section-paragraph">
            <p>
              <span className="ab">
                The fastest way to grow your business with the leader in
                Technology
              </span>
              <span className="cd">CONTACT now for more deatils.</span>
            </p>
          </div>
          <div>
            <Link to="/about " className=" btn ">
              <div className="start-button"> Get Started Now</div>
            </Link>
          </div>
        </div>

        <div className="service">
          <h3>Our Services</h3>
          <p>We put in best services to achieve golas of our clientele.</p>
        </div>
        <div className="section-body">
          <div className="first-page">
            <div className="mobile">
              <h3>
                <span className="icons-color">
                  <span className="bi bi-phone"> </span>
                </span>
                Mobile App Development
              </h3>
              <p className="parap">
                We have deep technical expertise by helping startups and big
                brands adopt mobile-first approach. Having built world-class
                mobile solutions.
              </p>
            </div>
            <div className="web-dev">
              <h3>
                <span className="icons-color">
                  <span className="bi bi-globe-central-south-asia"></span>
                </span>
                Web Development
              </h3>
              <p className="parap">
                Using Advanced Technology in Web Development & Building the
                Secure & Easy To Control Admin,we impact businesses.
              </p>
            </div>
            <div className="web-hosting">
              <h3>
                <span className="icons-color">
                  <span className="bi bi-list-ul"></span>
                </span>
                Web Hosting
              </h3>
              <p className="parap">
                Mahicon is one of the best Search Engine
                Optimization(SEO) Company among the top SEO Companies in
                Bhubaneswar.Odisha.
              </p>
            </div>
          </div>
          <div className="second-page">
            <div className="commerce">
              <h3>
                <span className="icons-color">
                  <span className="bi bi-cart4"></span>
                </span>
                E-commerce Solution
              </h3>
              <p className="parap">
                We turn complex selling ideas of merchants into simple eCommerce
                models that make shopping fun for customers!!
              </p>
            </div>
            <div className="digital">
              <h3>
                <span className="icons-color">
                  <span className="bi bi-opencollective"></span>
                </span>
                Digital Marketing
              </h3>
              <p className="parap">
                Increase brand awareness by harnessing the right digital
                marketing techiques for your business with us.
              </p>
            </div>
            
          </div>
          <div className="third-page">
            <div className="web">
              <h3>
                <span className="icons-color">
                  <span className="bi bi-pc-display-horizontal"></span>
                </span>
                Web Design
              </h3>
              <p className="parap">
                We dynamically leverage existing synergistic systems where
                future-proof sources Synergistically formulate.
              </p>
            </div>
            <div className="organic">
              <h3>
                <span className="icons-color">
                  <span className="bi bi-bezier2"></span>
                </span>
                Organic SEO
              </h3>
              <p className="parap">
                Mahicon is one of the best Search Engine
                Optimization(SEO) Company among the top SEO Companies in
                Bhubaneswar, Odisha.
              </p>
            </div>
            <div className="domain">
              <h3>
                <span className="icons-color">
                  <span className="bi bi-building"></span>
                </span>
                Domain Registration
              </h3>
              <p className="parap">
                Mahicon is one of the top Domain Registration Companies
                in Bhubaneswar, Odisha, India.
              </p>
            </div>
          </div>
        </div>
        <div className="section-middle">
          <div className="middle-logo">
            <h4 className="middle-heading">
              To give back to society,we work hard.
            </h4>
            <p className="middle-paragrap">
              At Mahicon,we understand our social responsibility.We
              help them grow and prosper under our umbrella of technological
              expertise
            </p>
            <div className="middle-images">
              <img src="logo7.jpeg" width="150px" className="imgs" />
              <img src="logo8.jpeg" />
            </div>
          </div>
        </div>
        <div className="section-bottom">
          <div className="first-image">
            <img
              src="logo11.jpeg"
              width="200px"
              height="200px"
              class="logo-imgs"
            />
            <span className="text">Strategy</span>
          </div>
          <div className="second-image">
            <img
              src="logo12.jpeg"
              width="200px"
              height="200px"
              className="logo-imgs"
            />
            <span className="text">Planning</span>
          </div>
          <div className="third-image">
            <img
              src="logo13.jpeg"
              width="200px"
              height="200px"
              className="logo-imgs"
            />
            <span className="texte">Build</span>
          </div>
          <div className="four-image">
            <img
              src="logo14.jpeg"
              width="360px"
              height="360px"
              className="logo-imgs"
            />
            <span className="texts">Our Work</span>
          </div>
        </div>
        <FooterDemo />
      </section>
    </div>
  );
}
