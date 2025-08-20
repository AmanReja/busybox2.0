import React, { useEffect } from "react";
import Chart from "./Chart";
import Hdfc from "../assets/images/HDFC.png";
import { NavLink, Outlet } from "react-router-dom";
import adhar from "../assets/icons/aadhaar.svg";
import gst from "../assets/icons/calculate.png";
import man from "../assets/icons/man.png";
import confetti from "../assets/icons/confetti.png";
import line from "../assets/icons/line.svg";
import card from "../assets/icons/card.png";
import bank from "../assets/icons/bank.png";
import user from "../assets/icons/user.png";

const Settings = () => {
  // const user = JSON.parse(localStorage.getItem("user")) || {};
  //   const getalldata = async () => {
  //     const res = await fetch(`https://api.busybox.in/payment/payment`);
  //     const data = await res.json();
  //     console.log(12, data);
  //   };

  //   useEffect(() => {
  //     getalldata();
  //   }, []);

  return (
    <div className=" w-[100%]  rounded-2xl 2xl:h-[85%] xl:h-[80%] h-[78%] flex flex-col">
      <main className="w-full h-full flex flex-col overflow-y-scroll overflow-x-hidden">
        <section className="w-full flex flex-col sm:flex-col  gap-[20px] mt-[20px] sm:min-h-[600px] 2xl:h-[780px]  sm:h-[600px] px-[2px] sm:px-[20px]">
       
          <div className="flex mt-[10px]  w-full h-auto">
            <div className="relative w-full h-[200px]   bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 rounded-lg overflow-hidden shadow-2xl">
              {/* YouTube Logo Section */}
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex items-center gap-4">
                <div className="bg-white/90 rounded-xl p-3 shadow-lg">
                  <img className="h-8 w-8" src={confetti} alt="Confetti" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white text-4xl font-bold tracking-wide">
                    Productive day it is!
                  </h1>
                  <p
                    style={{ fontFamily: "Delius" }}
                    className="text-white font-light text-xl"
                  >
                    {" "}
                    Make work feel like a breeze
                  </p>
                </div>
              </div>

              {/* Spirit Characters */}
            
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>

          <header className="w-full h-[50px]">
            <div className="flex h-[50px] items-center text-[15px] w-[600px] gap-[20px] text-gray-800">
              <NavLink
                to={"/dashboard/settings/accounts"}
                className={({ isActive }) =>
                  `flex items-center gap-1 hover:border-b-violet-300 hover:border-b-[3px] ${
                    isActive
                      ? "border-b-violet-400 font-bold border-b-[3px]"
                      : ""
                  }`
                }
              >
                {/* Account Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A10.965 10.965 0 0112 15c2.21 0 4.27.64 5.879 1.804M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Account
              </NavLink>

              <a className="flex items-center gap-1 hover:border-b-violet-300 hover:border-b-[3px]">
                {/* Security Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11zM17 9V7a5 5 0 00-10 0v2H5v12h14V9h-2z"
                  />
                </svg>
                Security
              </a>

              <NavLink
                to={"/dashboard/settings/developertooles"}
                className={({ isActive }) =>
                  `flex items-center gap-1 hover:border-b-violet-300 hover:border-b-[3px] ${
                    isActive
                      ? "border-b-violet-400 border-b-[3px] font-bold"
                      : ""
                  }`
                }
              >
                {/* Developer Tools Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Developer tools
              </NavLink>

              <a className="flex items-center gap-1 hover:border-b-violet-300 hover:border-b-[3px]">
                {/* Team Management Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5V9a2 2 0 00-2-2h-4.34a4 4 0 00-7.32 0H4a2 2 0 00-2 2v11h5v-3a4 4 0 018 0v3z"
                  />
                </svg>
                Team management
              </a>

              <a className="flex items-center gap-1 hover:border-b-violet-300 hover:border-b-[3px]">
                {/* Billing Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-2.21 0-4 .895-4 2s1.79 2 4 2 4-.895 4-2-1.79-2-4-2zm0 4v6m0 0a4 4 0 100-8 4 4 0 000 8z"
                  />
                </svg>
                Billing
              </a>
            </div>
          </header>

          <main className="w-full ">
            <Outlet></Outlet>
          </main>
        </section>
      </main>
    </div>
  );
};

export default Settings;
