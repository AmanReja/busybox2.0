import React, { useEffect } from "react";
import Chart from "./Chart";
import Hdfc from "../assets/images/HDFC.png";
import { useSelector, useDispatch } from "react-redux";
import { getall_payoutlog_data } from "../redux/action";

const Report = () => {


  const dispatch = useDispatch();
  const payoutdata = useSelector((state) => state.payoutlog.payoutlog.data);
  



  useEffect(() => {
    dispatch(getall_payoutlog_data());
  }, [dispatch]);


  console.log(payoutdata, 15);

  console.log(Array.isArray(payoutdata));

  const fiterpayoutpending = payoutdata?.filter((payout,index)=>payout?.status=="PENDING")

  console.log(fiterpayoutpending);
  const fiterpayoutfailed = payoutdata?.filter((payout,index)=>payout?.status=="FAILED")

  console.log(33,fiterpayoutfailed);
  

  const failed = fiterpayoutfailed?.reduce((acc, item) => {


    const amount = parseFloat(item?.settlement_amount || 0);
    console.log(`Adding: ${amount}`);
    return acc + amount;
  }, 0);
  console.log(failed);


const pendingpayouts = fiterpayoutpending?.reduce((acc, item) => {
  const amount = parseFloat(item?.settlement_amount || 0);
  console.log(`Adding: ${amount}`);
  return acc + amount;
}, 0);
console.log(pendingpayouts);












const payouts = payoutdata?.reduce((acc, item) => {
  const amount = parseFloat(item?.settlement_amount || 0);
  console.log(`Adding: ${amount}`);
  return acc + amount;
}, 0);
console.log(payouts);



const statusCounts = payoutdata?.reduce((acc, item) => {
  acc[item.status] = (acc[item.status] || 0) + 1;
  return acc;
}, {});




console.log(56,statusCounts);

const totalstatus = (statusCounts?.SUCCESS+statusCounts?.FAILED+statusCounts?.PENDING);
const Successrate = (statusCounts?.SUCCESS / totalstatus) * 100


console.log(Successrate);
  








  
  return (
    <div className=" w-[100%] rounded-2xl 2xl:h-[85%] h-[80%] flex flex-col">
      <main className="w-full h-full flex flex-col overflow-y-scroll">
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
      { label: 'Payout Value', value: payouts },
      { label: 'Success Rate', value: `${Successrate}%` },
      { label: 'Pending Payouts', value: pendingpayouts },
      { label: 'Failure', value: failed},
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
          <div className="flex w-[100%] h-full flex-col border-gray-100 border-[1px] bg-white rounded-xl   overflow-y-auto">
           
          <div className="flex justify-between items-center p-4 w-full flex-wrap gap-4 bg-white shadow-sm rounded-md">
  {/* Title */}
  <h2 className="text-lg font-semibold text-gray-800">
    Payout Transaction Report
  </h2>

  {/* Controls */}
  <div className="flex gap-3 flex-wrap items-center">
    {/* Date Picker */}
    <div className="border border-gray-300 px-4 py-1 rounded-lg bg-white flex items-center justify-center ">
    <i class="fa-regular text-gray-400 fa-calendar-days"></i>
  <input
    type="date"
    className="outline-none text-sm  w-[90px] text-gray-700 bg-transparent hide-date-icon"
    value="2025-07-27"
  />
  <span className="text-gray-500">-</span>
  <input
    type="date"
    value="2025-08-27"
    className="outline-none text-sm w-[90px] text-gray-700 bg-transparent hide-date-icon"
  />
</div>


    {/* Search with icon */}
    <div className="relative border border-gray-300 px-2 py-1 rounded-lg bg-white">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
      <i class="fa-solid fa-magnifying-glass"></i>
      </span>
      <input
        type="text"
        placeholder="Search transaction"
        className="pl-8 pr-2 outline-none text-sm text-gray-700 bg-transparent"
      />
    </div>

    {/* Select dropdown */}
    <div className="border border-gray-300 px-4 py-1 rounded-lg bg-white">
      <select className="text-sm text-gray-700 bg-transparent outline-none">
        <option value="All Transactions">All Transactions</option>
        <option value="Success">Success</option>
        <option value="Pending">Pending</option>
        <option value="Failed" selected>Failed</option>
      </select>
    </div>

    {/* Download button */}
    <button className="text-sm font-medium text-gray-700  hover:shadow-xl border-gray-300 border-1  px-4 py-1 rounded-lg transition">
      <span><i class="fa-solid fa-download text-gray-400"></i></span>Download
    </button>
  </div>
</div>

           
            <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-[11px] text-gray-400 uppercase border-b bg-gray-50 border-gray-300 border-t">
                <tr>
                  <th className="px-4 py-3">#Status</th>
                  <th className="px-4 py-3">
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

                  <th className="px-4 py-3"> <div className="flex items-center space-x-1">
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
                  <th className="px-4 py-3"> <div className="flex items-center space-x-1">
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
                  <th className="px-4 py-3"><div className="flex items-center space-x-1">
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
                  <th className="px-4 py-3"><div className="flex items-center space-x-1">
    <p>Txn Charges</p>
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
                {payoutdata?.map((txn, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-4 py-2">
                      <span
                        className={`text-white rounded-[3px] px-[13px] py-[2px] text-center content-center min-w-[80px] h-[5px] w-[80px] font-bold text-[12px] ${
                          txn.status === "SUCCESS"
                            ? "bg-green-400"
                            : txn.status === "PENDING"
                            ? "bg-yellow-400"
                            : "bg-red-400"
                        }`}
                      >
                        {txn.status}
                      </span>
                    </td>
                    <td className="px-4 py-5">{txn.txn_date}</td>
                    <td className="px-4 py-5">
                    <div className="flex flex-col">
                      <p>UTR:{txn.rrn}</p>
                      <p>[request ID:#{txn.paytmOrderId}]</p>
                    </div>
                    </td>
                    <td className="px-4 py-5">
                    <div className="flex flex-col">
                      <p>A/C:{txn.account_no
}</p>
                      <p>[IFSC Code:{txn.ifsc_code}]</p>
                    </div>
                    </td>
                    <td className="px-4 py-5">
                      {txn.settlement_amount}
                    </td>
                    <td className="px-4 py-5">
                      {txn.settlement_charge}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

       
      </main>
    </div>
  );
};

export default Report;
