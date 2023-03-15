import BrandSlider from "@/src/components/BrandSlider";
import Layout from "@/src/layout/Layout";
import VideoPopup from "@/src/components/VideoPopup";
import { latestswiper, partnerswiper, projectsswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Index = () => {
  return (
    <Layout noHeaderBg pageName={"Home"}>
      <section
        className="hero-section-one"
        style={{ backgroundImage: "url(assets/img/hero-img.jpg)" }}
      >
        <div className="container">
          <div className="heading-boder">
            <h2>
              <span>Already</span>
              Using Festo?{" "}
            </h2>
            <p>EandM is Officially a Festo Distributor!</p>
            <a href="services" className="themebtu full">
              Learn More
            </a>
          </div>
        </div>
      </section>
      <div>
        <div className="container">
          <div className="small-services-color" style={{backgroundColor: "#f2f2f2"}}>
            <div className="row">
              <div className="col-xl-4 col-lg-6" >
                <div className="small-services" >
                  <svg
                    enableBackground="new 0 0 32 32"
                    height={512}
                    viewBox="0 0 32 32"
                    width={512}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="m30.197 28.331-7.843-7.555c1.802-2.057 2.789-4.634 2.789-7.361 0-3.058-1.234-5.931-3.475-8.089-4.603-4.435-12.092-4.434-16.693 0-2.241 2.158-3.475 5.031-3.475 8.089s1.234 5.931 3.475 8.09c2.301 2.218 5.324 3.326 8.347 3.325 2.725 0 5.445-.91 7.642-2.712l7.892 7.602c.888.883 2.257-.532 1.341-1.389zm-23.88-8.216c-1.86-1.792-2.884-4.171-2.884-6.7 0-2.528 1.024-4.908 2.884-6.699 1.931-1.861 4.468-2.791 7.005-2.791s5.074.93 7.005 2.791c1.86 1.792 2.884 4.171 2.884 6.699 0 2.529-1.024 4.908-2.884 6.7-3.863 3.721-10.148 3.721-14.01 0z" />
                      <path d="m18.154 12.449h-3.866v-3.862c0-.533-.433-.965-.966-.965-.534 0-.966.432-.966.965v3.862h-3.866c-.534 0-.966.432-.966.965s.432.966.966.966h3.866v3.862c0 .533.433.965.966.965.534 0 .966-.432.966-.965v-3.862h3.866c.534 0 .966-.432.966-.965s-.433-.966-.966-.966z" />
                    </g>
                  </svg>
                  <div>
                    <a href="services">TIA Portal V17</a>
                    <span>Learn about the hardware and software innovations with Siemens' SITRAIN self-study training!</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="small-services">
                  <svg
                    enableBackground="new 0 0 418.945 418.945"
                    height={512}
                    viewBox="0 0 418.945 418.945"
                    width={512}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="m9.213 397.61h401.004c4.849 0 8.728-3.879 8.728-8.728s-3.879-8.728-8.728-8.728h-25.214v-233.232c0-4.849-3.879-8.243-8.728-8.728h-55.762c-4.849 0-8.728 3.879-8.728 8.728v233.717h-16.486v-188.623c0-4.849-3.879-8.728-8.728-8.728h-56.247c-4.849 0-8.728 3.879-8.728 8.728v188.622h-16.486v-141.102c0-4.849-3.879-8.728-8.728-8.728h-56.247c-4.849 0-8.728 3.879-8.728 8.728v141.103h-16.486v-90.19c0-4.849-3.879-8.728-8.728-8.728h-56.249c-4.849 0-8.728 3.879-8.728 8.728v90.19h-23.76v-350.576c0-4.849-3.879-8.728-8.728-8.728s-8.728 3.879-8.728 8.728v358.819c.97 4.849 4.849 8.728 9.213 8.728zm319.542-241.96h39.761v224.989h-39.761zm-90.189 44.61h39.761v180.379h-39.761zm-90.19 48.004h39.761v132.375h-39.761zm-89.704 50.913h39.761v81.462h-39.761z" />
                      <path d="m136.739 172.136 110.555-68.369-3.879 16.486c-.97 4.364 1.455 9.213 6.304 10.183 4.364.97 9.213-1.455 10.183-6.304l9.213-36.367c.97-4.849-.485-8.243-6.304-10.183l-36.367-9.213c-4.364-.97-9.213 1.455-10.183 6.304-.97 4.364 1.455 9.213 6.304 10.183l16.971 4.364-111.525 68.369c-3.879 2.424-5.334 7.758-2.909 11.637 3.394 4.85 8.728 4.85 11.637 2.91z" />
                    </g>
                  </svg>
                  <div>
                    <a href="services">One Stop Shop for Robotics!</a>
                    <span>See how you can support all you robotics applications!</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="small-services lest mb-0">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <path
                      d="M444.709,239.616v227.621H67.877V239.616H32.768v245.175c0,9.696,7.858,17.554,17.554,17.554h411.941
            c9.696,0,17.554-7.858,17.554-17.554V239.616H444.709z"
                    />
                    <path
                      d="M494.446,107.953H17.554C7.858,107.953,0,115.811,0,125.507v114.688c0,9.696,7.858,17.554,17.554,17.554h476.891
            c9.696,0,17.554-7.853,17.554-17.554V125.507C512,115.811,504.142,107.953,494.446,107.953z M476.891,222.647H35.109v-79.579
            h441.783V222.647z"
                    />
                    <path
                      d="M273.273,121.066c-1.194-4.552-30.152-111.411-114.7-111.411c-36.782,0-66.706,29.924-66.706,66.706
            c0,36.782,29.661,66.706,66.121,66.706h98.304c5.436,0,10.574-2.522,13.897-6.829S274.648,126.326,273.273,121.066z
             M157.989,107.959c-17.39,0-31.013-13.88-31.013-31.598c0-17.127,14.471-31.598,31.598-31.598
            c38.52,0,61.586,37.947,72.675,63.195H157.989z"
                    />
                    <path
                      d="M354.011,9.655c-84.547,0-113.506,106.859-114.7,111.411c-1.381,5.26-0.24,10.866,3.084,15.173
            c3.324,4.307,8.455,6.829,13.897,6.829h98.304c36.46,0,66.121-29.924,66.121-66.706C420.718,39.579,390.794,9.655,354.011,9.655z
             M354.597,107.959h-73.33c11.007-25.249,34.003-63.195,72.751-63.195c17.127,0,31.598,14.471,31.598,31.598
            C385.615,94.079,371.993,107.959,354.597,107.959z"
                    />
                    <rect
                      x="238.738"
                      y="125.513"
                      width="35.109"
                      height="359.278"
                    />
                  </svg>
                  <div style={{paddingRight: "10px"}}>
                    <a href="services">Tips to Identify Keyway Connectors</a>
                    <span>Learn about the common keyways available for the M12 connector system.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brands-we-work one gap">
        <div className="container">
            <h6>Industries We Work With</h6>
        <img alt="img" src="assets/img/brand-5.png" />
     
        </div>
      </div>
      <section className="gap no-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="welcome">
                <img alt="img" src="assets/img/welcome-1.jpg" />
                <img
                  alt="img"
                  className="img-welcome"
                  src="assets/img/welcome-2.jpg"
                />
                <img alt="dots" className="dots" src="assets/img/dots.png" />
              </div>
            </div>
            <div className="col-xl-6 pl-75">
              <div className="heading design-enjoy">
                <h6>BEST IN CLASS AUTOMATION.</h6>
                <h2> Why Choose EandM?</h2>
               
              </div>
              <div className="welcome-text">
                <p className="pt-4 pb-5">
                Its simple. EandM, founded in 1955, 
                has been the automation leader on the west coast for many years.
                We're a family-owned company and a true solutions provider. 
                <br></br>
                For years, engineers have come to us with their problems and they 
                know we can fix them. We represent the best automation companies in 
                the world, and when you buy from EandM, you get the best support in the world.
                <br></br>
                We offer training classes, workshops, and a FREE local tech support team based on 
                the west coast. No waiting, no voice mail, no communication confusion - accurate 
                answers now is our commitment to you.<br></br>
                Watch this video to see how EandM helped one of its customers beat deadlines, adapt quickly to market demands and reduce downtime.
                </p>
                <a href="services" className="themebtu full">
                  More Services
                </a>
              </div>
            </div>
          </div>
        </div>
        <img className="w-100" alt="line" src="assets/img/line.jpg" />
      </section>
      <section className="how-it-works gap no-top">
        <div className="container">
          <div className="heading">
            <h2>Stay Current</h2>
            <span>Stay on the leading edge of industrial operations with EandM's products, local training classes, free workshops, and digital learning opportunities.</span>
          </div>
          <div className="row pt-4">
            <div className="col-xl-4 col-lg-6">
            <a href="portfolio-grid"> 
              <div className="strategic">
                <h2>PRODUCTS</h2>
                <div className="pl-80">
                  <h4>Products: Catch the Wave</h4>
                  <p>
                  Get the broadest spectrum of relevant industrial software, industrial hardware, and robot solutions to maximize your company's operational success.
                  </p>
                </div>
              </div>
              </a>
            </div>
            <div className="col-xl-4 col-lg-6">
            <a href="portfolio-grid"> 
              <div className="strategic">
                <h2>TRAINING</h2>
                <div className="pl-80">
                  <h4>Training: Deep Dive</h4>
                  <p>
                  We've delivered certified trainings for over 20 years! All the equipment is provided and custom courses are available.
                  </p>
                </div>
              </div>
              </a>
            </div>
            <div className="col-xl-4 col-lg-6">
            <a href="portfolio-grid"> 
              <div className="strategic">
                <h2>WORKSHOPS</h2>
                <div className="pl-80">
                  <h4>Workshops: Get Your Feet Wet</h4>
                  <p>
                  Don't fall behind at work! Stay updated on the latest automation products by attending our FREE half-day workshops.
                  </p>
                </div>
              </div>
              </a>
            </div>
            <div className="col-xl-4 col-lg-6">
            <a href="portfolio-grid"> 
              <div className="strategic">
                <h2>LEARNING</h2>
                <div className="pl-80">               
                  <h4>Digital Learining: Soak it in</h4>
                  <p>
                  View our library of recorded webinars, white papers, and case studies to learn more about the latest automation products.
                  </p>
                </div>
              </div>
              </a>
            </div>
          </div>        
        </div>
      </section>
      <section className="project gap">
        <div className="container">
          <div className="heading-boder">
            <h2>
              EandM
              <br />
              Learning<span>Library</span>
            </h2>
            <p>Access our support and training resources</p>
          </div>
          <Swiper
            {...projectsswiper}
            className="swiper-container projectsswiper"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="project-data">               
                <img className="w-100" alt="img" src="assets/img/video1.jpg" />
                <a
                  data-fancybox
                  href="https://cache.industry.siemens.com/dl/dl-media/758/109799758/att_1075549/v2/109799758_V17_Highlights_web/start.htm#!/en"
                >
                </a>
                  <div className="project-text">
                    <h5>What's New with TIA Portal V17?</h5>
                    <p>Just looking for the highlights on what’s new with TIA Portal V17?
                        Learn about the hardware and software innovations with Siemens' SITRAIN self-study training! 
                        This online training will highlight the new functions of TIA Portal V17 including the new library
                         handling latest industrial security features and innovations of the WinCC Unified System.</p>
                    <a href="portfolio-single-v1">View Project</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="project-data video-img">               
                <img className="w-100" alt="img" src="assets/img/video2.jpg" />
                <VideoPopup 
                  videoURL="https://www.youtube.com/embed/d3w590ksN6c"
                  videoID="d3w590ksN6c"
                />
                <a
                  data-fancybox
                  id="d3w590ksN6c"
                  href="https://www.youtube.com/embed/d3w590ksN6c"
                >
                  <i className="fa-solid fa-play" />
                </a>
                  <div className="project-text">
                    <h5>Building a Conveyor?</h5>
                    <p>Don't miss any important components with the Robotunits request forms!
                        These helpful step-by-step guides allow you to specify measurements, 
                        mounting, motion requirements, belt properties and more. Download 
                        your request form today.</p>
                        <a href='https://www.eandm.com/Products/Robotunits/RobotunitsForms.aspx'>Download Form</a>
                      </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="project-data video-img">               
                <img className="w-100" alt="img" src="assets/img/video3.jpg" />
                <VideoPopup 
                  videoURL="https://www.youtube.com/embed/OvMVFUf_ek4"
                  videoID="OvMVFUf_ek4"
                />
                <a
                  data-fancybox
                  id="OvMVFUf_ek4"
                  href="https://www.youtube.com/embed/OvMVFUf_ek4"
                >
                  <i className="fa-solid fa-play" />
                </a>
                  <div className="project-text">
                    <h5>Quick Tips: Easily Identify Your Keyway Connectors</h5>
                    <p>Having trouble identifying which keyways connect to your sensors? Wish you could easily differentiate them across your various devices?
                      Learn about the common keyways available for the M12 connector system, including physical features and which ones are recommended for your applications.</p>
                        <a href='https://www.eandm.com/media/eandm/pdfs/KeywayInfographic.pdf'>Download Infographic</a>
                      </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="project-data video-img">               
                <img className="w-100" alt="img" src="assets/img/video4.jpg" />
                <VideoPopup 
                  videoURL="https://www.youtube.com/embed/FLKRqocWFAw"
                  videoID="FLKRqocWFAw"
                />
                <a
                  data-fancybox
                  id='FLKRqocWFAw'
                  href="https://www.youtube.com/embed/FLKRqocWFAw"
                >
                  <i className="fa-solid fa-play" />
               
                  <div className="project-text">
                    <h5>EandM is Your One Stop Shop for Robotics!</h5>
                    <p>Did you know that EandM specializes in Robotics automation parts in California, Oregon and Washington?
                        We offer everything you need from start-to-finish including mounting options, robot arms, end effectors, 
                        grippers, and safety components. Watch this video to see how you can support all you robotics applications!</p>
                        <a href='https://www.eandm.com/Products/Robotunits/RobotunitsForms.aspx'>Download Form</a>
                      </div>
                      </a>
                </div>
            
              </SwiperSlide>
            </div>
            <div className="swiper-button-next">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 476.213 476.213"
                style={{ enableBackground: "new 0 0 476.213 476.213" }}
                xmlSpace="preserve"
              >
                <polygon
                  points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
                />
              </svg>
            </div>
            <div className="swiper-button-prev">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 476.213 476.213"
                style={{ enableBackground: "new 0 0 476.213 476.213" }}
                xmlSpace="preserve"
              >
                <polygon
                  points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
                />
              </svg>
            </div>
          </Swiper>
          <div className="btugap">
            <a href="portfolio-grid" className="themebtu">
              View More
            </a>
          </div>
          <div className="tp-hero__shapes">
            <div className="style-shapes-1"></div>
            <div className="style-shapes-2">
              <img alt="shap-4" src="assets/img/shap-4.png" />
            </div>
            <div className="style-shapes-3"></div>
            <div className="style-shapes-4">
              <img alt="dots1" src="assets/img/dots1.png" />
            </div>
          </div>
        </div>
      </section>
     
      <section
        className="gap no-bottom video-section"
        style={{ backgroundColor: "#edf3f5" }}
      >
        <div className="container">
          <div className="heading-boder two">
            <h2>
              Let’s Start On Your Automation<br /> <span>Case Together</span>
            </h2>
            <hr></hr>
          </div>
          
        </div>
        <div className="get-in-touch">
          <div className="container">
            <div className="">
           
                <div className="row" style={{marginTop: "-15%", width: "100%", marginLeft: "1%"}}>
                  <div className="">
                    <div className="heading">
                      <h6>Subscribe to our Newsletter</h6>
                      <h2>Stay up to date on Industry News</h2>
                      <p>
                        <hr style={{maxWidth: "800px"}}></hr>
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6"  style={{width: "800px"}}>
                    <form className="touch">
                      <div className="row">
                        <div className="col-lg-4 col-md-6"  style={{height: "50px", padding: "10px"}}>
                          <input
                            type="text"
                            name="name"
                            placeholder="Your name *"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6"  style={{height: "50px", padding: "10px"}}>
                          <input
                            type="text"
                            name="email"
                            placeholder="Email address *"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6" style={{height: "50px", padding: "10px"}}>
                          <input
                            type="number"
                            name="phone"
                            placeholder="Your Phone (optional)"
                          />
                        </div>
                        <div className="col-xl-12">
                          <textarea
                            placeholder="Your message *"
                            defaultValue={""}
                          />
                        </div>
                        <div className="btugap"   style={{height: "50px", margin: "10px"}}>
                          <a href="#" className="themebtu full">
                            Send Message
                          </a>
                        </div>
                      </div>
                    </form>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </Layout>
  );
};
export default Index;
