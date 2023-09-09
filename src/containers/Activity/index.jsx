import React from "react";
import Banner from "../../components/Banner";

import styleActivity from "./style";

function Activity() {
  const classes = styleActivity();
  return (
    <div className={classes.containerActivity}>
      <Banner
        imageBanner={
          "https://tapchisieuxe.com/wp-content/uploads/2021/04/VietRally-2021-ket-thuc-Nhung-cai-NHAT-ma-chua-hanh-trinh-sieu-xe-nao-tao-ra-0.jpg"
        }
        titleBanner={"TOURNAMENTS"}
      />
      <div className={classes.hondaRacingEvent}>
        <div className={classes.hondaImage}>
          <img
            src={
              "https://img.docbao.vn/images/uploads/2021/04/17/autopro-vietrally2-16186356598041829546214-16186357453251390653515.png"
            }
          />
        </div>
        <div className={classes.hondaContent}>
          <h2>VIETNAM HONDA RACING</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            quasi at. Aspernatur dignissimos sunt voluptates provident laborum
            inventore excepturi atque culpa, eum earum distinctio explicabo
            magnam veritatis ab totam quasi!
          </p>
        </div>
      </div>
      <div className={classes.longKingEvent}>
        <div className={classes.longKingContent}>
          <h2>LONG KING RACING</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            quasi at. Aspernatur dignissimos sunt voluptates provident laborum
            inventore excepturi atque culpa, eum earum distinctio explicabo
            magnam veritatis ab totam quasi!
          </p>
        </div>
        <div className={classes.longKingImage}>
          <img
            src={
              "https://news.otofun.net/stores/news_dataimages/ngocthanh/032021/25/14/4023_163189862_3770784532970866_8575399921289870002_o.jpg?rt=20210325144028"
            }
          />
        </div>
      </div>
    </div>
  );
}
export default Activity;
