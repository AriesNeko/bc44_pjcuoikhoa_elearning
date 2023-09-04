import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import courseAPI from "../../services/courseAPI";

const DetailCourse = () => {
  const { maKhoaHoc } = useParams();
  const [detailCourse, setDetailCourse] = useState();

  async function getDetailCourse() {
    try {
      const data = await courseAPI.getDetailCourse(maKhoaHoc);
      setDetailCourse(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDetailCourse();
  }, []);

  return <div>Detail Course</div>;
};

export default DetailCourse;
