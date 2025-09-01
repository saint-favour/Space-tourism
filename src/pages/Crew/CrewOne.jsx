import Navbar from "../../component/NavBar";
import crewImage1 from "../../assets/crew/image-douglas-hurley.png";
import crewImage2 from "../../assets/crew/image-mark-shuttleworth.png";
import crewImage3 from "../../assets/crew/image-victor-glover.png";
import crewImage4 from "../../assets/crew/image-anousheh-ansari.png";
import Carousel from "../../component/Carousel";

function CrewOne() {
  return (
    <>
      <main className="bg-[url(./assets/crew/background-crew-mobile.jpg)] bg-cover bg-no-repeat md:bg-[url(./assets/crew/background-crew-tablet.jpg)] md:bg-cover md:bg-no-repeat lg:bg-[url(./assets/crew/background-crew-desktop.jpg)] lg:bg-cover lg:bg-no-repeat ">
        <Navbar />
        <div className="mt-[2rem] pt-[1rem]">
          <h1 className="text-white font-[barlow_condensed] text-[1rem] text-center tracking-[15%] mb-[3rem] md:text-[1.3rem] md:pl-[1.2rem] md:text-left lg:pl-[1.7rem] lg:text-[1.8rem] lg:tracking-[4px]">
            <span className=" text-[white] font-bold font-[barlow_condensed] tracking-[4.72px] pr-[0.9rem] md:text-[1.6rem] lg:pl-[3.2rem] lg:text-[1.7rem]">
              02
            </span>
            MEET YOUR CREW
          </h1>
        </div>
        <div className="carousel flex">
          <div id="item1" className="carousel-item w-full block">
            <section className="px-4">
              <div className="lg:flex lg:justify-around">
                <div className=" flex flex-col justify-center items-center lg:items-start lg:mt-[5rem] lg:pt-[5rem]">
                  <h2 className="text-[#D0D6F9] text-[1.13rem] md:text-[1.5rem] lg:text-[1.8rem] font-[Bellefair]">
                    COMMANDER
                  </h2>
                  <h2 className="text-white text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] font-[Bellefair]">
                    DOUGLAS HURLEY
                  </h2>
                  <p className="text-[#D0D6F9] text-center text-[0.94rem] leading-[180%]  font-[Barlow] w-[20.5rem] md:w-[32.1rem] md:text-[1rem]  lg:text-left lg:w-[33.7rem]  lg:text-[1.13rem]">
                    Douglas Gerald Hurley is an American engineer, former Marine
                    Corps pilot and former NASA astronaut. He launched into
                    space for the third time as commander of Crew Dragon Demo-2
                  </p>

                  <Carousel />
                </div>
                <div className="flex justify-center lg:justify-start lg:pl-[3rem] ">
                  <img
                    src={crewImage1}
                    alt="crew"
                    className=" w-[16.96rem] h-[21.3rem] md:w-[27.9rem] md:h-[35rem] lg:w-[33.71rem] lg:h-[45.9rem]"
                  />
                </div>
              </div>
            </section>
          </div>

          <div id="item2" className="carousel-item block w-full">
            <section className="px-4">
              <div className="lg:flex lg:justify-around">
                <div className=" flex flex-col justify-center items-center lg:items-start lg:mt-[5rem] lg:pt-[5rem]">
                  <h2 className="text-[#D0D6F9] text-[1.13rem] md:text-[1.5rem] lg:text-[1.8rem] font-[Bellefair]">
                    MISSION SPECIALIST
                  </h2>
                  <h2 className="text-white text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] font-[Bellefair]">
                    MARK SHUTTLEWORTH
                  </h2>
                  <p className="text-[#D0D6F9] text-center text-[0.94rem] leading-[180%]  font-[Barlow] w-[20.5rem] md:w-[32.1rem] md:text-[1rem]  lg:text-left lg:w-[33.7rem]  lg:text-[1.13rem]">
                    Mark Richard Shuttleworth  is the founder and the CEO of Canonical, the
                    company behind the Linux-based Ubuntu operating system.
                    Shuttleworth became the first South African to travel to space as a 
                    space tourist.
                  </p>

                  <Carousel />
                </div>
                <div className="flex justify-center lg:justify-start lg:pl-[3rem] ">
                  <img
                    src={crewImage2}
                    alt="crew"
                    className=" w-[16.96rem] h-[21.3rem] md:w-[27.9rem] md:h-[35rem] lg:w-[33.71rem] lg:h-[45.9rem]"
                  />
                </div>
              </div>
            </section>
          </div>

          <div id="item3" className="carousel-item block w-full">
            <section className="px-4">
              <div className="lg:flex lg:justify-around">
                <div className=" flex flex-col justify-center items-center lg:items-start lg:mt-[5rem] lg:pt-[5rem]">
                  <h2 className="text-[#D0D6F9] text-[1.13rem] md:text-[1.5rem] lg:text-[1.8rem] font-[Bellefair]">
                    PILOT
                  </h2>
                  <h2 className="text-white text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] font-[Bellefair]">
                    VICTOR GLOVER
                  </h2>
                  <p className="text-[#D0D6F9] text-center text-[0.94rem] leading-[180%]  font-[Barlow] w-[20.5rem] md:w-[32.1rem] md:text-[1rem]  lg:text-left lg:w-[33.7rem]  lg:text-[1.13rem]">
                    Pilot on the first operational flight of the SpaceX Crew Dragon to the
                    international space station. Glover is a commander in the U.S Navy 
                    where he pilots an F/A-18. He was a crew member of Expedition 64, 
                    and served as a station system flight engineer. 
                  </p>

                  <Carousel />
                </div>
                <div className="flex justify-center lg:justify-start lg:pl-[3rem] ">
                  <img
                    src={crewImage3}
                    alt="crew"
                    className=" w-[16.96rem] h-[21.3rem] md:w-[27.9rem] md:h-[35rem] lg:w-[33.71rem] lg:h-[45.9rem]"
                  />
                </div>
              </div>
            </section>
          </div>

          <div id="item4" className="carousel-item w-full block">
            <section className="px-4">
              <div className="lg:flex lg:justify-around">
                <div className=" flex flex-col justify-center items-center lg:items-start lg:mt-[5rem] lg:pt-[5rem]">
                  <h2 className="text-[#D0D6F9] text-[1.13rem] md:text-[1.5rem] lg:text-[1.8rem] font-[Bellefair]">
                    FLIGHT ENGINEER
                  </h2>
                  <h2 className="text-white text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] font-[Bellefair]">
                    ANOUSHEH ANSARI
                  </h2>
                  <p className="text-[#D0D6F9] text-center text-[0.94rem] leading-[180%]  font-[Barlow] w-[20.5rem] md:w-[32.1rem] md:text-[1rem]  lg:text-left lg:w-[33.7rem]  lg:text-[1.13rem]">
                    Aousheh Ansari is an Iranian American engineer and co-founder of 
                    Prodea Systems. Ansari was the fourth self-funded space tourist, the 
                    first self-founded woman to fly to the ISS, and the first Iranian in space.
                  </p>

                  <Carousel />
                </div>
                <div className="flex justify-center lg:justify-start lg:pl-[3rem] ">
                  <img
                    src={crewImage4}
                    alt="crew"
                    className=" w-[16.96rem] h-[21.3rem] md:w-[27.9rem] md:h-[35rem] lg:w-[33.71rem] lg:h-[45.9rem]"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default CrewOne;
