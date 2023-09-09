import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/Button/Button";
import IncreaseButton from "../../components/Button/IncreaseButton";
import { loadDataCourseDetail } from "../../redux/actions/courseAction";
import useStyleProduct from "./style";

function Detail(props) {
  const classes = useStyleProduct();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDataCourseDetail(props.match.params.courseId));
  }, []);

  const courseDetail = useSelector((state) => state.CourseReducer.course);

  return (
    <div className={classes.detailCourse}>
      <div className={classes.detailCourseImage}>
        <img src={courseDetail[0].hinhAnh} alt={courseDetail[0].tenKhoaHoc} />
      </div>
      <div className={classes.detailCourseRight}>
        <div className={classes.detailCourseTitle}>
          <h1>
            {courseDetail[0].danhMucKhoaHoc.tenDanhMucKhoaHoc} <br />
            {courseDetail[0].tenKhoaHoc}
          </h1>
        </div>
        <div className={classes.detailCourseView}>
          <p>Lượt xem: {courseDetail[0].luotXem}</p>
        </div>
        <div className={classes.detailCourseContent}>
          <p> {courseDetail[0].moTa}</p>
        </div>
        <div className={classes.detailCourseContent}>
          <IncreaseButton />
        </div>
        <div className={classes.detailCourseButton}>
          <Button backgroundColor={"red"}>Đăng ký khóa học</Button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
