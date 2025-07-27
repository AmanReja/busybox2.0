import React, { useState } from "react";
import apple from "../assets/icons/apple.svg";
import google from "../assets/icons/google.svg";
import play from "../assets/images/play.png";
import busybox from "../assets/icons/busybox.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce, Slide } from "react-toastify";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = (e) => {
    const admin = {
      email: "Aman@busybox.in",
      pass: "busy@123",
    };
    if (email == admin.email && pass == admin.pass) {
      navigate("/dashboard/summery");
    } else {
      toast.error("🦄 wrong pass and email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  };
  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="flex flex-col lg:flex-row min-h-screen justify-center items-center bg-gray-50 p-4">
        <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6 mb-6 lg:mb-0">
          <div className="flex flex-col items-center">
            <img
              className="object-contain w-28 h-28 mb-4"
              src={busybox}
              alt="Busybox"
            />
            <h1
              style={{ fontFamily: "Montserrat" }}
              className="text-3xl font-semibold mb-4"
            >
              Sign In
            </h1>

            <div className="flex justify-between w-full mb-4 gap-2">
              <div className="flex items-center gap-2 w-1/2 bg-violet-500 hover:bg-violet-600 px-3 py-2 rounded cursor-pointer">
                <img src={google} alt="Google" className="w-4 h-4" />
                <a className="text-xs text-white">Use Google</a>
              </div>
              <div className="flex items-center gap-2 w-1/2 bg-lime-600 hover:bg-lime-700 px-3 py-2 rounded cursor-pointer">
                <img src={apple} alt="Apple" className="w-4 h-4" />
                <a className="text-xs text-white">Use Apple</a>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-2">OR</p>

            <form
              onSubmit={(e) => {
                login(e), e.preventDefault();
              }}
              className="w-full flex flex-col gap-4"
            >
              <input
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="email@email.com"
                className="w-full h-10 border border-gray-300 pl-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                required
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                type="password"
                placeholder="Enter password"
                className="w-full h-10 border border-gray-300 pl-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="flex items-center gap-2">
                <input id="check" type="checkbox" />
                <label htmlFor="check" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-md text-sm"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${play})` }}
          className="w-full max-w-md h-[350px] lg:h-[500px] bg-center bg-contain bg-no-repeat rounded-xl relative flex justify-center items-center"
        >
          <div className="w-[90%] max-w-[350px] bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-md rounded-2xl p-4 absolute bottom-6 shadow-lg">
            <h1
              style={{ fontFamily: "Montserrat" }}
              className="text-xl lg:text-2xl text-gray-800 font-semibold mb-2"
            >
              Secure Access Portal
            </h1>
            <p className="text-sm lg:text-base text-gray-700 leading-snug">
              A robust authentication gateway ensuring secure{" "}
              <span className="font-bold">efficient user access</span> to the
              Busybox Dashboard interface.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
