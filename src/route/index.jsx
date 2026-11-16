
import App from "@/App";
import Bar from "@/ui_components/Bar";
import Header from "@/ui_components/Header";
import Jobs from "@/ui_components/opportunities/Jobs";
import Opportunity from "@/ui_components/Opportunity";

import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        element: <Bar />,
        children: [
          {
            path: "home",
            element: <Header />,
          },
          {
            path: "opportunities",
            element: <Opportunity />,
          },
          {
            path: "opportunities/jobs",
            element: <Jobs />,
          },
        ],
      },
    ],
  },
]);

export default router;
