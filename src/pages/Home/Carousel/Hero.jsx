import React from "react";
import Heading from "../../../layout/component/Heading";
import style from "./style.module.css";

const Hero = () => {
  return (
    <>
      <section className={style.hero}>
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO CYBER ACADEMIA"
              title="Best Online Web Development & Programming Courses"
            />
            <p>Become a professional programming expert at Cyber Academia.</p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
