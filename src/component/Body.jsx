function Body() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row lg:justify-between justify-evenly  items-center  px-4">
      <div className="flex flex-col justify-evenly items-center lg:items-start">
        <h1 className="text-white  pt-10 text-[1.1rem] tracking-wide">
          SO, YOU WANT TO TRAVEL TO
        </h1>
        <h1 className=" text-white text-8xl pt-4 pb-4 tracking-[8px]">SPACE</h1>
        <p className=" text-center lg:text-left lg:w-xl md:w-xl text-white text-xl leading-[2rem]">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex justify-center  items-center  w-50 h-50 bg-white text-4xl text-center  mt-15 mb-12  rounded-[50%] hover:cursor-pointer">
        explore
      </div>
    </main>
  );
}

export default Body;

/* <main className="hero min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className=" text-white  pt-10 text-[1.2rem]">
        SO, YOU WANT TO TRAVEL TO
      </h1>
      <h1 className=" text-white text-5xl font-bold">SPACE</h1>
      <p className="py-6  text-white">
        Let's face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit back
        and relax because we'll give you a truly out of this world experience!
      </p>
      <div className="flex justify-center  items-center  w-50 h-50 bg-white text-4xl text-center  mt-15 mb-12  rounded-[50%] hover: cursor-pointer">
        explore
      </div>
    </div>
  </div>
</main>; */
