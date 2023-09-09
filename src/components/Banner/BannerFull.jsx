import React from "react";
import { HexagonButtonUnder } from "../Button/HexagonButtonNext";
import useStyleBanner from "./style";

export function BannerFull(props) {
  const classes = useStyleBanner();
  return (
    <div>
      <div className={classes.containerBanner}>
        <div className={classes.modelImage}>
          <img
            src={
              props.image != null
                ? props.image
                : "https://wrapstylevietnam.com/Uploads/images/WS-Porsche%20911%20Carrera%20Gulf%20Racing%20Livery19.jpg"
            }
          />
        </div>
        <div className={classes.modelContentFull}>
          <div className={classes.modelContentFullTitle}>
            <h4>WRAP STYLE</h4>
            <h1>{props.title != null ? props.title : "CAR WRAPPING"}</h1>
          </div>
          <div
            className={classes.modelContentButton}
            style={{ paddingLeft: "1rem" }}
          >
            <HexagonButtonUnder />
          </div>
        </div>
      </div>
    </div>
  );
}
