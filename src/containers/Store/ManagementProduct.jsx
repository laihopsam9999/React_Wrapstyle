import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductAction } from "../../redux/actions/productAction";

function ManagementProduct(props) {
  // lấy hàm dispatch từ useDispatch để gửi lên Reducers
  let dispatch = useDispatch();

  let [addProduct, setProduct] = useState({
    id: " ",
    productName: " ",
    image: " ",
    price: " ",
    salePrice: " ",
  });

  // lấy thông tin người dùng nhập vào trên form dùng state
  const hardleChange = (e) => {
    // e.target là chỉ đến form đó luốn
    let { value, name } = e.target;
    setProduct({
      ...addProduct,
      [name]: value,
    });
  };

  // submit infomational product to reducer
  const handleProduct = (e) => {
    e.preventDefault(); // chặn broser reload khi enter

    dispatch(addProductAction(addProduct));
  };

  return (
    <div className="container">
      <div className="input-group flex-nowrap m-2">
        <input
          name="id"
          type="text"
          className="form-control"
          placeholder="id"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={hardleChange}
        />
      </div>
      <div className="input-group flex-nowrap m-2">
        <input
          name="image"
          type="file"
          className="form-control"
          placeholder="image"
          aria-label="image"
          aria-describedby="addon-wrapping"
          onChange={hardleChange}
        />
      </div>
      <div className="input-group flex-nowrap m-2">
        <input
          name="productName"
          type="text"
          className="form-control"
          placeholder="Product Name"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={hardleChange}
        />
      </div>
      <div className="input-group flex-nowrap m-2">
        <input
          name="price"
          type="number"
          className="form-control"
          placeholder="Price"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={hardleChange}
        />
      </div>
      <div className="input-group flex-nowrap m-2">
        <input
          name="salePrice"
          type="number"
          className="form-control"
          placeholder="Price Sale"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={hardleChange}
        />
      </div>
      <button
        type="submit"
        class="btn btn-outline-success"
        onClick={handleProduct}
      >
        Nhấn
      </button>
    </div>
  );
}
export default ManagementProduct;
