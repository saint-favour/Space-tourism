import Navbar from "../component/NavBar";
import Moon from "../assets/destination/image-moon.webp";
import Moon2 from "../assets/destination/image-moon.png";

function Destination() {
  return (
    <main className="bg-[url(./assets/destination/background-destination-mobile.jpg)] md:bg-[url(./assets/destination/background-destination-tablet.jpg)] lg:bg-[url(./assets/destination/background-destination-desktop.jpg)] ">
      <Navbar />
      <section className="px-4 mt-[3rem] md:h-dvh">
        <h1 className="text-white text-[1.1rem] text-center tracking-wide mb-[3rem] md: md:text-[1.3rem] md:pl-[1.2rem] md:text-left lg:pl-[2rem]">
          <span className="text-gray-400 pr-[1rem] lg:pl-[4.5rem]">01</span>{" "}
          PICK YOUR DESTINATION
        </h1>

        <div className="lg:flex lg:justify-evenly lg:mt-[4rem]">
          <div className="flex justify-center  mb-[3rem] lg:justify-start lg:pl-[3rem] ">
            <img
              src={Moon2}
              alt="moon"
              className="w-[15rem]   animate-moon  md:w-[20rem] lg:w-[25rem] "
            />
          </div>

          <div className=" flex flex-col items-center lg:items-start ">
            <nav className=" w-[100%] md:w-[25rem]">
              <ul className="flex text-white text-[1.2rem] justify-evenly md:text-[1.3rem] lg:text-[1.1rem] lg:justify-start lg:gap-[1.5rem]">
                <li className="h-[3rem] hover:border-b-2 cursor-pointer">
                  <a href="">MOON</a>
                </li>
                <li className="h-[3rem] hover:border-b-2 cursor-pointer">
                  <a href="">MARS</a>
                </li>
                <li className="h-[3rem] hover:border-b-2 cursor-pointer">
                  <a href="">EUROPA</a>
                </li>
                <li className="h-[3rem] hover:border-b-2 cursor-pointer">
                  <a href="">TITAN</a>
                </li>
              </ul>
            </nav>
            <h2 className="text-white text-[4rem] md:text-[5.8rem]">MOON</h2>
            <p className="text-gray-200 text-center md:w-[45rem] md:text-[1.2rem] lg:text-left lg:w-[30rem] lg:leading-[1.6rem]">
              See our planet as yo've ever seen it before. A perfect relaxing
              trip to help regain perspective and come back refreshed. While
              you're there, take in some history by visiting the luna 2 and
              Apollo 11 landing sites.
            </p>
            <hr className="bg-gray-300  w-[100%] mb-[1.5rem] mt-[1.5rem] md:w-[90%]" />
            <div className="flex flex-col items-center justify-evenly gap-[15px] mb-[3rem] md:flex-row md:justify-between md:w-[30rem] lg:justify-start lg:gap-[3.5rem]">
              <div>
                <h4 className="text-gray-200 text-center lg:text-left lg:text-[0.9rem]">
                  AVG. DISTANCE
                </h4>
                <h4 className="text-[1.7rem] text-white text-center lg:text-left">
                  384,400 KM
                </h4>
              </div>

              <div>
                <h4 className="text-gray-200 text-center lg:text-left lg:text-[0.9rem]">
                  EST. TRAVEL TIME
                </h4>
                <h4 className="text-[1.7rem] text-white text-center lg:text-left">
                  3 DAYS
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Destination;
