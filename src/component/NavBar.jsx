import menu from "../assets/shared/icon-hamburger.svg";
import brandLogo from "../assets/shared/logo.svg";
import { useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(0)
  return (
    <header>
      <nav className="navbar px-9  pt-7">
        <div className="flex-1">
          <a href="">
            <img src={brandLogo} alt="burgermenu" />
          </a>
        </div>
        <div className="flex-none relative">
          <button
            className="relative cursor-pointer z-50"
            onClick={() => setShow(!show)}
          >
            <img src={menu} alt="burgermenu" className="w-[2.3rem]" />
          </button>
          {!show ? null : (
            <ul className="absolute top-[-2rem] left-[-9.5rem] translate-x-[=100%] duration-1000 bg-base-200 opacity-50 w-56 h-dvh">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a className="menu-active">Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}


/* <TiThMenu onClick={() => setShow(!show)} className="ham" />;
{
  !show ? null : (
    <Slide>
      <ul className="nav-link">
        <a href="#">
          <li>Collections</li>
        </a>
        <a href="#">
          <li>Men</li>
        </a>
        <a href="#">
          <li>Women</li>
        </a>
        <a href="#">
          <li>About</li>
        </a>
        <a href="#">
          <li>Contact</li>
        </a>
      </ul>
    </Slide>
  );
} */
