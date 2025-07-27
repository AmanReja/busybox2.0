import React from "react";
import Signin from "./Components/Signin";
import {
  Routes,
  Route,
  BrowserRouter,
  Router,
  Outlet,
  useLocation,
} from "react-router-dom";
import Dashbord from "./Components/Dashbord";
import Navbar from "./Components/Navbar";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer></ToastContainer>
      <Outlet></Outlet>
    </>
  );
};

export default App;
