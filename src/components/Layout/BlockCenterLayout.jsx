import React from "react";
import createDetailStyles from "./style";
function BlockCenterLayout(props) {
  const classes = createDetailStyles();
  return (
    <div>
      <div className={classes.detailHeaderTwo}>
        <div className={classes.headerTwoLeft}>
          <img src={props.image1} />
        </div>
        <div className={classes.headerTwoRight}>
          <img src={props.image2} />
        </div>
      </div>
    </div>
  );
}
export default BlockCenterLayout;
