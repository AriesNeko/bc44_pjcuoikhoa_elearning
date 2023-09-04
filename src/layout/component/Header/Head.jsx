import style from "./style.module.css";

const Head = () => {
  return (
    <>
      <section className={style.head}>
        <div className="container flexSB">
          <div className={style.logo}>
            <h1>CYBER ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className="social">
            <i className={"fab fa-facebook-f icon " + style.icon}></i>
            <i className={"fab fa-instagram icon " + style.icon}></i>
            <i className={"fab fa-twitter icon " + style.icon}></i>
            <i className={"fab fa-youtube icon " + style.icon}></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
