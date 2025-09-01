import Navbar from "../../component/NavBar";
import moonImage from "../../assets/destination/image-europa.png"
import SubNavbar from "../../component/SubNavbar";
function Europa() {
  return (
    <main className="min-h-screen bg-[url(./assets/destination/background-destination-mobile.jpg)] bg-cover bg-no-repeat md:bg-[url(./assets/destination/background-destination-tablet.jpg)] md:bg-cover md:bg-no-repeat lg:bg-[url(./assets/destination/background-destination-desktop.jpg)] lg:bg-cover lg:bg-no-repeat">
      <Navbar />
      <section className=" px-4 mt-[3rem] md:h-dvh">
        <h1 className="text-white font-[barlow_condensed] text-[1rem] text-center tracking-[15%] mb-[3rem] md:text-[1.7rem] md:pl-[1.2rem] md:text-left lg:pl-[1.7rem]">
          <span className=" text-[white] font-bold font-[barlow_condensed] tracking-[4.72px] pr-[1rem] md:text-[1.6rem] lg:pl-[4.5rem] lg:text-[1.7rem]">
            01
          </span>
          PICK YOUR DESTINATION
        </h1>

        <div className="lg:flex lg:justify-evenly lg:mt-[4rem]">
          <div className="flex justify-center  mb-[3rem] lg:justify-start lg:pl-[3rem] ">
            <img
              src={moonImage}
              alt="moon"
              className="w-[9.4rem] aspect-square  animate-moon  md:w-[18.6rem] lg:w-[30rem]"
            />
          </div>

          <div className=" flex flex-col items-center lg:items-start ">
            <SubNavbar />
            <h2 className="text-white text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-[Bellefair]">
              EUROPA
            </h2>
            <p className="text-[#D0D6F9] text-center text-[0.9rem] leading-[180%]  font-[Barlow] w-[20.5rem] md:w-[32.2rem] md:text-[1rem]  lg:text-left lg:w-[27.8rem] lg:leading-[180%] lg:text-[1.2rem]">
              The smallest of the four Galilean moons orbiting jupiter, Europa
              is a winter lover's dream. With an icy surface, it's perfect for a
              bit of ice skating, curling, hockey, or simple relaxation in your
              snug wintery cabin.
            </p>
            <hr className="bg-gray-300  w-[100%] mb-[1.5rem] mt-[1.5rem] md:w-[90%]" />
            <div className="flex flex-col items-center justify-evenly gap-[15px] mb-[3rem] md:flex-row md:justify-between md:w-[30rem] lg:justify-start lg:gap-[3.5rem]">
              <div>
                <h4 className="text-[#D0D6F9] text-center text-[0.9rem] tracking-[2px] md:tracking-[15%] lg:text-left">
                  AVG. DISTANCE
                </h4>
                <h4 className="text-[1.8rem] text-white text-center lg:text-left font-[Bellefair]">
                  628 MIL. KM
                </h4>
              </div>

              <div>
                <h4 className="text-[#D0D6F9] text-center lg:text-left lg:text-[0.9rem]">
                  EST. TRAVEL TIME
                </h4>
                <h4 className="text-[1.8rem] text-white text-center lg:text-left font-[Bellefair]">
                  3 YEARS
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Europa;
