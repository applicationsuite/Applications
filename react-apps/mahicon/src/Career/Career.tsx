export const Career = () => {
  return (
    <>
      <div className="container-fluid pt-5 bg-primary hero-header">
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-white mb-4 animated slideInRight">
                Career
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
                    Career
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
                Career
              </div>
              <h1 className="mb-4">We Can Help You Succeed</h1>
              <p></p>
              <p className="mb-4">
                We seek people who look at problems as opportunities and are not
                shy of challenges. Email your CV to hr@mahicon.com
              </p>
            </div>
            <div
              className="col-lg-6 text-center text-md-end wow fadeIn align-top"
              data-wow-delay="0.5s"
            >
              <img className="img-fluid" src="jobsearch.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
