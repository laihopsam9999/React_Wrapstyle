import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonHover } from "../../components/Button/Button";
import Carousel from "../../components/Carousel";
import Video from "../../components/Video";
import { loadDataCoursePage } from "../../redux/actions/courseAction";
import News from "../News";
import useHomeStyle from "./style";

import { getProduct } from "../../redux/actions/productAction";
import { TiTleCategory } from "../../components/Typography";
function Home() {
  const classes = useHomeStyle();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDataCoursePage(10));
    dispatch(getProduct());
  }, []);

  const productHomes = useSelector((state) => state.ProductReducer.product);
  const courseHomes = useSelector((state) => state.CourseReducer.course);

  return (
    <div className={classes.homeContainer}>
      <Video />
      <div className={classes.homeAcessory}>
        <h2>PHỤ KIỆN</h2>
        <Carousel courseHome={productHomes} />
        <ButtonHover>Đến cửa hàng</ButtonHover>
      </div>

      <div className={classes.homeCourse}>
        <h2>KHÓA HỌC</h2>
        <Carousel courseHome={courseHomes} />
        <ButtonHover>Đến cửa hàng</ButtonHover>
      </div>
      <div>
        <TiTleCategory>Tin tức</TiTleCategory>
        <News />
      </div>
    </div>
  );
}
export default Home;
