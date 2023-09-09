import React from "react";
import { Input } from "../../components/Form/InputForm";
import { styleSignUp } from "./style";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { phoneRegex, passwordRegex, emailRegex } from "../../regex";
import { signUpUser } from "../../redux/actions/user";

function SignUp() {
  const classes = styleSignUp();

  // CREATE YUP OBJECT
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
    },
    validationSchema: yup.object({
      ...phoneRegex,
      ...passwordRegex,
      ...emailRegex,
      // ...passwordConfirmRegex,
    }),
    onSubmit: (values) => {
      const infoUser = {
        taiKhoan: "admindepzai",
        matKhau: "123456789",
        hoTen: "laihopsam",
        soDT: "0985929816",
        maNhom: "GP01",
        email: "laihopsam@gmail.com",
      };
      console.log(values);
      console.log(infoUser);
      signUpUser(infoUser);
    },
  });
  // END YUP OBJECT

  return (
    <div className={classes.container}>
      {/* START LEFT LOGIN   */}
      <form className={classes.contentLeftLogin} onSubmit={formik.handleSubmit}>
        <div className={classes.loginTitle}>
          <h1>Sign up</h1>
        </div>
        <div className={classes.loginForm}>
          {/* START PHONE  */}
          <div className={classes.usernameLogin}>
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
              {formik.errors.taiKhoan ? <p>{formik.errors.taiKhoan}</p> : " "}
            </div>
          </div>
          {/* END PHONE  */}
          {/* START USERNAME  */}
          <div className={classes.emailLogin}>
            <div className={classes.inputForm}>
              <Input
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            <div className={classes.regexForm}>
              {formik.errors.email ? <p>{formik.errors.email}</p> : " "}
            </div>
          </div>
          {/* END USERNAME  */}
          {/* START PASSWORD  */}
          <div className={classes.passwordLogin}>
            <div className={classes.inputForm}>
              <Input
                type="password"
                placeholder="Password"
                name="matKhau"
                id="matKhau"
                value={formik.values.matKhau}
                onChange={formik.handleChange}
              />
            </div>
            <div className={classes.regexForm}>
              <p>
                {formik.errors.matKhau ? <p>{formik.errors.matKhau}</p> : " "}
              </p>
            </div>
          </div>
          {/* END PASSWORD */}
          {/* start password  */}
          <div className={classes.passwordConfirmLogin}>
            <div className={classes.inputForm}>
              <Input
                type="password"
                placeholder="Confirm Password"
                name="confrimPassword"
                id="confrimPassword"
                onChange={formik.handleChange}
              />
            </div>
            <p>
              {formik.errors.confrimPassword ? (
                <p>{formik.errors.confrimPassword}</p>
              ) : (
                " "
              )}
            </p>
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
              <label htmlFor="vehicle1">
                By signing up you accept the Term of service and Privacy Policy
              </label>
            </div>
          </div>
          {/* end checkbox  */}

          <div className={classes.socialIcon}>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-google-plus-square"></i>
            <i class="fab fa-twitter-square"></i>
          </div>
          <div className={classes.buttonLogin}>
            <Button backgroundColor="#dc3545" type="submit">
              Sign Up
            </Button>
          </div>
        </div>
      </form>
      {/* END LEFT LOGIN   */}

      {/* START RIGHT LOGIN   */}
      <div className={classes.contentRightLogin}>
        <h1>
          Welcome to <br /> Wrapstyle VietNam
        </h1>
        <h3>Bạn đã có tài khoản ? </h3>
        <Link to="/Login">
          <Button backgroundColor="green">Đăng nhập ngay bây giờ</Button>
        </Link>
      </div>
      {/* END RIGHT LOGIN   */}
    </div>
  );
}
export default SignUp;
