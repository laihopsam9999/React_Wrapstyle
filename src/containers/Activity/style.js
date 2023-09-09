import { createUseStyles } from "react-jss";

const styleActivity = createUseStyles({
  containerActivity: {
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    "& h2": {
      margin: "0rem",
      fontSize: "2rem",
    },
    "& p": {
      fontSize: "1.2rem",
      fontWeight: "none",
    },
  },
  hondaRacingEvent: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem 4rem",
  },
  hondaContent: {
    padding: "0rem 0rem 0rem 2rem",
    width: "65%",
  },
  longKingEvent: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem 4rem",
  },
  longKingContent: {
    padding: "0rem 2rem 0rem 0rem",
    width: "65%",
  },
});

export default styleActivity;
