import React, { useEffect } from "react";
import Chart from "./Chart";
import Hdfc from "../assets/images/HDFC.png";
import { Outlet } from "react-router-dom";
import i1 from '../assets/icons/2.svg'
import i2 from '../assets/icons/4.svg'

const Bulkpayout = () => {
  const getalldata = async () => {
    const res = await fetch(`https://api.busybox.in/payment/payment`);
    const data = await res.json();
    console.log(12, data);
  };

  useEffect(() => {
    getalldata();
  }, []);

  const transactions = [
    {
      status: "Success",
      date: "2025-07-24",
      utr: "UTR12345678",
      account: "Aman Reja - HDFC ****1234",
      amount: 5000,
    },
    {
      status: "Failed",
      date: "2025-07-23",
      utr: "UTR87654321",
      account: "Nisha Patel - SBI ****4321",
      amount: 2300,
    },
    {
      status: "Pending",
      date: "2025-07-22",
      utr: "UTR34984576",
      account: "Rahul Kumar - ICICI ****9876",
      amount: 1500,
    },
    {
      status: "Success",
      date: "2025-07-21",
      utr: "UTR45238765",
      account: "Priya Sharma - Axis ****1122",
      amount: 6200,
    },
    {
      status: "Success",
      date: "2025-07-20",
      utr: "UTR99887766",
      account: "Vikas Singh - Kotak ****3344",
      amount: 4800,
    },
    {
      status: "Failed",
      date: "2025-07-19",
      utr: "UTR56473829",
      account: "Sneha Roy - Yes Bank ****5566",
      amount: 1200,
    },
    {
      status: "Pending",
      date: "2025-07-18",
      utr: "UTR83726194",
      account: "Alok Mehta - BOI ****7788",
      amount: 3000,
    },
    {
      status: "Success",
      date: "2025-07-17",
      utr: "UTR26473829",
      account: "Meena Verma - Union ****9900",
      amount: 7000,
    },


  ];
  return (
    <div className=" w-[100%] rounded-2xl sm:h-[500px] h-[600px] 2xl:h-[790px] flex flex-col">
      <main className="w-full h-[600px]  sm:h-[475px] xl:h-[480px] flex 2xl:h-[780px] flex-col overflow-y-scroll">
        <section className="w-full flex flex-col sm:flex-row  gap-[20px] 2xl:h-[780px]  sm:min-h-[600px] sm:h-[600px] px-[2px] sm:px-[20px]">
          <div className="flex w-full  sm:w-[32%] h-full bg-white  p-5">
            <form className="flex flex-col border gap-6 w-full rounded-[10px] border-gray-200 shadow-md ">
              <h2 className="text-xl font-semibold h-[60px] text-center content-center border-gray-200 text-gray-800 mb-2 border-b-[1px] ">
                Bulk Payout Transaction
              </h2>


              <div className="w-full px-[20px] flex-col flex gap-[10px]">
                <div className="flex p-4 flex-col text-gray-500 text-[16px] text-center">
                  Effortless Bulk Payouts for Businesses
                </div>
                <div className="w-full px-[30px] py-[40px] flex justify-center">
                  <div className="flex p-4 flex-col border-dashed w-[400px] h-[200px]   border-gray-300 justify-center items-center border-[3px]">
                    <input
                      type="file"
                      id="Preview"
                      className="border border-gray-300 hidden rounded px-3  outline-none focus:ring focus:ring-blue-200"
                      placeholder="Select Debit Account"
                    />
                    <label className="text-gray-400" htmlFor="Preview">Drag And Drop Preview</label>
                  </div>
                </div>

                <p className="w-full text-[12px] text-blue-500 flex  items-center gap-[5px]">

                <i class="fa-solid fa-cloud-arrow-down text-gray-600 "></i> <p className="border-b-blue-400 border-dashed border-b-[1px]"> Download CSV Template</p>
                  
                </p>



                <button disabled
                  type="submit"
                  className="bg-blue-400 w-full text-white rounded px-4 py-2 hover:shadow-md hover:shadow-blue-400 transition text-left"
                >
                  Process
                </button>
              </div>









            </form>
          </div>

          <div className="flex w-[68%] mt-[20px] h-full flex-col border-gray-100 border-[1px] bg-white rounded-xl   overflow-y-auto">
            <div className="text flex justify-between items-center p-4  h-[60px] w-full">
              <h2 className="text-[16px]  font-semibold text-gray-800 ">
                Last 10 Transactions
              </h2>
              <div className="border-gray-300 border-[1px] p-1 px-[20px] rounded-[8px] hover:shadow-gray-300 hover:shadow-xl duration-300 ">
                <button className="text-[12px]  font-medium text-gray-500 ">See More Transaction</button>
              </div>
            </div>

            <table className="w-full text-sm text-left text-gray-600">
              <thead className="text-[11px] text-gray-400 uppercase border-b bg-[#fcfcfc] border-gray-300 border-t">
                <tr>
                  <th className="px-4 py-4">#Status</th>
                  <th className="px-4 py-4">
                    <div className="flex items-center space-x-1">
                      <p>Txn Date</p>
                      <div className="flex flex-col justify-center items-center leading-none">
                        <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#1f1f1f" className="-mb-[4px]">
                          <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#1f1f1f" className="-mt-[4px]">
                          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                        </svg>
                      </div>
                    </div>
                  </th>

                  <th className="px-4 py-4"> <div className="flex items-center space-x-1">
                    <p>UTR</p>
                    <div className="flex flex-col justify-center items-center leading-none">
                      <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#dbdad7" className="-mb-[4px]">
                        <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#1f1f1f" className="-mt-[4px]">
                        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                      </svg>
                    </div>
                  </div></th>
                  <th className="px-4 py-4"> <div className="flex items-center space-x-1">
                    <p>Account Details</p>
                    <div className="flex flex-col justify-center items-center leading-none">
                      <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#1f1f1f" className="-mb-[4px]">
                        <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#dbdad7" className="-mt-[4px]">
                        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                      </svg>
                    </div>
                  </div></th>
                  <th className="px-4 py-4"><div className="flex items-center space-x-1">
                    <p>Amount</p>
                    <div className="flex flex-col justify-center items-center leading-none">
                      <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#1f1f1f" className="-mb-[4px]">
                        <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#dbdad7" className="-mt-[4px]">
                        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                      </svg>
                    </div>
                  </div></th>
                </tr>
              </thead>
              <tbody className="text-[12px] font-semibold">
                {transactions.map((txn, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-4 py-2">
                      <span
                        className={`text-white rounded-[3px] px-[13px] py-[2px] text-center content-center min-w-[80px] h-[5px] w-[80px] font-bold text-[12px] ${txn.status === "Success"
                            ? "bg-green-400"
                            : txn.status === "Pending"
                              ? "bg-yellow-400"
                              : "bg-red-400"
                          }`}
                      >
                        {txn.status}
                      </span>
                    </td>
                    <td className="px-4 py-5">{txn.date}</td>
                    <td className="px-4 py-5">{txn.utr}</td>
                    <td className="px-4 py-5">{txn.account}</td>
                    <td className="px-4 py-5">
                      ₹{txn.amount.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="flex justify-between gap-6 p-6 mt-[50px] rounded-xl">
         
          <div className="flex w-full  flex-col border-[1px] justify-between rounded-[10px] border-gray-100 shadow">
            <div className="w-full flex p-6 ">
              <div className="flex  w-[75%] flex-col p-6 gap-[5px] min-h-[180px]">
                <h1 className="text-[22px] ">Questions ?</h1>
                <p className="text-gray-700 text-[14px] pr-[180px] ">Visit our Help Center for detailed assistance on billing, payments, and subscriptions.</p>

              </div>


              <div className="flex  w-[25%] p-4">
                <img className="" src={i1} alt="" />
              </div>
            </div>



           <div className="w-full flex  border-t h-[40px] border-gray-100 justify-center items-center">
           <a className="text-blue-500 border-b-[1px] border-dashed text-[12px]" href="">Go to Help Center</a>
            
            </div> 



          </div>
          <div className="flex w-full  flex-col border-[1px] justify-between rounded-[10px] border-gray-100 shadow">
            <div className="w-full flex p-6">
              <div className="flex  w-[75%] flex-col p-6 gap-[5px] min-h-[180px]">
                <h1 className="text-[22px] ">Contact Support</h1>
                <p className="text-gray-700 text-[14px] pr-[10px]  ">Need assistance? Contact our support team for prompt, personalized help your queries & concerns.</p>

              </div>


              <div className="flex  w-[25%] p-4">
                <img className="" src={i2} alt="" />
              </div>
            </div>



          
            <div className="w-full flex  border-t h-[40px] border-gray-200 justify-center items-center">
           <a className="text-blue-500 border-b-[1px] border-dashed text-[12px]" href="">Contact Support</a>
           
            
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
  );
};

export default Bulkpayout;
