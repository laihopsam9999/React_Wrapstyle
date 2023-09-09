import {
  GET_COURSE,
  GET_COURSE_DETAIL,
  GET_COURSE_PAGE,
} from "../types/courseType";

const initialCourse = {
  course: [],
};

const CourseReducer = (state = initialCourse, action) => {
  switch (action.type) {
    case GET_COURSE_PAGE: {
      state.course = [...action.payload];

      return { ...state };
    }
    case GET_COURSE: {
      state.course = [...action.payload];
      return { ...state };
    }
    case GET_COURSE_DETAIL: {
      state.course = [action.payload];

      return { ...state };
    }

    default:
      break;
  }
  return { ...state };
};

export default CourseReducer;
