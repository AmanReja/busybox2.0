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
    <div className="w-full rounded-2xl h-auto flex flex-col">
      <main className="w-full flex flex-col overflow-y-scroll">
        <section className="w-full flex flex-col lg:flex-row gap-5 mt-5 px-4">
          <div className="w-full flex flex-col lg:flex-row gap-5 bg-white p-5 rounded-xl">
            {/* Form Section */}
            <form className="w-full lg:w-1/3 flex flex-col gap-4 rounded-xl bg-white shadow p-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Add Money
              </h2>

              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-600">Amount</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter amount"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-600">Date</label>
                <input
                  type="date"
                  className="border text-gray-400 border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-600">UTR No</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter UTR number"
                />
              </div>

              <div className="flex justify-between text-sm text-gray-700 flex-wrap gap-y-2">
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

              <p className="text-xs text-gray-500">
                Note: Max ₹5 lakh per transaction, real-time credit, works 24x7.
              </p>

              <button
                type="submit"
                className="bg-blue-600 text-white rounded px-4 py-2 hover:shadow-lg transition"
              >
                Process
              </button>
            </form>

            {/* Balance + Account Section */}
            <div className="w-full lg:w-2/3 flex flex-col gap-5">
              <div className="flex items-center justify-between bg-white shadow rounded-xl p-5 min-h-[120px]">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-credit-card text-blue-600 text-xl"></i>
                  <div>
                    <h1 className="text-lg font-semibold text-gray-800">
                      Payout Fund
                    </h1>
                    <p className="text-sm text-green-600">Active</p>
                  </div>
                </div>
                <h1 className="text-lg font-bold text-gray-800">
                  ₹ 8,60,518.33
                </h1>
              </div>

              <div className="flex items-center justify-between bg-white shadow rounded-xl p-5 min-h-[120px]">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-wallet text-blue-600 text-xl"></i>
                  <div>
                    <h1 className="text-lg font-semibold text-gray-800">
                      Card Balance
                    </h1>
                    <p className="text-sm text-green-600">Active</p>
                  </div>
                </div>
                <h1 className="text-lg font-bold text-gray-800">₹ 0.00</h1>
              </div>

              <div className="bg-white shadow rounded-xl p-5">
                <h1 className="text-lg font-semibold text-gray-800 mb-4">
                  Account Details
                </h1>
                <div className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm text-gray-700">
                  {[
                    ["Account Name:", "Aakash"],
                    ["A/C No:", "BB559900000036"],
                    ["IFSC Code:", "HDFC0000060"],
                    ["Bank Name:", "HDFC Bank Ltd"],
                  ].map(([label, value], idx) => (
                    <div
                      key={idx}
                      className={`grid grid-cols-2 px-4 py-2 ${
                        idx !== 3 ? "border-b border-gray-300" : ""
                      }`}
                    >
                      <p className="font-medium text-gray-600">{label}</p>
                      <p className="text-right font-semibold text-gray-800">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transaction Table */}
        <div className="w-full px-4 mt-5">
          <div className="flex w-full h-full flex-col bg-white rounded-xl shadow-md p-5 overflow-x-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Last 10 Transactions
            </h2>
            <table className="min-w-[600px] w-full text-sm text-left text-gray-600">
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
        </div>

        {/* Footer */}
        <footer className="w-full min-h-[60px] flex px-4 justify-between items-center mt-4 flex-wrap gap-2 text-sm">
          <h1 className="text-gray-500">2024© Busybox.</h1>
          <div
            style={{ fontFamily: "montserrat" }}
            className="flex flex-wrap gap-4 text-gray-500"
          >
            <a href="#">Docs</a>
            <a href="#">FAQ</a>
            <a href="#">Support</a>
            <a href="#">License</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Addmoney;
