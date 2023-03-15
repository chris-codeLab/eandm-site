const Footer = () => {
  return (
    <footer className="gap no-bottom" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-logo">
              <a href="index">
                <img alt="img" style={{maxWidth: "80px"}} src="assets/img/logo.png" />
              </a>
            <hr></hr>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="links">
              <h6 style={{color: "#222222"}}>Quick links</h6>
              <ul>
                <li>
                  <a href="about">About us</a>
                </li>
                <li>
                  <a href="services">Services</a>
                </li>
                <li>
                  <a href="team">team</a>
                </li>
                <li>
                  <a href="blog-grid">News</a>
                </li>
                <li className="pb-0">
                  <a href="contacts">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="latest-news">
            <h6 style={{color: "#222222"}}>Additional links</h6>
              <ul>
                <li>
                  <p style={{fontSize: "12px", color: "#222222"}}>
                    Best in class Automations and Customer Support!{" "}
                  </p>
                </li>
                <li className="pt-4">
                  <p style={{fontSize: "12px", color: "#222222"}}>2023 EandM. All Rights Reserved.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="latest-news">
            <h6 style={{color: "#222222"}}>Subscribe</h6>
              <p>
                Join our Mailing List to stay up to date on the latest
                industry news and trends.
              </p>
              <form>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Email Address"
                />
                <button>go</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 EandM Demo - All Rights Reserved | Developed by Chris Mason</p>
          <ul>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-m" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
