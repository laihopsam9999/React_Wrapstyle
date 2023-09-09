import { createUseStyles } from "react-jss";

const useStyleCart = createUseStyles({
  cart: {
    display: "flex",
    padding: "1rem",
  },

  // START CART RIGHT
  address: {
    // padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "0 0 40px #C0C0C0",
    padding: " 1rem",
    height: "26rem",
  },
  // END CART RIGHT
});

export default useStyleCart;
