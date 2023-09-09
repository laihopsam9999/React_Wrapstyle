import { createUseStyles } from "react-jss";

export const styleLogin = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "space-around",
    padding: "2rem 4rem",
  },
  regexForm: {
    "& p": {
      fontSize: "0.8rem",
      color: "red",
    },
  },
  contentLeftLogin: {
    backgroundColor: "rgba(2, 13, 44, 0.952)",
    padding: "2rem 2rem",
    boxSizing: "border-box",
    width: "25rem",
    color: "white",
  },
  checkboxLogin: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& p": {
      cursor: "pointer",
      fontSize: "0.8rem",
    },
    "& label": {
      fontSize: "0.8rem",
    },
  },
  checkbox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonLogin: {},
  contentRightLogin: {
    "& h1": {
      fontSize: "3rem",
    },
  },
  lineLogin: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  line: {
    height: "1px",
    width: "100%",
    backgroundColor: "white",
  },
  socialIcon: {
    display: "flex",
    justifyContent: "center",

    "& i": {
      margin: "1rem",
      fontSize: "2rem",
      cursor: "pointer",
    },
  },
});
