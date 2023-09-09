import React from "react";
import BannerL from "../../components/Banner/BannerL";
import CarouselBanner from "../../components/Carousel/CarouselBanner";
import { styleHiring } from "./style";

function Hiring() {
  const classes = styleHiring();
  return (
    <div>
      <section className={classes.hiringbanners}>
        <div className={classes.hiringbannersTitle}>
          <h5>Hãy cùng chúng tôi lập nên kì tích</h5>
          <p>Tham gia cuộc hành trình tìm kiếm đam mê đầy cảm hứng</p>
        </div>
        <div className={classes.hiringbannersContent}>
          <div className={classes.hiringbannersImage}>
            <BannerL />
          </div>
          <div className={classes.hiringbannersForm}></div>
        </div>
      </section>

      {/* START HIRING POSITION  */}
      <section className={classes.hiringposition}>
        <div className={classes.hiringpositionTitle}>
          <h3>Hiện không có vị trí nào đang tuyển</h3>
        </div>
      </section>
      {/* END HIRING POSITION   */}
    </div>
  );
}
export default Hiring;
