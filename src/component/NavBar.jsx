import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import brandLogo from "../assets/shared/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const image = [menu, close];

export default function Navbar() {
  const [show, setShow] = useState(null);
  const [prev, setPrev] = useState(image[0]);

  const changeMenu = () => {
    const currentIndex = image.indexOf(prev);
    const nextIndex = (currentIndex + 1) % image.length;
    setPrev(image[nextIndex]);
  };

  return (
    <header>
      <nav className="navbar text-[1rem] px-5  pt-7 md:pt-0 md:pr-0 lg:pt-8 font-[barlow_condensed]">
        <div className="flex-1 ">
          <Link to="/">
            <img
              src={brandLogo}
              alt="brandLogo"
              className="w-[2.5rem] aspect-square lg:ml-4"
            />
          </Link>
        </div>

        <ul className="nav-line nav-layout md:flex items-center justify-evenly desk-nav text-white md:w-[48rem]  md:h-[6rem] lg:h-[6rem] lg:w-[46rem]  max-md:hidden">
          <li>
            <NavLink to="/" className="cursor-pointer">
              <b>00</b>HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/Destination" className="menu-active cursor-pointer">
              <b>01</b> DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink to="/Crew" className="cursor-pointer">
              <b>02</b>CREW
            </NavLink>
          </li>
          <li>
            <NavLink to="/Technology" className="cursor-pointer">
              <b>03</b>TECHNOLOGY
            </NavLink>
          </li>
        </ul>

        <div className="flex-none relative">
          <button
            className="relative cursor-pointer z-50"
            onClick={() => setShow(!show)}
          >
            <img
              onClick={changeMenu}
              src={prev}
              alt="burgerMenu"
              className="w-[1.5rem] h-[1.4rem] md:hidden z-50"
            />
          </button>
          {!show ? null : (
            <nav className="side-blur absolute top-[-2.1rem] left-[-9.5rem] translate-x-[-18%] w-[15.9rem] h-[114.5dvh]   md:hidden">
              <ul className="flex flex-col  mt-[9rem] pt-[4rem] ml-[1.5rem] gap-6 text-white">
                <li>
                  <NavLink to="/">
                    <b>00</b>HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Destination" className="menu-active">
                    <b>01</b> DESTINATION
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Crew">
                    <b>02</b>CREW
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <b>03</b>TECHNOLOGY
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </nav>
    </header>
  );
}
