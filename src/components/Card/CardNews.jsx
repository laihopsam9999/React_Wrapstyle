import React from "react";
import { ButtonHover } from "../Button/Button";
import { styleNews } from "./style";

function CardNews(props) {
  const classes = styleNews();
  return (
    <div className={classes.cardNew}>
      <div className={classes.imageNew}>
        <img
          src={
            props.imageProduct != null
              ? props.hinhAnh
              : "https://wrapstylevietnam.com/Uploads/images/WS-Porsche%20911%20Carrera%20Bespoke17.jpg"
          }
          alt
        />
      </div>
      <div className={classes.contentNew}>
        <div className={classes.contentTimeNew}>
          <p>
            {props.productCreatingDate != null
              ? props.productCreatingDate
              : "17 JUNE 2021"}
          </p>
        </div>
        <div className={classes.contentTitleNew}>
          <h1>
            {props.productName != null
              ? props.productName
              : "WRAPSTYLE HCM LỘT XÁC PORSCHE 911 CARRERA VỚI BỘ CÁNH ĐƯỢC CÁ NHÂN HOÁ"}
          </h1>
        </div>
        <div className={classes.contentButtonNew}>
          <ButtonHover>Xem chi tiết</ButtonHover>
        </div>
      </div>
    </div>
  );
}
export default CardNews;
