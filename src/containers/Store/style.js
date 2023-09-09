import { createUseStyles } from "react-jss";

const useStyleProduct = createUseStyles({
  productMainContainer: {
    backgroundColor: "white",
  },
  productController: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "right",
    padding: "2rem",
  },
  productControllerLeft: {
    display: "flex",
    textAlign: "right",
    width: "15%",
  },

  // COURSE DETAIL
  detailCourse: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "2rem",
    width: "100%",
    height: "30rem",
  },
  detailCourseImage: {
    width: "50%",
    height: "100%",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      display: "block",
      objectFit: "cover",
    },
  },
  detailCourseContent: {
    lineHeight: "1.2rem",
  },
  detailCourseRight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "left",
    padding: "0rem 3rem",
    width: "50%",
    height: "100%",
  },
});
export default useStyleProduct;
