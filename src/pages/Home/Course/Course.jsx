import React from "react";
import CoursesCard from "./CoursesCard";
import Heading from "../../../layout/component/Heading";

const Course = () => {
  return (
    <>
      <Heading
        subtitle="our courses"
        title="explore our popular online courses"
      />
      <CoursesCard />
    </>
  );
};

export default Course;
