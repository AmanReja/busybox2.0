import React, { useEffect } from "react";
import Chart from "./Chart";
import Hdfc from "../assets/images/HDFC.png";

const Addmoney = () => {
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
    {
      status: "Success",
      date: "2025-07-16",
      utr: "UTR92736455",
      account: "Suresh Raina - PNB ****1111",
      amount: 5400,
    },
    {
      status: "Pending",
      date: "2025-07-15",
      utr: "UTR37482736",
      account: "Geeta Das - UCO ****2222",
      amount: 2500,
    },
  ];
  return (
    <div className=" w-[100%] rounded-2xl h-[600px] flex flex-col">
      <main className="w-fullh-[600px]  sm:h-[475px] flex flex-col overflow-y-scroll">
        <section className="w-full flex gap-5 sm:min-h-[900px] h-auto  sm:h-[900px] mt-5 px-5">
          <div className="w-full  flex-col sm:flex-row flex  h-full gap-5 bg-white p-5 rounded-xl ">
            <form className="sm:w-[30%] border-gray-200 border w-full  flex flex-col gap-4 rounded-xl bg-white">
              <div className="border-b-gray-200 border-b-[1px] w-full p-4">
              <h2 className="text-[16px] font-semibold text-gray-800 ">
                Add Money
              </h2>
              </div>
              <div className="w-full px-[30px] flex flex-col gap-[20px]">
              <div className="flex flex-col">
             
                <input
                  type="text"
                  className="border bg-[#fcfcfc] placeholder:font-semibold placeholder:text-gray-400 placeholder:text-[14px] border-gray-300 rounded px-3 py-2 outline-none focus:ring-1 focus:ring-blue-200"
                  placeholder="Amount"
                />
              </div>

              <div className="flex flex-col">
                
                <input
                  type="date"
                  className="border bg-[#fcfcfc] placeholder:font-semibold placeholder:text-gray-400 placeholder:text-[14px] text-gray-800 text-[14px] border-gray-300 rounded px-3 py-2 outline-none focus:ring-1 focus:ring-blue-200"
                />
              </div>

              <div className="flex flex-col">
               
                <input
                  type="text"
                  className="border bg-[#fcfcfc] placeholder:font-semibold placeholder:text-gray-400 placeholder:text-[14px] border-gray-300 rounded px-3 py-2 outline-none focus:ring-1 focus:ring-blue-200"
                  placeholder="UTR No"
                />
              </div>
              <div className="flex justify-between text-[14px] font-semibold text-gray-400 ">
                {["IMPS", "NEFT", "RTGS"].map((method) => (
                  <div key={method} className="flex items-center gap-2">
                    <input
                      id={method.toLowerCase()}
                      name="type"
                      type="radio"
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor={method.toLowerCase()}>{method}</label>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-800 pl-[3px]">
                Note: Max ₹5 lakh per transaction, real-time credit, works 24x7.
              </p>

              <button
                type="submit"
                className="bg-blue-600 text-white rounded px-4 py-2 hover:shadow-lg transition"
              >
                Process
              </button>

              </div>
             

            
             

            
            </form>

            <div className="sm:w-2/5 w-full flex flex-col  gap-5">
              <div className="flex items-center justify-between bg-white shadow rounded-xl p-5 h-[120px]">
                <div className="flex items-center gap-3">
                  <div className=" bg-gray-300 rounded-3xl w-[60px] h-[60px] flex items-center justify-center">
 <i className="fa-solid fa-wallet text-white text-xl"></i>
                  </div>
               
                
                  <div>
                    <h1 className="text-lg font-semibold text-gray-800">
                      Payout Fund
                    </h1>
                    <p className="text-sm text-gray-400">Active</p>
                  </div>
                </div>
                <h1 className="text-lg font-bold text-gray-800">
                  ₹ 8,60,518.33
                </h1>
              </div>

              <div className="flex items-center justify-between bg-white shadow rounded-xl p-5 h-[120px]">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-300 rounded-3xl w-[60px] h-[60px] flex items-center justify-center">
                  <i className="fa-solid fa-credit-card text-white text-xl"></i>
                  </div>
                
                  <div>
                    <h1 className="text-lg font-semibold text-gray-800">
                      Card Balance
                    </h1>
                    <p className="text-sm text-gray-400">Active</p>
                  </div>
                </div>
                <h1 className="text-lg font-bold text-gray-800">₹ 0.00</h1>
              </div>

              <div className="bg-white shadow rounded-xl ">
               
                <div className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm text-gray-700">
                  {/* Table Row */}
                  <div className="grid grid-cols-2 border-b border-gray-300 px-4 py-4">
                  <h1 className="text-lg font-semibold text-gray-800 ">
                  Account Details
                </h1>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-300 px-4 py-4">
                    <p className="font-medium text-gray-600">Account Name:</p>
                    <p className="text-right font-semibold text-gray-800">
                      Aakash
                    </p>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-300 px-4 py-4">
                    <p className="font-medium text-gray-600">A/C No:</p>
                    <p className="text-right font-semibold text-gray-800">
                      BB559900000036
                    </p>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-300 px-4 py-4">
                    <p className="font-medium text-gray-600">IFSC Code:</p>
                    <p className="text-right font-semibold text-gray-800">
                      HDFC0000060
                    </p>
                  </div>
                  <div className="grid grid-cols-2 px-4 py-4">
                    <p className="font-medium text-gray-600">Bank Name:</p>
                    <p className="text-right font-semibold text-gray-800">
                      HDFC Bank Ltd
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow rounded-xl ">
               
                <div className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm text-gray-700">
                  {/* Table Row */}
                  <div className="grid grid-cols-2 border-b border-gray-300 px-4 py-4">
                  <h1 className="text-lg font-semibold text-gray-800 ">
                  Account Details
                </h1>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-300 px-4 py-4">
                    <p className="font-medium text-gray-600">Account Name:</p>
                    <p className="text-right font-semibold text-gray-800">
                    Busybox Payout Account
                    </p>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-300 px-4 py-4">
                    <p className="font-medium text-gray-600">A/C No:</p>
                    <p className="text-right font-semibold text-gray-800">
                    016081300000116
                    </p>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-300 px-4 py-4">
                    <p className="font-medium text-gray-600">IFSC Code:</p>
                    <p className="text-right font-semibold text-gray-800">
                    YESB0000160
                    </p>
                  </div>
                  <div className="grid grid-cols-2 px-4 py-4">
                    <p className="font-medium text-gray-600">Bank Name:</p>
                    <p className="text-right font-semibold text-gray-800">
                    Yes Bank Ltd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full px-[20px] mt-[20px]">
          <div className="flex w-[100%] h-full flex-col border-gray-100 border-[1px] bg-white rounded-xl   overflow-y-auto">
           
           <div className="text flex justify-between items-center p-4  h-full w-full">
           <h2 className="text-[16px]  font-semibold text-gray-800 ">
              Last 10 Transactions
            </h2>
            <div className="border-gray-300 border-[1px] p-2 px-[20px] rounded-[8px] ">
              <p className="text-[12px]  font-medium text-gray-500 ">See More Transaction</p>
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
        <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#1f1f1f" className="-mt-[4px]">
        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
      </svg>
    </div>
  </div>
</th>

                  <th className="px-4 py-4"> <div className="flex items-center space-x-1">
    <p>UTR</p>
    <div className="flex flex-col justify-center items-center leading-none">
      <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#dbdad7" className="-mb-[4px]">
        <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#1f1f1f" className="-mt-[4px]">
        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
      </svg>
    </div>
  </div></th>
                  <th className="px-4 py-4"> <div className="flex items-center space-x-1">
    <p>Account Details</p>
    <div className="flex flex-col justify-center items-center leading-none">
      <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#1f1f1f" className="-mb-[4px]">
        <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#dbdad7" className="-mt-[4px]">
        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
      </svg>
    </div>
  </div></th>
                  <th className="px-4 py-4"><div className="flex items-center space-x-1">
    <p>Amount</p>
    <div className="flex flex-col justify-center items-center leading-none">
      <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#1f1f1f" className="-mb-[4px]">
        <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#dbdad7" className="-mt-[4px]">
        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
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
                        className={`text-white rounded-[3px] px-[13px] py-[2px] text-center content-center min-w-[80px] h-[5px] w-[80px] font-bold text-[12px] ${
                          txn.status === "Success"
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
        </div>

        <footer className="w-full min-h-[60px] flex px-[20px] justify-between items-center">
          <h1 className="text-gray-500 text-[14px]">2024© Busybox.</h1>
          <div
            style={{ fontFamily: "montserrat" }}
            className="flex min-w-[235px] text-[14px] w-[235px] h-full items-center gap-[10px] text-gray-500 justify-between"
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

export default Addmoney;
