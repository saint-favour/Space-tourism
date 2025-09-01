import { NavLink } from "react-router-dom";

function CarouselTech() {
  return (
    <div className="flex w-full justify-center gap-4 py-2 tech-btn mb-[1rem] mt-[1rem] lg:flex-col lg:w-[0]">
      <NavLink
        to="/Technology/launch-Vehicle"
        className="btn btn-xs bg-[#fdfbfb00]  text-white rounded-[100%] w-[2.5rem] h-[2.5rem] md:w-[3.5rem] md:h-[3.5rem] lg:w-[5rem] lg:h-[5rem] active:bg-white active:text-black"
      >
        1
      </NavLink>
      <NavLink
        to="/Technology/Space-Port"
        className="btn btn-xs bg-[#ffffff00]  text-white rounded-[100%] w-[2.5rem] h-[2.5rem] md:w-[3.5rem] md:h-[3.5rem] lg:w-[5rem] lg:h-[5rem] active:bg-white active:text-black"
      >
        2
      </NavLink>
      <NavLink
        to="/Technology/Space-Capsule"
        className="btn btn-xs bg-[#ffffff00]  text-white rounded-[100%] w-[2.5rem] h-[2.5rem] md:w-[3.5rem] md:h-[3.5rem] lg:w-[5rem] lg:h-[5rem] active:bg-white active:text-black"
      >
        3
      </NavLink>
    </div>
  );
}

export default CarouselTech;
