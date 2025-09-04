import { useLocation } from "react-router-dom";

// component carousel for crew page
function Carousel() {
  // useLocation targets the link
  const location = useLocation();

  return (
    <div className="flex caroul-dot gap-4 py-2 mt-[3.5rem] pb-[2rem]  lg:items-end lg:h-[100%]">
      <a
        href="#item1"
        className={`carousel-btns w-[0.63rem] h-[0.63rem] lg:w-[0.94rem] lg:h-[0.94rem]  rounded-[100%]  
          ${location.hash === "#item1" ? "bg-white" : "bg-[#ffffff1e]"}`}
      ></a>
      <a
        href="#item2"
        className={`carousel-btns w-[0.63rem] h-[0.63rem] lg:w-[0.94rem] lg:h-[0.94rem]  rounded-[100%]  
          ${location.hash === "#item2" ? "bg-white" : "bg-[#ffffff1e]"}`}
      ></a>
      <a
        href="#item3"
        className={`carousel-btns w-[0.63rem] h-[0.63rem] lg:w-[0.94rem] lg:h-[0.94rem]  rounded-[100%]  
          ${location.hash === "#item3" ? "bg-white" : "bg-[#ffffff1e]"}`}
      ></a>
      <a
        href="#item4"
        className={`carousel-btns w-[0.63rem] h-[0.63rem] lg:w-[0.94rem] lg:h-[0.94rem]  rounded-[100%]  
          ${location.hash === "#item4" ? "bg-white" : "bg-[#ffffff1e]"}`}
      ></a>
    </div>
  );
}

export default Carousel;
