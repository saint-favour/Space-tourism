import React from "react";

function Carousel() {
  return (
    <div className="flex caroul-dot gap-4 py-2 mt-[3.5rem] pb-[2rem]  lg:items-end lg:h-[100%]">
      <a
        href="#item1"
        className=" carousel-btns bg-[#ffffff1e] w-[0.63rem] h-[0.63rem] lg:w-[0.94rem] lg:h-[0.94rem]  rounded-[100%] active:bg-white"
      ></a>
      <a
        href="#item2"
        className=" carousel-btns bg-[#ffffff1e] w-[0.63rem] h-[0.63rem] lg:w-[0.94rem] lg:h-[0.94rem]  rounded-[100%] active:bg-white"
      ></a>
      <a
        href="#item3"
        className=" carousel-btns bg-[#ffffff1e] w-[0.63rem] h-[0.63rem] lg:w-[0.94rem] lg:h-[0.94rem]  rounded-[100%] active:bg-white"
      ></a>
      <a
        href="#item4"
        className=" carousel-btns bg-[#ffffff1e] w-[0.63rem] h-[0.63rem] lg:w-[0.94rem] lg:h-[0.94rem]  rounded-[100%] active:bg-white"
      ></a>
    </div>
  );
}

export default Carousel;

