import React from "react";
import { Button } from "../../components/Button/Button";
import { InputNomal } from "../../components/Form/InputForm";
import TableCart from "../../components/Table/TableCart";
import useStyleCart from "./style";

function Cart() {
  const classes = useStyleCart();

  return (
    <div className={classes.container}>
      <h1>Giỏ hàng</h1>
      <div className={classes.cart}>
        <div className={classes.tableCart}>
          <TableCart />
        </div>
        <div className={classes.address}>
          <div>
            Mã khuyến mãi : <InputNomal />
          </div>
          <div>Số điện thoại : 0932394823</div>
          <div>
            Địa chỉ : 2/5 c8 khu phố Bình Đáng, phường Bình Hòa, Thuận An, Bình
            Dương
          </div>
          <div>Phương thức thanh toán: thanh toán khi nhận hàng</div>
          <div>
            Phí vận chuyển: 20.000 <span>VND</span>
          </div>
          <div>
            Thành tiền : 12.000.000 <span>VND</span>
          </div>
          <Button backgroundColor={"red"}>Xác nhận đơn hàng</Button>
          <Button backgroundColor={"yellow"}>Tiếp tục mua hàng</Button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
