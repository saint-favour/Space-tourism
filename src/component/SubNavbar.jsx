import { NavLink } from "react-router-dom";

function SubNavbar() {
  return (
    <>
      <nav className=" sub-active w-[100%] md:w-[25rem] font-[barlow_condensed]">
        <ul className="flex text-[#D0D6F9] text-[0.9rem] justify-evenly md:text-[1rem] lg:text-[1rem] lg:justify-start lg:gap-[1.5rem]">
          <li>
            <NavLink to="/Destination" end>MOON</NavLink>
          </li>
          <li>
            <NavLink to="/Destination/mars">MARS</NavLink>
          </li>
          <li>
            <NavLink to="/Destination/europa">EUROPA</NavLink>
          </li>
          <li>
            <NavLink to="/Destination/titian">TITAN</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SubNavbar;
