import React, { useEffect } from "react";
import Chart from "./Chart";
import Hdfc from "../assets/images/HDFC.png";
import pat from "../assets/images/pat.png";
import hand from "../assets/images/hand.png";
import { Outlet } from "react-router-dom";
import adhar from "../assets/icons/aadhaar.svg"
import gst from "../assets/icons/calculate.png"
import man from "../assets/icons/man.png"
import confetti from "../assets/icons/confetti.png"
import line from "../assets/icons/line.svg"
import card from "../assets/icons/card.png"
import bank from "../assets/icons/bank.png"
import user from "../assets/icons/user.png"
import chip from "../assets/icons/cpu.png"

const Developertools = () => {
    return (
        <>


            <div className='w-full h-auto'>




                <div className="flex   bg-gradient-to-br from-black to-gray-700 justify-between items-center rounded-xl">
                    <div className="flex flex-col   h-[150px] gap-[10px] p-4 py-[50px] justify-center rounded-xl">
                        <h1 style={{ fontFamily: "Montserrat" }} className="text-[18px] font-bold text-white">Developer Controls</h1>
                        <p style={{ fontFamily: "Montserrat" }} className="text-[12px]  w-[630px] text-white leading-4">Explore bobust controlles like API keys, whitelists, and webhooks for secure integration. Find comprehensive <a className="underline font-bold text-blue-400" href="">API Documentations</a> for seamless implemantations and a deeper understanding of our service </p>
                    </div>


                    <img className="w-[180px] h-[140px] object-contain" src={hand} alt="" />
                </div>









                <div className="flex flex-row  border-gray-200 border w-full rounded-2xl mt-[30px] justify-between shadow-md h-[180px] items-center p-6 gap-[20px] bg-lime-100 ">

                    <div>
                        <h1 style={{ fontFamily: "Montserrat" }} className="text-[15px] font-bold   ">API Key</h1>
                        <p style={{ fontFamily: "Montserrat" }} className="text-[13px] text-gray-800 font-normal  w-[630px] leading-6 ">The API Key section allows you to access and integrate with our banking APIs securely. Use this key to authenticate your requests and manage transactions programmatically. Please ensure that your key is stored securely and not shared publicly. <a className="underline font-bold" href="">API Documentations</a></p>
                    </div>
                    <div className="flex justify-center items-center gap-[10px]">
                        <button className="p-2 px-[20px] text-white bg-amber-500 rounded-xl outline-none hover:shadow-md hover:shadow-blue-500 hover:scale-105 duration-300"> Regenerate Token</button> <div className="flex rounded outline-none border-gray-500 border justify-center items-center "><input className="py-[8px]  outline-none px-[10px]" placeholder="XXXXXXXXXX" type="text" />
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 8V7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5H17C17.9428 5 18.4142 5 18.7071 5.29289C19 5.58579 19 6.05719 19 7V12C19 12.9428 19 13.4142 18.7071 13.7071C18.4142 14 17.9428 14 17 14H16M7 19H12C12.9428 19 13.4142 19 13.7071 18.7071C14 18.4142 14 17.9428 14 17V12C14 11.0572 14 10.5858 13.7071 10.2929C13.4142 10 12.9428 10 12 10H7C6.05719 10 5.58579 10 5.29289 10.2929C5 10.5858 5 11.0572 5 12V17C5 17.9428 5 18.4142 5.29289 18.7071C5.58579 19 6.05719 19 7 19Z" stroke="#464455" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
                    </div>




                </div>
                <div className="flex border-gray-200 border w-full rounded-2xl mt-[30px] shadow-md h-[100px] flex-col p-4 gap-[20px] bg-violet-200 ">



                    <h1 style={{ fontFamily: "Montserrat" }} className="text-[15px] font-bold   ">Webhooks</h1>
                    <p style={{ fontFamily: "Montserrat" }} className="text-[15px]   w-[630px] ">Receive callback for every transaction to fully automate <a className="underline font-bold" href="">Learn more</a></p>


                </div>


            </div>

        </>
    )
}

export default Developertools