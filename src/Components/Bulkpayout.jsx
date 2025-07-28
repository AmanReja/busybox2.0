import React, { useEffect } from "react";
import Chart from "./Chart";
import Hdfc from "../assets/images/HDFC.png";
import { Outlet } from "react-router-dom";

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
    <div className=" w-[100%] rounded-2xl sm:h-[500px] h-[600px] flex flex-col">
      <main className="w-full h-[600px]  sm:h-[475px] flex flex-col overflow-y-scroll">
        <section className="w-full flex flex-col sm:flex-row  gap-[20px]   sm:min-h-[600px] sm:h-[600px] px-[2px] sm:px-[20px]">
          <div className="flex w-full  sm:w-[35%] h-full bg-white  p-5">
            <form className="flex flex-col border gap-6 w-full rounded-[10px] border-gray-300 shadow-md ">
              <h2 className="text-xl font-semibold h-[60px] text-center content-center border-gray-300 text-gray-800 mb-2 border-b-[1px] ">
              Bulk Payout Transaction
              </h2>

             
                <div className="w-full px-[10px] flex-col flex gap-[10px]">
                <div className="flex p-4 flex-col text-gray-500 text-xl">
              Effortless Bulk Payouts for Businesses
              </div>
              <div className="w-full px-[30px] py-[40px]">
              <div className="flex p-4 flex-col border-dashed h-[200px]   border-gray-300 justify-center items-center border-[1px]">
                <input 
                  type="file"
                  id="Preview"
                  className="border border-gray-300 hidden rounded px-3  outline-none focus:ring focus:ring-blue-200"
                  placeholder="Select Debit Account"
                />
                <label className="text-gray-400" htmlFor="Preview">Drag And Drop Preview</label>
              </div>
              </div>
             
              <p className="w-full text-[14px] text-blue-500">
                
              Download CSV Template
              <div className="w-[150px] border-b-blue-400 border-dashed border-[1px] "></div>
              </p>
             
              

              <button
                type="submit"
                className="bg-blue-600 w-full text-white rounded px-4 py-2 hover:shadow-xl hover:shadow-blue-400 transition text-left"
              >
                Process
              </button>
                </div>
              
             

           

            
              
             
             
            </form>
          </div>

          <div className="flex w-full sm:w-[65%] h-full flex-col bg-white rounded-xl shadow-md p-2 sm:p-5 overflow-y-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Last 10 Transactions
            </h2>
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="text-xs text-gray-700 uppercase border-b border-gray-300">
                <tr>
                  <th className="px-4 py-2">#FileStatus</th>
                  <th className="px-4 py-2">Txn Date
</th>
                  <th className="px-4 py-2">TxnID</th>
                  <th className="px-4 py-2">File Name
</th>
                  <th className="px-4 py-2">Total Amount</th>
                  <th className="px-4 py-2">Action
</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-4 py-2">
                      <span
                        className={`text-white rounded-[2px] p-1 text-[10px] ${
                          txn.status === "Success"
                            ? "bg-green-500"
                            : txn.status === "Pending"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      >
                        {txn.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">{txn.date}</td>
                    <td className="px-4 py-2">{txn.utr}</td>
                    <td className="px-4 py-2">{txn.account}</td>
                    <td className="px-4 py-2">
                      ₹{txn.amount.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
