import React from "react";
import BlockCenterLayout from "./BlockCenterLayout";
import createDetailStyles from "./style";

function BlockLayout(props) {
  const classes = createDetailStyles();
  return (
    <div style={{ display: props.status === null ? "none" : "block" }}>
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
      <div className={classes.detailHeaderTwo}>
        <BlockCenterLayout
          image1={props.images.image1}
          image2={props.images.image2}
        />
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
export default BlockLayout;
