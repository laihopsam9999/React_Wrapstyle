import React from "react";
import useStyleProduct from "./style";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

function Product(props) {
  const classes = useStyleProduct();
  return (
    <div className={classes.product}>
      <div className={classes.product__image}>
        <img src={props.course.hinhAnh} alt={props.course.tenKhoaHoc} srcSet />
      </div>
      <div className={classes.productTitle}>
        <h3>{props.course.tenKhoaHoc}</h3>
      </div>
      <div className={classes.productContent}>
        <p>{props.course.moTa}</p>
      </div>
      <div className={classes.productContentPrice}>
        <p>
          Lượt xem:{" "}
          <span>
            {props.course.luotXem !== " " ? props.course.luotXem : " "}
          </span>
        </p>
      </div>
      <div className={classes.productContentButton}>
        <Link to={`/Detail/${props.course.maKhoaHoc}`}>
          <Button backgroundColor={"#FF7800"}>Xem chi tiết</Button>
        </Link>
      </div>
    </div>
  );
}
export default Product;
