export const Home = () => {
  return (
    <>
      <div className="container-fluid pt-4 bg-primary hero-header">
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-white mb-4 animated slideInRight">
                Empowering Businesses through Technology for a Smarter Future
              </h1>
              <p className="text-white mb-4 animated slideInRight">
                We are specialized in Web Design, Mobile Apps development, SAP,
                Salesforce, Security/GRC, Master Data Services, and S/4 HANA
                migration and implementation.
              </p>
              <a
                href="/about"
                className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight"
              >
                Read More
              </a>
              <a
                href="/contact"
                className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
              >
                Contact Us
              </a>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img className="img-fluid" src="tech1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-primary feature pt-5">
        <div className="container pt-5">
          <div className="row g-5">
            <div
              className="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn"
              data-wow-delay="0.3s"
            >
              <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">
                Why Choose Us
              </div>
              <h1 className="text-white mb-4">
                We're Best in Industry with Experience
              </h1>
              {/* <p className="text-light mb-4">
                Unleashing Innovation through Expertise
              </p> */}
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <i className="fa fa-check"></i>
                </div>
                <span>
                  Customer Support - We promise, always be ready with an answer.
                  Our average turnaround time is less than 4 hours.
                </span>
              </div>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3 btn-square-chooseus-1">
                  <i className="fa fa-check"></i>
                </div>
                <span>
                  Technical Expertise - Our development team is very talented
                  and have experts in respective fields. They possess years of
                  collective experience in bringing up refined web solutions.
                </span>
              </div>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3 btn-square-chooseus-2">
                  <i className="fa fa-check"></i>
                </div>
                <span>
                  Competitive Pricing - We offer high quality work matched by a
                  superior customer service at an affordable price.
                </span>
              </div>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3 btn-square-chooseus-3">
                  <i className="fa fa-check"></i>
                </div>
                <span>
                  Client Satisfaction - Client Satisfaction & success to the
                  core is the thing that drives us to work day in and day out
                  with full of passion and zeal.
                </span>
              </div>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3 btn-square-chooseus-4">
                  <i className="fa fa-check"></i>
                </div>
                <span>
                  Diverse domain competency - Our team has intense knowledge in
                  diverse domains, e.g. Education, E-Commerce, News & Media,
                  Healthcare, ERP & CRM, Hospitality, and e-Governance.
                </span>
              </div>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3 btn-square-chooseus-5">
                  <i className="fa fa-check"></i>
                </div>
                <span>
                  Reliable and consistent - We are in operation for many years
                  with happy clients across the globe.
                </span>
              </div>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <i className="fa fa-check"></i>
                </div>
                <span>
                  Ensure Quality - Our competent QA team ensures quality. We
                  follow best practices to maintain code quality.
                </span>
              </div>

              <div className="row g-4 pt-3">
                <div className="col-sm-6">
                  <div className="d-flex rounded p-3">
                    <i className="fa fa-users fa-3x text-white"></i>
                    <div className="ms-3">
                      <h2 className="text-white mb-0" data-toggle="counter-up">
                        20+
                      </h2>
                      <p className="text-white mb-0">Happy Clients</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex rounded p-3">
                    <i className="fa fa-check fa-3x text-white"></i>
                    <div className="ms-3">
                      <h2 className="text-white mb-0" data-toggle="counter-up">
                        30+
                      </h2>
                      <p className="text-white mb-0">Project Complete</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 text-center text-md-end wow fadeIn align-top"
              data-wow-delay="0.5s"
            >
              <img className="img-fluid" src="tech2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
