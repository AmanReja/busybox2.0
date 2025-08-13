import React from "react";

const Subfooter = () => {
  return (
    <>
      <footer className="w-full min-h-[60px]  relative flex px-[20px] justify-between items-center">
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
    </>
  );
};

export default Subfooter;
