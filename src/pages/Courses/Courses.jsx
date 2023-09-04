import { useEffect, useState } from "react";
import courseAPI from "../../services/courseAPI";

const Courses = () => {
  const [courses, setCourses] = useState();

  async function getCourses() {
    try {
      const { items } = await courseAPI.getCourses(10);
      setCourses(items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <>
      <div>Course</div>
    </>
  );
};

export default Courses;
