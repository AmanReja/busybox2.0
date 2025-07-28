import React, { useEffect } from "react";
import Chart from "./Chart";
import Hdfc from "../assets/images/HDFC.png";

const Report = () => {
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
      <section className="w-full px-5 mt-5">
      <div className="w-full h-[80px]  bg-white flex items-center px-5 ">
  <div className="flex gap-[5px] h-full items-center w-full">
    
    <h1 className="text-xl content-center font-semibold text-gray-800">Payout Report</h1>

    <div className="flex items-center text-sm text-gray-500 space-x-1 mt-1 sm:mt-0">
      <a href="#" className="hover:underline text-gray-400">Home</a>
      <span>/</span>
      <a href="#" className="hover:underline text-gray-400">Report</a>
      <span>/</span>
      <span className="text-gray-700 font-medium">Payout Transaction Report</span>
    </div>

  </div>
</div>

  <div className="flex flex-col sm:flex-row gap-5 bg-white  rounded-xl p-5">
    {[
      { label: 'Payout Value', value: '₹663,062.00' },
      { label: 'Success Rate', value: '0.0%' },
      { label: 'Pending Payouts', value: '₹10,000.00' },
      { label: 'Failure', value: '₹18,870.00' },
    ].map((item, index) => (
      <div
        key={index}
        className="flex-1 flex flex-col items-center justify-center text-center  rounded-lg p-4 shadow-sm hover:shadow-md transition"
      >
        <h1 className="text-2xl font-semibold text-gray-800">{item.value}</h1>
        <p className="text-sm text-gray-500 mt-1">{item.label}</p>
      </div>
    ))}
  </div>
</section>


        <div className="w-full px-[20px] mt-[20px]">
          <div className="flex w-[100%] h-full flex-col bg-white rounded-xl shadow-md p-5 overflow-y-auto">
          <div className="w-full  bg-white p-5 rounded-xl ">
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
    
    {/* Heading */}
    <h2 className="text-xl font-semibold text-gray-800">
      Payout Transaction Report
    </h2>

    {/* Filters Section */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
      
      {/* Date Picker */}
      <div className="flex items-center gap-2">
  <input
    type="date"
    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <span className="text-gray-500">-</span>
  <input
    type="date"
    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

      {/* Search Input */}
      <input 
        type="text" 
        placeholder="Search transactions" 
        className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Dropdown */}
      <select 
        className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Transactions</option>
        <option value="Success">Success</option>
        <option value="Pending">Pending</option>
        <option value="Failed">Failed</option>
      </select>
    </div>
  </div>
</div>

           
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="text-xs text-gray-700 uppercase border-b border-gray-300">
                <tr>
                  <th className="px-4 py-2">#Status</th>
                  <th className="px-4 py-2">Txn Date</th>
                  <th className="px-4 py-2">	
Txn Details</th>
                  <th className="px-4 py-2">Account Number</th>
                  <th className="px-4 py-2">Txn Amount</th>
                  <th className="px-4 py-2">Txn Charges</th>
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

export default Report;
