import Navbar from "../../component/NavBar";

// slide images
import spaceReport from "../../assets/technology/image-spaceport-landscape.jpg";
import spaceReportPortrait from "../../assets/technology/image-spaceport-portrait.jpg";
import CarouselTech from "../../component/CarouselTech";

function SpacePort() {
  return (
    <main className="min-h-screen bg-[url(./assets/technology/background-technology-mobile.jpg)] bg-cover bg-no-repeat md:bg-[url(./assets/technology/background-technology-tablet.jpg)] md:bg-cover md:bg-no-repeat lg:bg-[url(./assets/technology/background-technology-desktop.jpg)] lg:bg-cover lg:bg-no-repeat">
      <Navbar />
      <h1 className="text-white text-center text-[1rem] font-[barlow_condensed] tracking-[15%] mt-[1rem] pt-[1rem] mb-[1rem] pb-[1rem] md:text-left md:text-[1.3rem] lg:text-[1.8rem] lg:tracking-[4px] md:pl-[2rem] lg:pl-[2.5rem] lg:ml-[2rem]">
        <span className="text-[#ffffff73] pr-[1rem]">03</span> SPACE LAUNCH 101
      </h1>
      <section className=" lg:flex lg:flex-row-reverse lg:justify-between">
        <picture>
          <source media="(min-width: 1024px)" srcSet={spaceReportPortrait} />
          <img src={spaceReport} alt="rocket" className="w-full" />
        </picture>

        <div className="lg:flex lg:justify-evenly lg:items-center lg:gap-[8rem] lg:pl-[2rem] lg:ml-[2rem]">
          {/* MOVE BUTTON */}
          <CarouselTech />
          {/* MOVE END */}
          <div className="flex flex-col items-center lg:block">
            <h2 className="text-gray-600 font-[bellefair] text-[1.8rem] text-center  md:text-[1.5rem] lg:text-left lg:text-[1.5rem]">
              THE TERMINOLOGY...
            </h2>
            <h3 className="text-white font-[bellefair] text-[1.5rem] text-center pb-[0.5rem] md:text-[2.5rem] lg:text-left lg:text-[3rem]">
              SPACEPORT
            </h3>
            <p className="text-[#D0D6F9] text-[0.94rem] text-center leading-[180%] md:w-[31rem] md:text-[1rem] lg:text-left lg:w-[32rem] lg:text-[1.15rem]">
              A spaceport or cosmodrame is a site for launching (or receiving)
              spacecraft, by analogy to the seaport for ships or airport for
              aircraft. Based in the famous Cape Canaveral, our spaceport is
              ideally situated to take advantage of the Earth's rotation for
              launch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SpacePort;
