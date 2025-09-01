import Navbar from "../component/NavBar";

function Homepage() {
  return (
    <main className="min-h-screen bg-[url(./assets/home/background-home-mobile.jpg)] bg-cover bg-no-repeat bg-position-[center_top_0rem] md:bg-[url(./assets/home/background-home-tablet.jpg)]  lg:bg-[url(./assets/home/background-home-desktop.jpg)] lg:bg-cover ">
      <Navbar />
      <section className="flex flex-col  justify-evenly  items-center  px-4  lg:flex-row lg:justify-around lg:items-end lg:gap-8 lg:pb-12 ">
        <div className="flex flex-col justify-evenly items-center lg:items-start">
          <h1 className="text-white  pt-10 text-[1rem] md:text-[1.75rem] md:mt-12 md:tracking-[4px]">
            SO, YOU WANT TO TRAVEL TO
          </h1>
          <h1 className=" text-white text-[5rem] md:text-[6.5rem] lg:text-[9rem] pt-0 pb-4 tracking-[8px]">
            SPACE
          </h1>
          <p className=" text-center  mb-11 leading-[180%] w-[20.45rem] text-[0.95rem]  text-white lg:text-left lg:w-[33.8rem] lg:text-[1.15rem] md:text-[1rem] md:w-[32rem] ">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className=" ex-layout flex justify-center  items-center  w-40 aspect-square bg-white text-[1.5rem] text-center  mt-15 mb-12  rounded-[50%] md:w-50">
          EXPLORE
        </div>
      </section>
    </main>
  );
}

export default Homepage;

