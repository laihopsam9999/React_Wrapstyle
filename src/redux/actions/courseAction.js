import { createAction } from ".";
import { courseService } from "../../Services";
import {
  GET_COURSE,
  GET_COURSE_DETAIL,
  GET_COURSE_PAGE,
} from "../types/courseType";

// async action

export const loadDataCourse = () => {
  return (dispatch) => {
    courseService
      .getCourse()
      .then((res) => {
        dispatch(createAction(GET_COURSE, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loadDataCourseDetail = (id) => {
  return (dispatch) => {
    courseService
      .getCourseDetail(id)
      .then((res) => {
        console.log(res.data);
        dispatch(createAction(GET_COURSE_DETAIL, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loadDataCoursePage = (numberPage) => {
  return (dispatch) => {
    courseService
      .getCoursePerPage(numberPage)
      .then((res) => {
        dispatch(createAction(GET_COURSE_PAGE, res.data.items));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
