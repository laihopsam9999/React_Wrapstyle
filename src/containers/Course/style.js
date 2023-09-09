import { createUseStyles } from "react-jss";

const useStyleCourse = createUseStyles({
  courseContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    overflow: "hidden",
    boxSizing: "borderBox",
    backgroundColor: "white",
    padding: "0rem 1rem",
  },
});

export default useStyleCourse;
