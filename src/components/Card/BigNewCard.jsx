import React from "react";
import { ButtonHover } from "../Button/Button";
import { Date, TiTleProduct } from "../Typography/index.js";
import { Container, NomalImage } from "./styled";

function BigNewCard(props) {
  return (
    <Container>
      <NomalImage src={props.image} height={"30rem"} />
      <Date>17 JUNE 2021</Date>
      <TiTleProduct>
        BỘ ĐÔI XE THỂ THAO VÀ SIÊU XE ĐẶC BIỆT ĐẾN TỪ NƯỚC Ý XUẤT HIỆN TẠI
        WRAPSTYLE HCM
      </TiTleProduct>
      <ButtonHover>Xem chi tiết</ButtonHover>
    </Container>
  );
}
export default BigNewCard;
