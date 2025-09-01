import { useNavigate } from "react-router-dom"


function NotFound() {
const navigate = useNavigate()

  return (
    <div>
      <h1 className="text-center text-[8rem] font-extrabold font-sans">404 | Page not found!</h1>
      <div className="flex justify-center">
      <button onClick={() => navigate('/')} className="bg-black text-white w-[9rem] h-[3rem] cursor-pointer">Back to homepage </button>

      </div>
    </div>
  )
}

export default NotFound
