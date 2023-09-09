import React from "react";
import CardNews from "../../components/Card/CardNews";
import BigNewCard from "../../components/Card/BigNewCard";
import Link from "../../components/Typography/Link";
import { useStyleMainNews } from "./style";
import { ButtonHover } from "../../components/Button/Button";

function News() {
  const classes = useStyleMainNews();
  return (
    <div className={classes.MainNews}>
      {/* <Link />  */}
      {/* <h1 className={classes.MainTitleNews}>TIN TỨC</h1> */}
      <div className={classes.MainContentNews}>
        <BigNewCard
          image={
            "https://wrapstylevietnam.com/Uploads/images/WS-Bo%CC%A3%CC%82%20%C4%91o%CC%82i%20xe%20the%CC%82%CC%89%20thao%20va%CC%80%20sie%CC%82u%20xe%20%C4%91a%CC%A3%CC%86c%20bie%CC%A3%CC%82t%20%C4%91e%CC%82%CC%81n%20tu%CC%9B%CC%80%20nu%CC%9Bo%CC%9B%CC%81c%20Y%CC%81%20xua%CC%82%CC%81t%20hie%CC%A3%CC%82n%20ta%CC%A3i%20WrapStyle%20HCM1.jpg"
          }
        />
        <CardNews />
        <CardNews />
        <CardNews />
      </div>
      <div className={classes.buttonNews}>
        <ButtonHover>Xem Thêm </ButtonHover>
      </div>
    </div>
  );
}

export default News;
