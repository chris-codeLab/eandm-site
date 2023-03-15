import Isotope from "isotope-layout";
import { useCallback, useEffect, useRef, useState } from "react";
const PortfolioGridIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".grid", {
        itemSelector: ".col-lg-4",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".col-lg-4",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) =>
    value === filterKey ? "active-work is-checked" : "";

  return (
    <section className="gap no-bottom">
      <div className="container">
        <div className="row">
          <div className="portfolios">
            <div className="filters portfolio-controllers-container">
              <div
                className=" portfolio-controllers wow fadeLeft button-group js-radio-button-group"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                data-filter-group="color"
              >
                <button
                  type="button"
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                  data-filter
                >
                  All
                </button>
                <button
                  type="button"
                  className={`c-pointer ${activeBtn("Training")}`}
                  onClick={handleFilterKeyChange("Training")}
                  data-filter=".Training"
                >
                  Training
                </button>
                <button
                  type="button"
                  className={`c-pointer ${activeBtn("Workshops")}`}
                  onClick={handleFilterKeyChange("Workshops")}
                  data-filter=".Workshops"
                >
                  Workshops
                </button>
                <button
                  type="button"
                  className={`c-pointer ${activeBtn("Webinars")}`}
                  onClick={handleFilterKeyChange("Webinars")}
                  data-filter=".Webinars"
                >
                  Webinars
                </button>
                <button
                  type="button"
                  className={`c-pointer ${activeBtn("Recorded")}`}
                  onClick={handleFilterKeyChange("Recorded")}
                  data-filter=".Recorded"
                >
                  Past Webinars
                </button>
              </div>
            </div>
            <div className="grid row align-items-center">
              <div className="col-lg-4 col-md-6 col-sm-6 portfolio-img Training In-person">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="contacts">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-1.jpg"
                        />
                      </a>
                    </figure>
                    <h6>
                      <a href="contacts">
                      TIA Portal Software Development Part I 
                      <span>03/21 - 03/24/23 - 8:30 AM - 5:00 PM</span>
                      <span>In-Person Course in Portland, Oregon</span>
                      </a>
                    </h6>
                    <a href="contacts"><b>Join Waitlist</b><p>$3,000 </p></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 portfolio-img Training Online">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="contacts">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-2.jpg"
                        />
                      </a>
                    </figure>
                    <h6>
                      <a href="contacts">
                      TIA Portal Software Development Part II  
                      <span>04/25 - 04/28/23 - 8:00 AM - 9:00 AM</span>
                      <span>Online - California, Oregon & Washington</span>
                      </a>
                    </h6>
                    <a href="contacts"><b>Sign Up</b><p>$3,600 </p></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 portfolio-img Training In-person">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="contacts">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-3.jpg"
                        />
                      </a>
                    </figure>
                    <h6>
                      <a href="contacts">
                      TIA Portal Software Development Part II 
                      <span>05/23 - 05/26/23 - 8:30 AM - 5:00 PM</span>
                      <span>In-Person Course in Portland, Oregon</span>
                      </a>
                    </h6>
                    <a href="contacts"><b>Sign Up</b><p>$3,000 </p></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 portfolio-img Training Online">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="contacts">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-4.jpg"
                        />
                      </a>
                    </figure>
                    <h6>
                      <a href="contacts">
                      TIA Portal Software Development Part I
                      <span>06/13 - 06/16/23 - 8:30 AM - 5:00 PM</span>
                      <span>Online in California, Oregon & Washington</span>
                      </a>
                    </h6>
                    <a href="contacts"><b>Sign Up</b><p>$3,600 </p></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 portfolio-img Training In-person">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="contacts">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-5.jpg"
                        />
                      </a>
                    </figure>
                    <h6>
                      <a href="contacts">
                      TIA Portal Software Development Part I
                      <span>07/25 - 07/28/23 - 8:30 AM - 5:00 PM</span>
                      <span>In-Person Course in Irvine, California</span>
                      </a>
                    </h6>
                    <a href="contacts"><b>Sign Up</b><p>$3,000 </p></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 portfolio-img Workshops Online">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="contacts">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-6.jpg"
                        />
                      </a>
                    </figure>
                    <h6>
                      <a href="contacts">
                      Hands-On! TIA Portal (Siemens S7-1500)
                      <span>03/15/2023 - 9:00 AM - 12:00 PM</span>
                      <span>Online Event (Virtual)</span>
                      </a>
                    </h6>
                    <a href="contacts"><b>Sign Up</b><p>FREE </p></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 portfolio-img Workshops In-person">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="contacts">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-7.jpg"
                        />
                      </a>
                    </figure>
                    <h6>
                      <a href="contacts">
                      Intro to Distributed Drive Motor Systems for Conveyors
                      <span>Wed. 03/29/2023 - 9:00 AM - 1:00 PM</span>
                      <span>In-Person Event in Campbell</span>
                      </a>
                    </h6>
                    <a href="contacts"><b>Sign Up</b><p>FREE </p></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 portfolio-img Workshops Online">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="contacts">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-8.jpg"
                        />
                      </a>
                    </figure>
                    <h6>
                      <a href="contacts">
                      Learn the Similarities! Rockwell Studio 5000 & Siemens TIA Portal
                      <span>Wed. 04/12/2023 - 9:00 AM - 4:30 PM</span>
                      <span>Online Event in Seattle (Virtual)</span>
                      </a>
                    </h6>
                    <a href="contacts"><b>Sign Up</b><p>FREE </p></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 portfolio-img Workshops Online">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="contacts">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-9.jpg"
                        />
                      </a>
                    </figure>
                    <h6>
                      <a href="contacts">
                      Hands-On! TIA Portal <p></p>(Siemens S7-1500)
                      <span>Wed. 04/19/2023 - 9:00 AM - 12:00 PM</span>
                      <span>Online Event in Irvine (Virtual)</span>
                      </a>
                    </h6>
                    <a href="contacts"><b>Sign Up</b><p>FREE </p></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 portfolio-img Workshops In-person">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="contacts">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-10.jpg"
                        />
                      </a>
                    </figure>
                    <h6>
                      <a href="contacts">
                      Variable Frequency <p></p>Drives
                      <span>Thurs. 05/25/2023 - 9:00 AM - 1:00 PM</span>
                      <span>In-Person Event in Irvine Office</span>
                      </a>
                    </h6>
                    <a href="contacts"><b>Sign Up</b><p>FREE </p></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 portfolio-img Workshops Online">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="contacts">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-11.jpg"
                        />
                      </a>
                    </figure>
                    <h6>
                      <a href="contacts">
                      Hands-On! TIA Portal <p></p>(Siemens S7-1500)
                      <span>Wed. 06/28/2023 - 9:00 AM - 12:00 PM</span>
                      <span>Online Event in Virtual Office</span>
                      </a>
                    </h6>
                    <a href="contacts"><b>Sign Up</b><p>FREE </p></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 portfolio-img Webinars Online">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="contacts">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-12.jpg"
                        />
                      </a>
                    </figure>
                    <h6>
                      <a href="contacts">
                      Whats New in TIA Portal v18? <p></p>Virtual Webinar
                      <span>Thur. 04/06/2023 - 9:00 AM - 10:00 AM</span>
                      <span>Online Event</span>
                      </a>
                    </h6>
                    <a href="contacts"><b>Sign Up</b><p>FREE </p></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 portfolio-img Webinars Recorded">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="contacts">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-13.jpg"
                        />
                      </a>
                    </figure>
                    <h6>
                      <a href="contacts">
                      Disaster Preparedness & Business Continuity Planning
                      <span>Recorded on 07/2020</span>
                      <span>Watch On Demand</span>
                      </a>
                    </h6>
                    <a href="contacts"><b>Watch Now</b></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 portfolio-img Webinars Recorded">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="contacts">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-14.jpg"
                        />
                      </a>
                    </figure>
                    <h6>
                      <a href="contacts">
                      Industrial 5G: Opportunities & Challenges
                      <span>Recorded on 06/2020</span>
                      <span>Watch On Demand</span>
                      </a>
                    </h6>
                    <a href="contacts"><b>Watch Now</b></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 portfolio-img Webinars Recorded">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="contacts">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-14.jpg"
                        />
                      </a>
                    </figure>
                    <h6>
                      <a href="contacts">
                      Automated Quality Control: Keeping an Eye on Your Production!
                      <span>Recorded on 06/2020</span>
                      <span>Watch On Demand</span>
                      </a>
                    </h6>
                    <a href="contacts"><b>Watch Now</b></a>
                  </div>
                </div>
              </div>
             
            </div>
            <div>
            <a href="contacts">See More</a>
            <p></p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PortfolioGridIsotope;
