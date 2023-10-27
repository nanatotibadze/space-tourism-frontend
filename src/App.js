import Homepage from "./components/homapage/Homepage";
import CrewPage from "./components/crew/CrewPage";
import TechnologyPage from "./components/technology/TechnologyPage";
import DestinationPage from "./components/destination/DestinationPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Homepage />},
    {path: "/crew", element: <CrewPage />},
    {path: "/destination", element: <DestinationPage />},
    {path: "/technology", element: <TechnologyPage />},
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
