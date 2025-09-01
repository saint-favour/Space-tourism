import './App.css'
import Navbar from './component/NavBar'
import DestinationLayout from './layout/DestinationLayout'
import RootLayout from './layout/RootLayout'
import Mars from './pages/Destination/Mars'
import Moon from './pages/Destination/Moon'
import Titian from './pages/Destination/Titian'
import Europa from './pages/Destination/Europa'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'

// routes imports
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import CrewOne from './pages/Crew/CrewOne'
import Terminology from './pages/Technology/Terminology'
import SpacePort from './pages/Technology/SpacePort'
import SpaceCapsule from './pages/Technology/SpaceCapsule'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />

        {/* 02 Crew */}
        <Route path="Crew" element={<CrewOne />} />

        {/* 01 Destination */}
        <Route path="Destination" element={<Moon />} />
        <Route path="Destination" element={<Moon />} />
        <Route path="Destination/moon" element={<Moon />} />
        <Route path="Destination/mars" element={<Mars />} />
        <Route path="Destination/europa" element={<Europa />} />
        <Route path="Destination/titian" element={<Titian />} />

        {/* 03 Technology */}
        <Route path="Technology" element={<Terminology />} />
        <Route path="Technology/launch-Vehicle" element={<Terminology />} />
        <Route path="Technology/Space-Port" element={<SpacePort />} />
        <Route path="Technology/Space-Capsule" element={<SpaceCapsule />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
 

  return (
    <RouterProvider router={router}/>
  );
}

export default App
