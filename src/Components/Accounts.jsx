import React, { useEffect } from "react";
import Chart from "./Chart";
import Hdfc from "../assets/images/HDFC.png";
import { Outlet } from "react-router-dom";
import adhar from "../assets/icons/aadhaar.svg"
import gst from "../assets/icons/calculate.png"
import man from "../assets/icons/man.png"
import confetti from "../assets/icons/confetti.png"
import line from "../assets/icons/line.svg"
import card from "../assets/icons/card.png"
import bank from "../assets/icons/bank.png"
import user from "../assets/icons/user.png"
import credit from "../assets/icons/credit.png"
import house from "../assets/icons/house.png"
import tie from "../assets/icons/tie.png"
import phone from "../assets/icons/phone.png"
import mail from "../assets/icons/mail.png"
import Subfooter from "./Subfooter";

const Accounts = () => {


  const content_card = [
    { name: "Owner", catagory: "Role" ,color:"lime-400",icon:
    <svg width="25px" height="25px" viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
    
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    
    <g id="SVGRepo_iconCarrier"> <title></title> <desc>.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-145.000000, -4839.000000)" fill="#fff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M95.5687681,4686.96604 L92.4312319,4686.96604 C91.4919694,4686.96604 90.666302,4687.60034 90.4086096,4688.4547 L89.0812309,4692.87585 C88.8708697,4693.57189 89.0759718,4694.33165 89.6165999,4694.84247 L92.5122209,4698.41524 C93.3336811,4699.19293 94.6663189,4699.19591 95.4877791,4698.41823 L98.3834001,4694.85243 C98.9240282,4694.34061 99.1291303,4693.59379 98.9187691,4692.89776 L97.5913904,4688.4547 C97.333698,4687.59934 96.5080306,4686.96604 95.5687681,4686.96604 M97.4483448,4683.35444 L97.7985961,4681.34102 C98.0131645,4680.1272 97.0244672,4679 95.7244354,4679 L92.2766164,4679 C90.9765846,4679 89.9878873,4680.1491 90.2014039,4681.36293 L90.5516552,4683.33253 C90.7209959,4684.29344 91.5982018,4684.97453 92.6268677,4684.97453 L95.3731323,4684.97453 C96.4017982,4684.97453 97.2790041,4684.31534 97.4483448,4683.35444" id="tie_round-[#fffff]"> </path> </g> </g> </g> </g>
    
    </svg>},
    { name: "8617828286", catagory: "Mobile Number",color:"red-500",icon:<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
  </svg>
   },
    { name: "Akash@busybox.in", catagory: "Email ID" ,color:"violet-500" ,icon:<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"/>
  </svg>
  },
    { name: "XXXXXXXX3710", catagory: "Adhaar" ,color:"blue-600",icon:<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clip-rule="evenodd"/>
  </svg>
   },
    { name: "XXXXXXXX449R", catagory: "Pan Number" ,color:"amber-500",icon:<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm0 6h16v6H4v-6Z" clip-rule="evenodd"/>
    <path fill-rule="evenodd" d="M5 14a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm5 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
  </svg>
  },

  ]
  const content_business = [
    { name: "Busybox Technologies Privet limited", catagory: "Business Name" ,color:"blue-400",icon:
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>
  </svg>
  },
    { name: "XXXXXX838J", catagory: "Business Pan",color:"red-500",icon:<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm0 6h16v6H4v-6Z" clip-rule="evenodd"/>
    <path fill-rule="evenodd" d="M5 14a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm5 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
  </svg>},
    { name: "19AAICB9838J1ZZ", catagory: "GST" ,color:"violet-500" ,icon:<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7ZM8 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clip-rule="evenodd"/>
  </svg>
  },
   
    { name: "bb1122334456", catagory: "Organisation ID" ,color:"amber-500",icon:<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
  </svg>
  },

  ]


  return (
    <>


      <div className='w-full flex flex-col gap-[50px] overflow-hidden'>



        <div className="flex flex-col border-gray-200 border h-auto sm:h-[300px]  w-full shadow rounded-xl">
          <div className="flex  w-full bg-gradient-to-r from-[#a16bf8] via-[#3644c2] h-[50%] to-[#8d90d8] rounded-t-xl p-6 shadow-md items-center justify-between">
            <div className="flex flex-col h-[90px] justify-center gap-2 text-white">
              <div className="flex  items-center gap-[10px]">
                <div className="bg-[#6a26e7] shadow-md w-[40px] p-2 rounded-full">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
                </div>
                <p style={{ fontFamily: "Delius" }} className="text-[16px] tracking-wide opacity-90">Personal Information</p>

              </div>
              <h1 style={{ fontFamily: "Delius" }} className="text-2xl font-extrabold drop-shadow-md ">
                Khandekar Mobarok Hossain
              </h1>
            </div>



            {/* <img className="w-[250px] h-[90px] object-contain opacity-80" src={line} alt="Decoration" /> */}
          </div>
          
          <div className="w-full bg-pink-100 sm:h-[50%] h-auto py-[10px] pl-[30px] xl:justify-center sm:justify-center 2xl:justify-normal justify-start flex-col sm:flex-row  flex gap-[50px]">

            {content_card.map((item)=>(  <div className="flex gap-[10px]  justify-center items-center">

<div className={`bg-${item.color} shadow-md w-[40px] p-2 rounded-full`}>
{item.icon}
    </div>


  <div className="flex flex-col">
    <h1 className="font-bold text-[13px] text-gray-900">{item.name}</h1>
    <p className="text-[12px]">{item.catagory}</p>
  </div>
</div>))}
          
         

           
          
          </div>

        
        </div>
        <div className="flex border-gray-200  border w-full rounded-2xl  bg-gray-100 shadow-xl h-[200px] flex-col p-4 gap-[10px]">
        <div className="flex  items-center gap-[10px]">
                <div className="bg-lime-400 shadow-md w-[40px] p-2 rounded-full">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/>
</svg>

                </div>
                <p style={{ fontFamily: "Delius" }} className="text-[16px] tracking-wide opacity-90">Business Information</p>

              </div>



          <div className="w-full py-[10px] pl-[30px] flex gap-[50px] ">
            {content_business.map((item)=>(  <div className="flex gap-[10px]  justify-center items-center">


<div className={`bg-${item.color} rounded-full p-4`}>
{item.icon}
</div>

<div className="flex flex-col">
  <h1 className="font-bold text-[13px] text-gray-700">{item.name}</h1>
  <p className="text-[12px]">{item.catagory}</p>
</div>
</div>))}
          

          
         
          
          </div>




        </div>

        <Subfooter></Subfooter>
      </div>
    </>
  )
}

export default Accounts