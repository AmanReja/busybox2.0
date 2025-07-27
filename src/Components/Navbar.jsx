import React from "react";
import busybox from "../assets/icons/busybox.png";
import i5 from "../assets/images/5.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-[100%] bg-sky-100 h-[40px] flex justify-between px-[12px] items-center mt-[20px]">
      <img className="sm:h-[45px] h-[30px]" src={busybox} alt="" />

      <div className="flex items-center gap-[20px]">
        <Link to={"/dashboard/addmoney"}>
          <button className="bg-blue-500 hover:ring-2 hover:ring-blue-500 hover:shadow-lg hover:shadow-blue-500/50 text-[12px] text-white rounded w-[100px] h-[30px] transition duration-300">
            + Add Money
          </button>
        </Link>

        <i class="fa-regular fa-bell"></i>
        <img className="w-[30px] h-[30px] rounded-full" src={i5} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
