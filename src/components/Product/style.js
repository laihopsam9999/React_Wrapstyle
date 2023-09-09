import { createUseStyles } from "react-jss";

const useStyleProduct = createUseStyles({
  productContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    overflow: "hidden",
    boxSizing: "borderBox",
    backgroundColor: "white",
    padding: "0rem 1rem",
  },

  product: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#F7F7F7",
    textAlign: "left",
    // margin: "1rem 0.8rem",
    // borderRadius: "0.8rem 0.8rem",
    overflow: "hidden",
    height: "28rem",
    width: "100%",
  },

  product__image: {
    height: "12rem",
    padding: "0rem",
    "& img": {
      width: "100%",
      height: "100%",
      display: "block",
      objectFit: "cover",
    },
  },
  productTitle: {
    padding: "0rem 1rem",
    lineHeight: "1.5rem",
    "& h3": {
      fontSize: "1rem",
      margin: "1.3rem 0rem !important",
      // fontWeight: "normal",
    },
  },
  productContent: {
    padding: "0rem 1rem",
    overflow: "hidden",
    width: "90%",
    display: "-webkit-box",
    webkitLineClamp: "2",
    webkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
  },
  productContentPrice: {
    padding: "0rem 1rem",
    "& p": {
      fontSize: "1rem",
      margin: "0rem 0rem 0rem 0rem !important",
    },
  },
  productContentButton: {
    padding: "0.75rem 1rem",
  },
});
export default useStyleProduct;
