import { createUseStyles } from "react-jss";

const createDetailStyles = createUseStyles({
  containerDetail: {
    overflow: "hidden",
    "& h2": {
      fontSize: "2rem",
    },
    "& p": {
      fontSize: "1rem",
      lineHeight: "1.8rem",
    },
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  containerDetailHide: {
    display: "none",
  },
  detailHeaderOne: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1rem 0rem",
    // textAlign: "center",
    height: "25rem",
  },
  headerOneLeft: {
    width: "63%",
    height: "100%",
    padding: "4rem 4rem",
  },
  headerOneRight: {
    width: "37%",
    height: "100%",
    clipPath: " polygon(54% 0, 100% 0%, 100% 100%, 3% 100%)",
  },
  detailHeaderTwo: {
    position: "relative",
    margin: "1rem 0rem",
    width: "100%",
    height: "33.3rem",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  headerTwoLeft: {
    position: "absolute",
    width: "59%",
    height: "100%",
    top: "0px",
    left: "0px",
    zIndex: "2",
    clipPath: "polygon(0 12%, 100% 12%, 62% 100%, 0 100%)",
  },
  headerTwoRight: {
    position: "absolute",
    width: "59%",
    height: "100%",
    top: "0px",
    right: "0px",
    zIndex: "2",
    clipPath: "polygon(38% 0, 100% 0%, 100% 88%, 0 88%)",
  },
  detailHeaderThree: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1rem 0rem",
    height: "25rem",
  },
  headerThreeLeft: {
    width: "37%",
    height: "100%",
    clipPath: "polygon(0 0, 97.5% 0, 48% 100%, 0 100%)",
  },
  headerThreeRight: {
    padding: "4rem 0rem",
    width: "63%",
  },

  // -------------------------
  TriangleLeftLayout: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1rem 0rem",
    height: "25rem",
    "& p": {
      lineHeight: "1.8rem",
    },
  },
  TriangleLeftImage: {
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    clipPath: " polygon(0 0, 100% 0%, 63% 100%, 0% 100%)",
    width: "55%",
  },
  TriangleLeftContent: {
    padding: "4rem",
    width: "45%",
  },

  // -------------------------------
  containerTriangleRightTwo: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0.5rem 0rem",
    "& p": {
      lineHeight: "1.8rem",
    },
  },
  rightTwoImage: {
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    width: "55%",
  },
  rightTwoContent: {
    padding: "4rem",
    width: "45%",
  },
  rightTwoImageAbove: {
    clipPath: "polygon(60% 0, 100% 0%, 100% 100%, 30.5% 100%)",
  },
  rightTwoImageUnder: {
    clipPath: "polygon(100% 0, 100% 58%, 87% 100%, 0% 100%, 30% 0)",
    margin: "0.5rem 0rem",
  },
  // -------------------------------
  containerTriangleLeftTwo: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0.5rem 0rem",
    "& p": {
      lineHeight: "1.8rem",
    },
  },
  leftTwoImage: {
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    width: "55%",
  },
  leftTwoContent: {
    padding: "4rem",
    width: "100%",
    lineHeight: "1.8rem",
  },
  leftTwoImageAbove: {
    clipPath: "polygon(20% 0, 100% 0, 63.5% 100%, 0 100%, 0 44%)",
  },
  leftTwoImageUnder: {
    clipPath: "polygon(0 0, 63% 0, 28% 100%, 0% 100%)",
    margin: "0.5rem 0rem",
  },
});

export default createDetailStyles;
