export const Services = () => {
  return (
    <>
      <div className="container-fluid pt-5 bg-primary hero-header">
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-white mb-4 animated slideInRight">
                Services
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
                    Services
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="col-lg-5 wow fadeIn align-text-top"
              data-wow-delay="0.1s"
            >
              <div className="btn btn-sm border rounded-pill text-primary px-3">
                Our Services
              </div>
              <h1 className="mb-4">
                We put in best services to achieve goals of our client
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor eirmod magna dolore erat amet
              </p>
              {/* <a className="btn btn-primary rounded-pill px-4" href="">
                Read More
              </a> */}
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="row g-4">
                    <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <i className="fa fa-home fa-2x"></i>
                        </div>
                        <h5 className="mb-3">Web Design</h5>
                        <p>
                          We dynamically leverage existing synergistic systems
                          where future-proof sources Synergistically formulate.
                        </p>
                        {/* <a className="btn px-3 mt-auto mx-auto" href="">
                          Read More
                        </a> */}
                      </div>
                    </div>
                    <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <i className="fa fa-home fa-2x"></i>
                        </div>
                        <h5 className="mb-3">Mobile App Development</h5>
                        <p>
                          We have deep technical expertise by helping startups
                          and big brands adopt mobile-first approach. Having
                          built world-class mobile solutions.
                        </p>
                        {/* <a className="btn px-3 mt-auto mx-auto" href="">
                          Read More
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pt-md-4">
                  <div className="row g-4">
                    <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <i className="fa fa-home fa-2x"></i>
                        </div>
                        <h5 className="mb-3">
                          SAP migration and implementation
                        </h5>
                        <p>
                          SAP is one of the widely used ERP software across the
                          large or medium size enterprises because of its
                          excellent integrated business processes and friendly
                          user experience. You can access your business data and
                          processes easily at one place.
                        </p>
                        {/* <a className="btn px-3 mt-auto mx-auto" href="">
                          Read More
                        </a> */}
                      </div>
                    </div>
                    <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <i className="fa fa-home fa-2x"></i>
                        </div>
                        <h5 className="mb-3">Salesforce</h5>
                        <p>
                          Salesforce data migration is one of the most
                          challenging projects, and will differ depending on the
                          size, format, and accuracy of the source data. Data
                          migration is the process of transferring data from one
                          system to another, however, the work required before
                          the actual transfer is the most complex part.
                        </p>
                        {/* <a className="btn px-3 mt-auto mx-auto" href="">
                          Read More
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
