import BrandSlider from "@/src/components/BrandSlider";
import Layout from "@/src/layout/Layout";
const Team = () => {
  return (
    <Layout noHeaderBg pageName={"Team"}>
      <section
        className="splash-area-section"
        style={{ backgroundImage: "url(assets/img/banner_ContactUs.jpg)", opacity: "70.5%" }}
      >
        <div className="container">
          <div className="splash-area">
            <h2>
            Contact Us Anytime
            </h2>
            <a href="#"><p style={{color: "#fff", fontSize: "12px", textJustify: "center", maxWidth: "500px"}}>Whether you'd like more information about our products, technical support and training, or you're looking for the latest technology news, we look forward to hearing from you.</p></a>
          </div>
        </div>
      </section>
      <section className="gap2">
        <div className="container">
          <div className="row mt-5">
            <div className="col-xl-3 col-lg-4 col-sm-6" tyle={{alignItems:"center", justifyContent: "center"}}>
              <div className="team-member">
                <img className="w-100" alt="img" src="assets/img/contact-1.jpg" />
                <div className="team-member-text" style={{marginTop:"-15px"}}>
                  <a href="#">
                    <h6>Contact Sales</h6>
                  </a>
                  <p><a>Phone: 866.693.2636 <br />Fax: 707-473-3190</a></p>
                  <div className="">
                   <hr></hr>
                <a href="mailto:eandmquote@eandm.com" className="themebtu">
                  Email
                </a>
            </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member">
                <img className="w-100" alt="img" src="assets/img/contact-2.jpg" />
                <div className="team-member-text" style={{marginTop:"-15px"}}>
                  <a href="#">
                    <h6>Contact Support</h6>
                  </a>
                  <p><a>Phone: 866.693.2636 <br />Fax: 707-473-3190</a></p>
                  <div className="">
                   <hr></hr>
                <a href="contacts" className="themebtu">
                  Email
                </a>
            </div>
              </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member">
                <img className="w-100" alt="img" src="assets/img/contact-3.jpg" />
                <div className="team-member-text" style={{marginTop:"-15px"}}>
                  <a href="#">
                    <h6>Emergency Contact</h6>
                  </a>
                  <p><a>Phone: 866.693.2636 <br />Fax: 707-473-3190</a></p>
                  <div className="">
                   <hr></hr>
                <a href="contacts" className="themebtu">
                  Message
                </a>
            </div>
              </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member">
                <img className="w-100" alt="img" src="assets/img/contact-4.jpg" />
                <div className="team-member-text" style={{marginTop:"-15px"}}>
                  <a href="#">
                    <h6>Contact Training</h6>
                  </a>
                  <p><a>Phone: 866.693.2636 <br />Fax: 707-473-3190</a></p>
                  <div className="">
                   <hr></hr>
                <a href="mailto:training@eandm.com" className="themebtu">
                  Email
                </a>
            </div>
              </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member">
                <img className="w-100" alt="img" src="assets/img/contact-5.jpg" />
                <div className="team-member-text" style={{marginTop:"-15px"}}>
                  <a href="#">
                    <h6>Contact Consulting</h6>
                  </a>
                  <p><a>Phone: 866.693.2636 <br />Fax: 707-473-3190</a></p>
                  <div className="">
                   <hr></hr>
                <a href="mailto:consulting@eandm.com" className="themebtu">
                  Email
                </a>
            </div>
              </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member">
                <img className="w-100" alt="img" src="assets/img/contact-6.jpg" />
                <div className="team-member-text" style={{marginTop:"-15px"}}>
                  <a href="#">
                    <h6>General Comments</h6>
                  </a>
                  <p><a>Phone: 866.693.2636 <br />Fax: 707-473-3190</a></p>
                  <div className="">
                   <hr></hr>
                <a href="mailto:marketing@eandm.com" className="themebtu">
                  Email
                </a>
            </div>
              </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="join-our-team">
                <div>
                  <a href="#">
                    <h5>Join Our Team</h5>
                  </a>
                  <span>Careers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="brands-we-work gap">
        <div className="container">
          <h6>Industries We Work With.</h6>
          <BrandSlider />
        </div>
      </div>
    </Layout>
  );
};
export default Team;
