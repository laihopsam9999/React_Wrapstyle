import { createUseStyles } from "react-jss";

const useStyleBooking = createUseStyles({
  BookingFunction: {
    display: "flex",
    padding: "1rem",
  },
  BookingForm: {
    padding: "2rem",
    width: "27rem",
    backgroundColor: "#bbdefb",
    "& input": {
      backgroundColor: "transparent",
    },
    "& h3": {
      fontSize: "2rem",
      margin: "0rem",
    },
  },
  BookingFormChild: {
    padding: "1rem 0rem",
  },
});

export default useStyleBooking;
