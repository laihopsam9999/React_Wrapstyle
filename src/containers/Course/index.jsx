import React from "react";
import Product from "./../../components/Product";
import useStyleCourse from "./style";
function Course(props) {
  const classes = useStyleCourse();

  return (
    <div className={classes.courseContainer}>
      {props.course.map((course) => (
        <Product course={course} key={course.id} />
      ))}
    </div>
  );
}

export default Course;
