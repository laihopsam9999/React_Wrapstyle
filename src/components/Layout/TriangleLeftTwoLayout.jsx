import React from "react";
import createDetailStyles from "./style";
function TriangleLeftTwoLayout() {
  const classes = createDetailStyles();
  return (
    <div className={classes.containerTriangleLeftTwo}>
      <div className={classes.leftTwoImage}>
        <div className={classes.leftTwoImageAbove}>
          <img src="https://wrapstylevietnam.com/images/media/50.jpg" />
        </div>
        <div className={classes.leftTwoImageUnder}>
          <img src="https://wrapstylevietnam.com/images/media/50.jpg" />
        </div>
      </div>
      <div className={classes.leftTwoContent}>
        <h1>TOUR OF THE PRODUCTION LINES</h1>
        <p>
          From the historic entrance to the future: touring the production lines
          is a unique journey to witness the birth of the Lamborghini sports
          cars. From the V12 line where the Aventador’s engine and frame come
          together for the first time and on to the V10 line where the Huracán
          is born. The guided tours that start from Mudetec make the tour an
          unforgettable experience in search of the company’s most amazing
          places.
        </p>
      </div>
    </div>
  );
}
export default TriangleLeftTwoLayout;
