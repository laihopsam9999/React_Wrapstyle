import React from "react";
import { styleLogin } from "./style";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Form/InputForm";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { passwordRegex, phoneRegex } from "../../regex";
import { connect } from "react-redux";
import { login } from "../../redux/actions/user";

function Login(props) {
  // declare style Login
  const classes = styleLogin();

  // CREATE YUP OBJECT
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: yup.object({
      ...phoneRegex,
      ...passwordRegex,
    }),

    onSubmit: (values) => {
      props.dispatch(login(values));
    },
  });
  // END YUP OBJECT

  return (
    <div className={classes.container}>
      {/* START LEFT LOGIN   */}
      <div className={classes.contentLeftLogin} onSubmit={formik.handleSubmit}>
        <div className={classes.loginTitle}>
          <h1>Login</h1>
        </div>
        <form className={classes.loginForm}>
          {/* start username  */}
          <div className={classes.usernameLogin}>
            <div className={classes.inputTitle}>
              <h3>Phone</h3>
            </div>
            <div className={classes.inputForm}>
              <Input
                type="text"
                placeholder="Phone"
                name="taiKhoan"
                id="taiKhoan"
                value={formik.values.taiKhoan}
                onChange={formik.handleChange}
              />
            </div>
            <div className={classes.regexForm}>
              {formik.errors.taiKhoan ? <p>{formik.errors.taiKhoan}</p> : ""}
            </div>
          </div>
          {/* end username  */}
          {/* start password  */}
          <div className={classes.passwordLogin}>
            <div className={classes.inputTitle}>
              <h3>Password</h3>
            </div>
            <div className={classes.inputForm}>
              <Input
                type="password"
                placeholder="Password"
                id="matKhau"
                name="matKhau"
                value={formik.values.matKhau}
                onChange={formik.handleChange}
              />
            </div>
            <div className={classes.regexForm}>
              {formik.errors.matKhau ? <p>{formik.errors.matKhau}</p> : ""}
            </div>
          </div>
          {/* end password  */}
          {/* start checkbox  */}
          <div className={classes.checkboxLogin}>
            <div className={classes.checkbox}>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                defaultValue="Bike"
              />
              <label htmlFor="vehicle1">Remember Password</label>
            </div>
            <div className={classes.forgotPass}>
              <p>Forgot Password?</p>
            </div>
          </div>
          {/* end checkbox  */}
          <div className={classes.lineLogin}>
            <div className={classes.line}></div>
            <p>or</p>
            <div className={classes.line}></div>
          </div>
          <div className={classes.socialIcon}>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-google-plus-square"></i>
            <i class="fab fa-twitter-square"></i>
          </div>
          <div className={classes.buttonLogin}>
            <Button backgroundColor="#dc3545" type="submit">
              Login
            </Button>
          </div>
        </form>
      </div>
      {/* END LEFT LOGIN   */}

      {/* START RIGHT LOGIN   */}
      <div className={classes.contentRightLogin}>
        <h1>
          Welcome to <br /> 2K International
        </h1>
        <h3>Bạn chưa có tài khoản ? </h3>
        <Link to="/SignUp">
          <Button backgroundColor="green">Đăng ký ngay bây giờ</Button>
        </Link>
      </div>
      {/* END RIGHT LOGIN   */}
    </div>
  );
}

export default connect()(Login);
