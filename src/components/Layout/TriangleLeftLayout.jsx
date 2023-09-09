import React from "react";
import createDetailStyles from "./style";

function TriangleLeftLayout(props) {
  const classes = createDetailStyles();
  console.log(props.image);
  return (
    <div className={classes.TriangleLeftLayout}>
      <div className={classes.TriangleLeftImage}>
        <img src={props.image} />
      </div>
      <div className={classes.TriangleLeftContent}>
        <h1>{props.content.title}</h1>
        <p>{props.content.content}</p>
      </div>
    </div>
  );
}
export default TriangleLeftLayout;
