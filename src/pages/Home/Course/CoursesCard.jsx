import style from "./courses.module.css";
import { coursesCard } from "../../../dummydata";
import { useEffect, useState } from "react";
import courseAPI from "../../../services/courseAPI";
import { NavLink } from "react-router-dom";

const CoursesCard = () => {
  const [courses, setCourse] = useState([]);

  async function getCourses() {
    try {
      const { items } = await courseAPI.getCourses(6);

      setCourse(items);
    } catch (error) {
      console.log(error);
    }
  }

  function handleErrorImage(e) {
    e.target.src = "https://picsum.photos/id/1/80/80";
  }

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <section className={style.coursesCard}>
        <div className="container grid2">
          {courses.map((val) => (
            <div className={style.items}>
              <div className="content flex">
                <div className="left">
                  <div className={style.img}>
                    <img
                      src={val.hinhAnh}
                      alt="img"
                      onError={handleErrorImage}
                    />
                  </div>
                </div>
                <div className={style.text}>
                  <h1>{val.tenKhoaHoc.substring(0, 10)}...</h1>
                  <div className={style.rate}>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <label htmlFor="">(5.0)</label>
                  </div>
                  <div className={style.details}>
                    <div className={style.box}>
                      <div className={style.dimg}>
                        <img src="./images/back.webp" alt="image" />
                      </div>
                      <div className="para">
                        <h4>{val.nguoiTao.hoTen}</h4>
                      </div>
                    </div>
                    <span>50 lectures (190 hrs)</span>
                  </div>
                </div>
              </div>
              <div className={style.price}>
                <h3>$100 All Course / $15 per month</h3>
              </div>
              <NavLink className="outline-btn" to={`/courses/${val.maKhoaHoc}`}>
                Detail
              </NavLink>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
