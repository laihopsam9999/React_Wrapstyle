import React, { useState, useEffect } from "react";
import useStyleProduct from "./style";
import { useDispatch, useSelector } from "react-redux";
import ButtonSearch from "./../../components/Form/InputSearch";
import { loadDataCourse } from "../../redux/actions/courseAction";
import Course from "../Course";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@material-ui/core";

function ProductMain(props) {
  const classes = useStyleProduct();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDataCourse());
  }, []);

  let courses = useSelector((state) => state.CourseReducer.course);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.productMainContainer}>
      <div className={classes.productController}>
        <div className={classes.productControllerLeft}>
          <Box sx={{ minWidth: 120, border: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Giá</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Từ cao đến thấp</MenuItem>
                <MenuItem value={20}>Từ thấp đến cao</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className={classes.productControllerRight}>
          <ButtonSearch />
        </div>
      </div>
      <Course course={courses} />
    </div>
  );
}

export default ProductMain;
