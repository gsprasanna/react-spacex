import Launches from "./Pages/Launches";
import Rockets from "./Pages/Rockets";
import Layout from './components/Layout';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import RocketDetails from "./Pages/RocketDetails";

const App = () => {
  const Routes = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (<Home />),
        },
        {
          path: "/launches",
          element: <Launches />,
          exact: true
        },
        {
          path: "/rockets",
          element: <Rockets />,
          exact: true
        },
        {
          path: "/rockets/:rocketId",
          element: <RocketDetails />,
          exact: true
        },
      ]
    },
  ]);

  return (
      <RouterProvider router={Routes} />
  );
}

export default App;
