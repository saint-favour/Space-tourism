import { useNavigate } from "react-router-dom"


function NotFound() {
const navigate = useNavigate()

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[url(./assets/shared/world.jpg)] bg-cover bg-no-repeat">
      <h1 className="text-white text-center text-[4rem] font-extrabold font-[barlow_condensed]">
        404 | Page not found!
      </h1>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/")}
          className="bg-[#ffffff21] font-bold text-white w-[9rem] h-[3rem] backdrop:blur-[5px] font-[bellefair] cursor-pointer lg:w-[16rem] lg:h-[7rem] lg:text-black lg:text-[2rem] active:outline-2 "
        >
          Back to homepage
        </button>
      </div>
    </div>
  );
}

export default NotFound
