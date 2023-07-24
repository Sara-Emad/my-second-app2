import React from "react";

const Home = () => {
  return (
    <>
      <section className="hero">
        <header>
          <nav
            className="navbar navbar-expand-lg navbar-light mx-4 "
            style={{ backgroundColor: "transparent" }}
          >
            <a className="navbar-brand" href="www">
              <img src="./images/logo.png" alt="" />
              <span className="beta">Beta</span>

            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item">
                  <a className="nav-link" href="/Blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Login">
                    Login
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <a
                  className="btn btn-light mx-2 my-2 my-sm-0 "
                  type="submit" href="/Iwanttohire"
                >
                  I Want To Hire
                </a>
                <a
                  className="btn btn-outline-light mx-2 my-2 my-sm-0"
                  type="submit" href="/Iamrecruitr"
                >
                  I am A Recruiter
                </a>
              </form>
            </div>
          </nav>
        </header>
        <div>
          <div className="row mx-0">
            <div
              className="col-12 text-center"
              style={{
                color: "rgb(248, 245, 245)",
                marginBottom: "15%",
                marginTop: "15%",
              }}
            >
              <h1>Your Tech Hiring Arm</h1>
              <p style={{ fontStyle: "italic" }}>
                We Change The Way Of Hiring Tech Talents
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container ">
          <div className="row mx-0">
            <div
              className="col-12 text-center "
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                lineHeight: "43px",
                marginBottom: "5.4rem",
                marginTop: "2.4rem",
              }}
            >
              How can we do it?
            </div>
          </div>
          <div className="row mx-0 ">
            <div className="col-lg-3 col-6">
              <div className="card text-center">
                <img
                  src="./images/about1.png"
                  style={{ width: "83px", height: "95px" }}
                  className="card-img "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Post A Job</h5>
                  <p className="card-text">
                    Start by posting a job with all needed requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3  col-6">
              <div className="card text-center">
                <img
                  src="./images/about2.png"
                  style={{ width: "83px", height: "95px" }}
                  className="card-img "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Get An Offer</h5>
                  <p className="card-text">
                    We will send you in 24hrs -as max- the hiring offer for the
                    job.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="card">
                <img
                  src="./images/about3.png"
                  style={{ width: "83px", height: "95px" }}
                  className="card-img "
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">We Do The Magic</h5>
                  <p className="card-text">
                    We work with Tech Verifiers getting you the most technically
                    validated candidates.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="card">
                <img
                  src="./images/about4.png"
                  style={{ width: "83px", height: "95px" }}
                  className="card-img "
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Hiring is Done!</h5>
                  <p className="card-text">
                    You check the reports we sent to you, contact them and
                    voilà, Hiring is done!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-12 text-center">
              <button type="button" className="btn btn-warning mt-5">
                {" "}
                Hire Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="sub-service">
        <div className="container">
          <div className="row mx-0">
            <div
              className="col-12 text-center "
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                lineHeight: "43px",
                marginBottom: "3.4rem",
                marginTop: "6.4rem",
              }}
            >
              Happy employers are few, Be one of them
            </div>
          </div>
        </div>
        <div className="video-container" id="video-container">
          <div id="home-video" width="100%">
            <iframe
              src="https://www.youtube.com/embed/910niYAKKmg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              width="100%"
              height={500}
              frameBorder={0}
            />
          </div>
        </div>
        {/* <video id="home-video" width="100%" height="100%">
                <source src="./video/TechieMatter Clients Testimonials.mp4" type="video/mp4">
                <source src="" type="video/mp4">
                Your browser does not support HTML5 video.        </video> */}
        {/* <div id="home-video" width="100%">
                <iframe width="100%" height="500" src="./video/TechieMatter Clients Testimonials.mp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> */}
        {/* <div class="img-container" id="video-overlay">
                <img src="./images/maxresdefault vedio.webp" alt="" srcset="">
            </div>  */}
      </section>
      <section className="service">
        <div className="container">
          <div className="container">
            <div className="row mx-0">
              <div
                className="col-12 text-center "
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  lineHeight: "43px",
                  marginBottom: "5.4rem",
                  marginTop: "6.4rem",
                }}
              >
                With TechieMatter, You Can Hire ..
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 ">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={0}
                      className="active"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={1}
                    />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row mx-0 ">
                        <div className="col-12 col-lg-4">
                          <div className="single-box">
                            <div className="img-area">
                              <img src="./images/car11.png" alt="" />
                            </div>
                            <div className="img-text">Mobile Developers</div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="single-box">
                            <div className="img-area">
                              <img src="./images/car12.png" alt="" />
                            </div>
                            <div className="img-text">
                              Full Stack Web Developers
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="single-box">
                            <div className="img-area">
                              <img src="./images/car13.png" alt="" />
                            </div>
                            <div className="img-text">Front-End Developers</div>
                          </div>
                        </div>
                      </div>
                      <div className="row mx-0">
                        <div className="col-12 col-lg-4">
                          <div className="single-box">
                            <div className="img-area">
                              <img src="./images/car14.png" alt="" />
                            </div>
                            <div className="img-text">UX Designers</div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="single-box">
                            <div className="img-area">
                              <img src="./images/car15.png" alt="" />
                            </div>
                            <div className="img-text">UI Designers</div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="single-box">
                            <div className="img-area">
                              <img src="./images/car16.png" alt="" />
                            </div>
                            <div className="img-text">Software Engineers</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row mx-0">
                        <div className="col-12 col-lg-4">
                          <div className="single-box">
                            <div className="img-area">
                              <img src="./images/car21.png" alt="" />
                            </div>
                            <div className="img-text">Scrum Masters</div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="single-box">
                            <div className="img-area">
                              <img src="./images/car22.png" alt="" />
                            </div>
                            <div className="img-text">Product Owners</div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="single-box">
                            <div className="img-area">
                              <img src="./images/car23.png" alt="" />
                            </div>
                            <div className="img-text">
                              Software Testing Engineers
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mx-0">
                        <div className="col-12 col-lg-4">
                          <div className="single-box">
                            <div className="img-area">
                              <img src="./images/car24.png" alt="" />
                            </div>
                            <div className="img-text">DevOps Engineers</div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="single-box">
                            <div className="img-area">
                              <img src="./images/car25.png" alt="" />
                            </div>
                            <div className="img-text">Product Managers</div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="single-box">
                            <div className="img-area">
                              <img src="./images/car26.png" alt="" />
                            </div>
                            <div className="img-text">Business Analysts</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="super-service">
        <div className="container">
          <div className="row mx-0">
            <div className="col-md-4  mt-5 happy">
              <h2>Happy Employers</h2>
            </div>
            <div className="col-md-4 mt-5">
              <div className="card text-center card-omr">
                <div className="img-out">
                  <img
                    src="./images/new_amr.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">
                    TechieMatter is a great Technical Hiring Arm for any
                    company. I tried their service in many roles and they never
                    failed to surprise me with the quality, price, and speed in
                    getting the best techies to my company.
                  </p>
                  <h5 className="card-title">Amr Fawzi</h5>
                  <h5 className="card-text">
                    {" "}
                    CEO &amp; Founder at GoodsMart{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="card text-center card-omr">
                <div className="img-out">
                  <img
                    src="./images/Ines.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">
                    TechieMatter is a great Technical Hiring Arm for any
                    company. I tried their service in many roles and they never
                    failed to surprise me with the quality, price, and speed in
                    getting the best techies to my company.
                  </p>
                  <h5 className="card-title">Amr Fawzi</h5>
                  <h5 className="card-text">
                    {" "}
                    CEO &amp; Founder at GoodsMart{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-12 text-center  mb-5">
              <button type="button" className="btn btn-dark">
                Hire Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="sub-footer">
        <div className="sub-footer1 row mx-0">
          <div className="col-md-12">
            <h2>Have Any Questions Or Suggestions?</h2>
          </div>
          <div className="col-md-12">
            <h4>You can always contact us at info@techiematter.com</h4>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="row mx-0  ">
          <div className="col-lg-6 col-12" style={{ background: "#021559" }}>
            <div className="row mx-0 foot  text-center">
              <div className="col-12 mt-5">
                <img src="./images/for employer.png" alt="" />
              </div>
              <div className="col-12 text-center">
                <h2>For Employers</h2>
              </div>
              <div className="col-12 text-center">
                <h4>
                  {" "}
                  Save time &amp; get qualified candidates with TechieMatter{" "}
                </h4>
              </div>
              <div className="col-12 mt-4">
                <button type="button" className="btn btn-primary btn-footer">
                  I Want To Hire
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 mb-5 ">
            <div className="row mx-0 footer3  text-center">
              <div className="col-12 mb-3 mt-5">
                <img
                  src="./images/for-recuiters@2x footer2.png"
                  style={{ width: "120px", height: "120px" }}
                  alt=""
                />
              </div>
              <div className="col-12 text-center">
                <h2>For Tech Recruiters</h2>
              </div>
              <div className="col-12 text-center">
                <h4> Work with us and earn more with TechieMatter</h4>
              </div>
              <div className="col-12 mt-4">
                <button type="button" className="btn btn-primary btn-footer3">
                  I Want To Join TechieMatter
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="end " style={{ backgroundColor: "#021559" }}>
        <div className="row mx-0 ">
          <div className="col-8 col-sm-4 ">
            <i className="bi bi-geo-alt-fill" style={{ color: "white" }} />{" "}
            <span style={{ color: "white" }}>Giza, Egypt</span>
          </div>
          <div
            className="col-12 col-lg-4"
            style={{ fontSize: "small", color: "white" }}
          >
            <small>© Copyright 2020 TechieMatter. All rights reserved</small>
            <small>|</small>
            <a href>
              <small style={{ color: "white" }}>Privacy policy</small>
            </a>
          </div>
          <div
            className="col-8 col-lg-4  d-flex justify-content-end "
            style={{ color: "white" }}
          >
            <i className="bi bi-facebook mr-2" />
            <i className="bi bi-linkedin mr-2" />
            <i className="bi bi-twitter mr-2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
