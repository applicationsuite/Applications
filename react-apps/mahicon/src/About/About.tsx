export const About = () => {
  return (
    <>
      <div className="container-fluid pt-5 bg-primary hero-header">
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-white mb-4 animated slideInRight">
                About Us
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                  <li className="breadcrumb-item">
                    <a className="text-white" href="/">
                      Home
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    About Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-4">
        <div className="container py-4">
          <div className="row g-5 align-items-center">
            {/* <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img">
                <img className="img-fluid" src="about-img.jpg" />
              </div>
            </div> */}
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                About Us
              </div>
              <h1 className="mb-4">
                We Make Your Business Smarter with our expertise
              </h1>
              <p></p>
              <p className="mb-4">
                We are young and growing with entrepreneurial spirits which help
                us pave the master path for businesses and corporate hubs of all
                sizes. We are highly skilled in web design, web development,
                Mobile applications, GIS based applications and deploying
                e-commerce platforms with vibrant flexibility and transparency
                in technology. Not limiting to the same, we at Mahicon don’t go
                by words, we research, strategize and deploy our services.
              </p>
              <p className="mb-4">
                Mahicon specializes in Web Design, Mobile Apps development, SAP,
                Salesforce, Security/GRC, Master Data Services, and S/4 HANA
                migration and implementation. With our solutions, not only do we
                make the migration process seamless, but also use our expertise
                to re-engineer your business and make it more productive than
                ever before.
              </p>
              <div className="row g-3">
                <div className="col-sm-6">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2"></i>Award
                    Winning
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2"></i>
                    Professional Staff
                  </h6>
                </div>
                <div className="col-sm-6">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2"></i>24/7
                    Support
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2"></i>Fair Prices
                  </h6>
                </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                {/* <a className="btn btn-primary rounded-pill px-4 me-3" href="">
                  Read More
                </a> */}
                <a className="btn btn-outline-primary btn-square me-3" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-primary btn-square me-3" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-primary btn-square me-3" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 text-center text-md-end wow fadeIn align-top"
              data-wow-delay="0.5s"
            >
              <img className="img-fluid" src="aboutus.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
