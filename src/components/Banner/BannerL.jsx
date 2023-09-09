import React from "react";
import useStyleBanner from "./style";

function BannerL() {
  const classes = useStyleBanner();
  return (
    <div className={classes.containerBannerL}>
      <div className={classes.BannerImage}>
        <img src="https://wrapstylevietnam.com/images/media/50.jpg" />
      </div>
      <div className={classes.BannerContent}>
        <p>sasm</p>
      </div>
    </div>
  );
}

export default BannerL;
