import React, { useEffect } from "react";
import Chart from "./Chart";
import Hdfc from "../assets/images/HDFC.png";
import { Outlet } from "react-router-dom";

const Payout = () => {
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
      <main className="w-full   sm:h-[546px] flex flex-col overflow-y-scroll">
        <section className="w-full flex flex-col sm:flex-row  gap-[20px]  sm:min-h-[600px] sm:h-[600px]  px-[20px]">
          <div className="flex w-full  sm:w-[35%] h-full bg-white rounded-xl shadow-md p-5">
            <form className="flex flex-col gap-4 w-full  px-[20px]">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Single Payout Transaction
              </h2>

              <div className="flex flex-col">
                <input
                  type="text"
                  className="border border-gray-300 rounded px-3 py-2 outline-none focus:ring focus:ring-blue-200"
                  placeholder="Select Debit Account"
                />
              </div>

              <div className="flex flex-col">
                <input
                  type="email"
                  className="border border-gray-300 rounded px-3 py-2 outline-none focus:ring focus:ring-blue-200"
                  placeholder="Account Number"
                />
              </div>

              <div className="flex flex-col">
                <input
                  type="text"
                  className="border border-gray-300 rounded px-3 py-2 outline-none focus:ring focus:ring-blue-200"
                  placeholder="IFSC Code"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="border border-gray-300 rounded px-3 py-2 outline-none focus:ring focus:ring-blue-200"
                  placeholder="Beneficiary Name"
                />
              </div>
              <div className="flex justify-between w-full">
                <div className="flex items-center gap-[5px]">
                  <input
                    id="imbs"
                    name="type"
                    className="w-[25px] h-[25px] checked:text-blue-400"
                    type="radio"
                  />
                  <label className="custom-radio" htmlFor="imbs">
                    IMPS
                  </label>
                </div>
                <div className="flex items-center gap-[5px]">
                  <input
                    id="neft"
                    name="type"
                    className="w-[25px] h-[25px]"
                    type="radio"
                  />
                  <label htmlFor="neft">NEFT</label>
                </div>
                <div className="flex items-center gap-[5px]">
                  <input
                    id="rtgs"
                    name="type"
                    className="w-[25px] h-[25px]"
                    type="radio"
                  />
                  <label htmlFor="rtgs">RTGS</label>
                </div>
              </div>
              <p className="w-full text-[12px]">
                Note: Max ₹5 lakh per transaction, real-time credit, works 24x7.
              </p>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="border border-gray-300 rounded px-3 py-2 outline-none focus:ring focus:ring-blue-200"
                  placeholder="Amount"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white rounded px-4 py-2 hover:shadow-xl hover:shadow-blue-400 transition text-left"
              >
                Process
              </button>
            </form>
          </div>

          <div className="flex w-full sm:w-[65%] h-full flex-col bg-white rounded-xl shadow-md p-5 overflow-y-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Last 10 Transactions
            </h2>
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="text-xs text-gray-700 uppercase border-b border-gray-300">
                <tr>
                  <th className="px-4 py-2">#Status</th>
                  <th className="px-4 py-2">Txn Date</th>
                  <th className="px-4 py-2">UTR</th>
                  <th className="px-4 py-2">Account Details</th>
                  <th className="px-4 py-2">Amount</th>
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

export default Payout;
