import { Outlet } from "react-router-dom"
import Navbar from "../component/NavBar"
import Moon from "../pages/Destination/Moon"


function DestinationLayout() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default DestinationLayout
