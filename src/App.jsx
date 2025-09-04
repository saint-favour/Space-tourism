import "./App.css";
import Navbar from "./component/NavBar";
import DestinationLayout from "./layout/DestinationLayout";
import RootLayout from "./layout/RootLayout";
import Mars from "./pages/Destination/Mars";
import Moon from "./pages/Destination/Moon";
import Titian from "./pages/Destination/Titian";
import Europa from "./pages/Destination/Europa";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

// routes imports
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import CrewOne from "./pages/Crew/CrewOne";
import Terminology from "./pages/Technology/Terminology";
import SpacePort from "./pages/Technology/SpacePort";
import SpaceCapsule from "./pages/Technology/SpaceCapsule";
import TechLayout from "./layout/TechLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />

        {/* 02 Crew */}
        <Route path="Crew" element={<CrewOne />} />

        {/* 01 Destination */}
        <Route path="/Destination" element={<DestinationLayout />}>
          <Route index element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titian" element={<Titian />} />
        </Route>

        {/* 03 Technology */}
        <Route path="/Technology" element={<TechLayout />}>
          <Route index element={<Terminology />} />
          <Route path="Space-Port" element={<SpacePort />} />
          <Route path="Space-Capsule" element={<SpaceCapsule />} />
        </Route>

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
