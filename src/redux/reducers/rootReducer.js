import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import CourseReducer from "./CourseReducer";
import ProductReducer from "./ProductReducer";
import UserReducer from "./UserReducer";

// root Reducer là một cái reducer lớn quản lý các reducer con
export const rootReducer = combineReducers({
  CourseReducer,
  CartReducer,
  ProductReducer,
  UserReducer,
});
