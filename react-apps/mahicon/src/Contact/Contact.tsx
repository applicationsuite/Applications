export const Contact = () => {
  return (
    <>
      <div className="container-fluid pt-5 bg-primary hero-header">
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-white mb-4 animated slideInRight">
                Contact Us
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
                    Contact Us
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
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Contact Us
              </div>
              <h1 className="mb-4">Have Any Query, Please Contact Us</h1>
              <p></p>
              <p className="mb-4">
                <div className="col-lg-7">
                  <p className="text-center mb-4">
                    Spuihof 15, 1316 EE Almere The Netherlands, support@mahicon.com, +31 687 848707
                  </p>
                  <div className="wow fadeIn" data-wow-delay="0.3s">
                    <form>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Your Name"
                            />
                            <label>Your Name</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Your Email"
                            />
                            <label>Your Email</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="subject"
                              placeholder="Subject"
                            />
                            <label>Subject</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <textarea
                              className="form-control"
                              placeholder="Leave a message here"
                              id="message"
                            ></textarea>
                            <label>Message</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100 py-3"
                            type="submit"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </p>
            </div>
            <div
              className="col-lg-4 text-center text-md-end wow fadeIn align-top"
              data-wow-delay="0.5s"
            >
              <img className="img-fluid" src="contactus.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
