import React, { useEffect } from "react";
import Chart from "./Chart";
import Hdfc from "../assets/images/HDFC.png";
import { NavLink, Outlet } from "react-router-dom";
import adhar from "../assets/icons/aadhaar.svg"
import gst from "../assets/icons/calculate.png"
import man from "../assets/icons/man.png"
import confetti from  "../assets/icons/confetti.png"
import line from  "../assets/icons/line.svg"
import card from "../assets/icons/card.png"
import bank from "../assets/icons/bank.png"
import user from "../assets/icons/user.png"


const Settings = () => {
//   const getalldata = async () => {
//     const res = await fetch(`https://api.busybox.in/payment/payment`);
//     const data = await res.json();
//     console.log(12, data);
//   };

//   useEffect(() => {
//     getalldata();
//   }, []);

 
  return (
    <div className=" w-[100%]  rounded-2xl sm:h-[500px] xl:h-[640px] 2xl:h-[790px]  lg:h-[650px] h-[600px] flex flex-col">
      <main className="w-full h-[600px]  lg:h-[575px] xl:h-[550px] 2xl:h-[780px]  sm:h-[475px] flex flex-col overflow-y-scroll overflow-x-hidden">
        <section className="w-full flex flex-col sm:flex-col  gap-[20px] mt-[20px] sm:min-h-[600px] 2xl:h-[780px]  sm:h-[600px] px-[2px] sm:px-[20px]">
            <div className="flex h-[80px]  gap-[10px]">
                <div className="flex">
                  <img className="h-[40px] w-[40px]" src={confetti} alt="" />
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold">Productive day it is!</h1>
                    <p className="text-[12px]">Make work feel like a beeze</p>
                </div>
            </div>
            <h3 className="font-bold text-[18px]">Settings</h3>
            <header className="w-full   h-[50px]">
                <div className="flex h-[50px] items-center text-[15px] w-[600px] gap-[10px] text-gray-800">
                <NavLink to={"/dashboard/settings/accounts"}  className={({ isActive }) =>
                  `hover:border-b-violet-300 hover:border-b-[3px] ${
                    isActive ? "border-b-violet-400 font-bold border-b-[3px]" : ""
                  }`
                } >Account</NavLink>
                <a   >Security</a>
                <NavLink  to={"/dashboard/settings/developertooles"}  className={({ isActive }) =>
                  `hover:border-b-violet-300 hover:border-b-[3px] ${
                    isActive ? "border-b-violet-400 border-b-[3px] font-bold" : ""
                  }`
                }>Developer tools</NavLink>
                <a  className="hover:border-b-violet-300 hover:border-b-[3px]" href="">Team management</a>
                <a  className="hover:border-b-violet-300 hover:border-b-[3px]" href="">Billing</a>

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
