import { createUseStyles } from "react-jss";

export const styleHiring = createUseStyles({
  hiringbanners: {},
  hiringbannersTitle: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    padding: "3rem 5rem",
    lineHeight: "3.4rem",
    textAlign: "center",

    "& h5": {
      margin: "0em",
      color: "black",
      fontSize: "3rem",
      fontWeight: "500",
    },
    "& p": {
      color: "gray",
      fontSize: "1.2rem",
    },
  },
  hiringpositionTitle: {
    textAlign: "center",
    "& h3": {
      fontWeight: "normal",
    },
  },
});
