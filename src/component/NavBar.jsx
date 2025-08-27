import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg"
import brandLogo from "../assets/shared/logo.svg";
import { useState} from "react";

const image = [menu, close]

export default function Navbar() {
  const [show, setShow] = useState(null);
  const [prev, setPrev] = useState(image[0])

  const changeMenu = () => {
    const currentIndex = image.indexOf(prev)
    const nextIndex = (currentIndex + 1) % image.length
    setPrev(image[nextIndex])
  }


  return (
    <header>
      <nav className="navbar px-5  pt-7 md:pt-0 md:pr-0 lg:pt-8">
        <div className="flex-1 ">
          <a href="">
            <img
              src={brandLogo}
              alt="brandLogo"
              className="w-[2.5rem] aspect-square lg:ml-4"
            />
          </a>
        </div>

        <ul className="nav-line nav-layout md:flex items-center justify-evenly bg-[#ffffff49] text-white  md:h-[5rem] lg:h-[4rem] lg:w-[44rem] w-[39rem] max-md:hidden">
          <li>
            <a className="cursor-pointer">
              <b>00</b>HOME
            </a>
          </li>
          <li>
            <a className="menu-active cursor-pointer">
              <b>01</b> DESTINATION
            </a>
          </li>
          <li>
            <a className="cursor-pointer">
              <b>02</b>CREW
            </a>
          </li>
          <li>
            <a className="cursor-pointer">
              <b>03</b>TECHNOLOGY
            </a>
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
              className="w-[1.5rem] md:hidden z-50"
            />
          </button>
          {!show ? null : (
            <nav className="side-blur absolute top-[-2.1rem] left-[-9.5rem] translate-x-[-18%] bg-[#fdfafa65]  w-60 h-[111dvh]   md:hidden">
              <ul className="flex flex-col mt-[9rem] ml-[1.5rem] gap-4 text-white">
                <li>
                  <a>
                    <b>00</b>HOME
                  </a>
                </li>
                <li>
                  <a className="menu-active">
                    <b>01</b> DESTINATION
                  </a>
                </li>
                <li>
                  <a>
                    <b>02</b>CREW
                  </a>
                </li>
                <li>
                  <a>
                    <b>03</b>TECHNOLOGY
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </nav>
    </header>
  );
}
