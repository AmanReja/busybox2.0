import { React, useEffect } from "react";
import Hdfc from "../assets/images/HDFC.png";
import Chart from "./Chart";
import { ToastContainer, toast, Slide } from "react-toastify";
import { useParams, useLocation } from "react-router-dom";

const Summery = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const loginSuccess = params.get("login");

  const sucesslog = () => {
    if (loginSuccess === "success") {
      toast.success("🦄 log success", {
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
  useEffect(() => {
    sucesslog();
  }, [loginSuccess]);

  return (
    <>
      <ToastContainer></ToastContainer>
      <div className=" w-[100%] rounded-2xl h-[600px] flex flex-col">
        <main className="w-full  h-[] sm:h-[546px] flex flex-col overflow-y-scroll">
          <div className="w-full sm:h-[50px] h-[90px] sm:flex-row flex-col px-[20px] flex items-center justify-between mt-[2px] sm:mt-[30px] ">
            <h1 className="text-[23px] font-semibold">Dashboard Summary</h1>
            <div className="h-full w-full sm:w-[360px] gap-[10px] flex">
              <div className="border-dashed rounded flex flex-col w-[105px] border-gray-400 border-[1px] text-center gap-[2px] p-[5px]">
                <p className="text-[12px]  font-semibold">₹ 105591.682</p>
                <p className="text-[12px] font-normal text-gray-500">
                  Wallet Balance
                </p>
              </div>
              <div className="border-dashed rounded flex flex-col text-center border-gray-400 border-[1px] w-[105px] gap-[2px] p-[5px]">
                <p className="text-[12px] font-semibold">₹ 0</p>
                <p className="text-[12px] font-normal text-gray-500">
                  Unsettled
                </p>
              </div>
              <div className="border-dashed rounded flex flex-col text-center border-gray-400 border-[1px] w-[105px] gap-[2px] p-[5px]">
                <p className="text-[12px] font-semibold">₹ 0</p>
                <p className="text-[12px] font-normal text-gray-500">Settled</p>
              </div>
            </div>
          </div>
          <div className="w-full h-[276px]  mt-[5px] p-2 px-[20px]">
            <div className="bg-gradient-to-r hover:translate-y-[-5px] duration-300 from-violet-500  to-indigo-500  text-white p-8 rounded-lg shadow-lg w-full sm:w-[390px] h-full">
              <div className="w-full h-[60px] font-semibold mb-4 flex items-center gap-[20px]">
                <div className=" w-[70%]">
                  <h1 className="text-[20px]">Virtual Account</h1>
                  <p className="text-blue-200 font-normal text-[14px]">
                    HDFC Bank
                  </p>
                </div>
                <div className="border h-[60px] w-[22%] bg-white rounded-[5px] p-1 flex justify-center items-center">
                  <img
                    className="object-contain w-[50px] h-[50px]"
                    src={Hdfc}
                    alt=""
                  />
                </div>
              </div>

              <div className="w-full  h-[60px]">
                <p className="font-semibold text-[12px]">Account Number</p>
                <h1 className="font-bold text-[18px]"> BB559900000036</h1>
              </div>
              <div className="w-full  h-[60px]">
                <p className="font-semibold text-[12px]">IFSC Code</p>
                <h1 className="font-bold text-[18px]">HDFC0000060</h1>
              </div>
            </div>
          </div>
          <section className="w-full flex flex-col sm:flex-row  gap-[20px]  sm:min-h-[400px] sm:h-[400px]  px-[20px]">
            <div className="flex w-full z-0 sm:w-[35%] h-full">
              <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-4 ">
                <div className="flex flex-col items-center justify-between shadow-sky-200 rounded-xl p-4 bg-white  shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-full flex justify-center items-center h-[40%]">
                    <i className="fa-solid fa-arrow-right text-5xl text-blue-600 rotate-[-50deg]"></i>
                  </div>
                  <div className="w-full text-center h-[60%]">
                    <h1 className="text-4xl font-extrabold text-gray-800">
                      36
                    </h1>
                    <p className="text-base text-gray-500">Payouts</p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-between shadow-lime-200 rounded-xl p-4 bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-full flex justify-center items-center h-[40%]">
                    <i className="fa-solid fa-arrow-right text-5xl text-green-600 rotate-[130deg]"></i>
                  </div>
                  <div className="w-full text-center h-[60%]">
                    <h1 className="text-4xl font-extrabold text-gray-800">0</h1>
                    <p className="text-base text-gray-500">Collection</p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-between shadow-violet-300  rounded-xl p-4 bg-white shadow-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-full flex justify-center items-center h-[40%]">
                    <i className="fa-regular fa-credit-card text-5xl text-violet-600"></i>
                  </div>
                  <div className="w-full text-center h-[60%]">
                    <h1 className="text-4xl font-extrabold text-gray-800">0</h1>
                    <p className="text-base text-gray-500">Cards Created</p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-between shadow-red-200 rounded-xl p-4 bg-white shadow-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-full flex justify-center items-center h-[40%]">
                    <i className="fa-solid fa-circle-check text-5xl text-red-600"></i>
                  </div>
                  <div className="w-full text-center h-[60%]">
                    <h1 className="text-4xl font-extrabold text-gray-800">0</h1>
                    <p className="text-base text-gray-500">Identity Verified</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full sm:w-[65%] h-[100%]  flex-col justify-center items-center">
              <header className="w-full h-[18%] flex  justify-around items-center border border-gray-300 rounded-tl-2xl rounded-tr-2xl">
                <h1 className="text-[22px]">Earnings</h1>
                <select className=" border-gray-300 rounded-[8px] w-[130px] outline-none px-[20px] border py-[3px]">
                  <option value="1 month">1 month</option>
                  <option value="3 month">2 month</option>
                  <option value="6 month">6 month</option>
                  <option selected value="12 month">
                    12 month
                  </option>
                </select>
              </header>
              <div className=" shadow-xl shadow-sky-100 h-[80%] px-[5px]  border w-full border-gray-300 flex justify-center items-center">
                <Chart></Chart>
              </div>
            </div>
          </section>
          <footer className="w-full min-h-[60px]  flex px-[20px] justify-between items-center">
            <h1 className=" text-gray-500 text-[14px]">2024© Busybox.</h1>
            <div
              style={{ fontFamily: "montserrat" }}
              className="flex min-w-[235px]  text-[14px] w-[235px] h-full items-center gap-[10px] text-gray-500 justify-between"
            >
              <a href="">Docs</a>
              <a href="">FAQ</a>
              <a href="">Support</a>
              <a href="">License</a>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Summery;
