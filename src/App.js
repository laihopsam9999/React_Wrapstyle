import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import AboutUs from "./containers/AboutUs";
import Store from "./containers/Store";
import Login from "./containers/Login";
import Cart from "./containers/Cart";
import ModelProduct from "./containers/ModelProduct";
import News from "./containers/News";
import Activity from "./containers/Activity";
import Hiring from "./containers/Hiring";
import SignUp from "./containers/SignUp";
// import ManagementUser from "./containers/ManagementUser";
import BookingService from "./containers/BookingServices";
import Detail from "./containers/Store/Detail";
import CarDetailing from "./containers/CarDetailing";
import {
  Router,
  Switch,
  Route,
  // Router,
} from "react-router-dom";
import history from "./history";
import { Fragment } from "react";
import PaintProtection from "./containers/PaintProtection";
import DetailCar from "./containers/Details/DetailCar";
import DetailAccessory from "./containers/Details/DetailAccessory";
function App() {
  return (
    <Router history={history}>
      <Fragment>
        <Header />
        <Switch>
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Store" component={Store} />
          <Route path="/Cart" component={Cart} />
          <Route path="/ModelProduct" component={ModelProduct} />
          <Route path="/News" component={News} />
          <Route path="/Activity" component={Activity} />
          <Route path="/Hiring" component={Hiring} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/BookingService" component={BookingService} />
          <Route path="/CarDetailing" component={CarDetailing} />
          <Route path="/PaintProtection" component={PaintProtection} />
          <Route path="/DetailCar/:Id" component={DetailCar} />
          <Route path="/DetailAccessory" component={DetailAccessory} />
          <Route path="/Detail/:courseId" component={Detail} />
          <Route path="/Login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
