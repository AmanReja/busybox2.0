import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import Hdfc from "../assets/images/HDFC.png";
import { Outlet ,Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getall_payoutlog_data } from "../redux/action";

const Payout = () => {
  const dispatch = useDispatch();
  const payoutdata = useSelector((state) => state.payoutlog.payoutlog.data);
  console.log(payoutdata, 55);
  const [searchtr, setSearchtr] = useState("");
  const [trstatus, setTrstatus] = useState("");



  useEffect(() => {
    async function fetchdata() {
   

   await dispatch(getall_payoutlog_data());
  
    }fetchdata();
  }, [dispatch]);

  return (
    <div className=" w-[100%] rounded-2xl 2xl:h-[85%] xl:h-[80%] h-[78%] flex flex-col">
      <main className="w-full h-full  flex flex-col overflow-y-scroll">
        <section className="w-full flex flex-col sm:flex-row  gap-[20px] mt-[20px] sm:min-h-[600px] 2xl:h-[780px]  sm:h-[600px] px-[2px] sm:px-[20px]">
          <form className="sm:w-[30%] border-gray-200 border w-full  flex flex-col gap-4 rounded-xl bg-white">
            <div className="border-b-gray-200 border-b-[1px] w-full p-4">
              <h2 className="text-[16px] font-semibold text-gray-800 ">
                Single Payout Transaction
              </h2>
            </div>
            <div className="w-full px-[30px] flex flex-col gap-[20px]">
              <div className="flex flex-col font-sans">
                <input
                  type="text"
                  className="border bg-[#fcfcfc] placeholder:font-semibold placeholder:text-gray-400 placeholder:text-[14px] border-gray-300 rounded px-3 py-2 outline-none focus:ring-1 focus:ring-blue-200"
                  placeholder="Select Debit Account"
                />
              </div>
              <div className="flex flex-col font-sans">
                <input
                  type="text"
                  className="border bg-[#fcfcfc] placeholder:font-semibold placeholder:text-gray-400 placeholder:text-[14px] border-gray-300 rounded px-3 py-2 outline-none focus:ring-1 focus:ring-blue-200"
                  placeholder="Account Number"
                />
              </div>
              <div className="flex flex-col font-sans">
                <input
                  type="text"
                  className="border bg-[#fcfcfc] placeholder:font-semibold placeholder:text-gray-400 placeholder:text-[14px] border-gray-300 rounded px-3 py-2 outline-none focus:ring-1 focus:ring-blue-200"
                  placeholder="IFSC Code"
                />
              </div>
              <div className="flex flex-col font-sans">
                <input
                  type="text"
                  className="border bg-[#fcfcfc] placeholder:font-inter placeholder:font-semibold placeholder:text-gray-400 placeholder:text-[14px] border-gray-300 rounded px-3 py-2 outline-none focus:ring-1 focus:ring-blue-200"
                  placeholder="Benificiary Name"
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
              <p className="text-xs text-gray-800 pl-[10px]">
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

          <div className="flex sm:w-[68%] w-full h-full flex-col border-gray-100 border-[1px] bg-white rounded-xl   overflow-y-auto">
            <div className="text flex justify-between items-center p-4  h-[60px] w-full">
              <h2 className="text-[16px]  font-semibold text-gray-800 ">
                Last 10 Transactions
              </h2>
              <div className="border-gray-300 border-[1px] p-1 px-[20px] rounded-[8px] hover:shadow-gray-300 hover:shadow-xl duration-300 ">
                <Link  to={"/dashboard/report"} className="text-[12px]  font-medium text-gray-500 ">
                  See More Transaction
                </Link>
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="14px"
                          viewBox="0 -960 960 960"
                          width="14px"
                          fill="#1f1f1f"
                          className="-mb-[4px]"
                        >
                          <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="14px"
                          viewBox="0 -960 960 960"
                          width="14px"
                          fill="#1f1f1f"
                          className="-mt-[4px]"
                        >
                          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                        </svg>
                      </div>
                    </div>
                  </th>

                  <th className="px-4 py-4">
                    {" "}
                    <div className="flex items-center space-x-1">
                      <p>UTR</p>
                      <div className="flex flex-col justify-center items-center leading-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="14px"
                          viewBox="0 -960 960 960"
                          width="14px"
                          fill="#dbdad7"
                          className="-mb-[4px]"
                        >
                          <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="14px"
                          viewBox="0 -960 960 960"
                          width="14px"
                          fill="#1f1f1f"
                          className="-mt-[4px]"
                        >
                          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="px-4 py-4">
                    {" "}
                    <div className="flex items-center space-x-1">
                      <p>Account Details</p>
                      <div className="flex flex-col justify-center items-center leading-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="14px"
                          viewBox="0 -960 960 960"
                          width="14px"
                          fill="#1f1f1f"
                          className="-mb-[4px]"
                        >
                          <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="14px"
                          viewBox="0 -960 960 960"
                          width="14px"
                          fill="#dbdad7"
                          className="-mt-[4px]"
                        >
                          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="px-4 py-4">
                    <div className="flex items-center space-x-1">
                      <p>Amount</p>
                      <div className="flex flex-col justify-center items-center leading-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="14px"
                          viewBox="0 -960 960 960"
                          width="14px"
                          fill="#1f1f1f"
                          className="-mb-[4px]"
                        >
                          <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="14px"
                          viewBox="0 -960 960 960"
                          width="14px"
                          fill="#dbdad7"
                          className="-mt-[4px]"
                        >
                          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                        </svg>
                      </div>
                    </div>
                  </th>
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
                      <div></div>
                      {txn.txn_id}
                    </td>
                    <td className="px-4 py-5">{txn.account_no}</td>
                    <td className="px-4 py-5">{txn.settlement_amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Payout;
