import { blog } from "../../../dummydata";
import style from "./style.module.css";

const Footer = () => {
  return (
    <>
      <section className={style.newletter}>
        <div className="container flexSB">
          <div className={style.left + " row"}>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>
              Cyber Academia will send online courses & CyberLive programs
              completely FREE and attractive PROMOTIONS to you.
            </span>
          </div>
          <div className={style.right + " row"}>
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className={"container padding " + style.container}>
          <div className={"box " + style.logo}>
            <h1>CYBER ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>
              CyberSoft will orient and provide learning paths for the career
              you pursue. Develop your competence and passion for programming
              inspiration.
            </p>

            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          <div className={style.link}>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className={style.link}>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className={style.items + " flexSB " + style.flexSB}>
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className={style.last}>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                2BIS Nguyễn Thị Minh Khai, Quận 1
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                0915 111 222
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                trucnht@cyber.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className={style.legal}>
        <p>Copyright ©2023 All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
