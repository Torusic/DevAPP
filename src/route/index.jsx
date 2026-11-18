
import App from "@/App";
import Bar from "@/ui_components/Bar";
import Create from "@/ui_components/Create";
import Header from "@/ui_components/Header";
import Internships from "@/ui_components/opportunities/Internships";
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
                    {
            path: "opportunities/internships",
            element: <Internships />,
          },
          {
            path:'create',
            element:<Create/>
          }
        ],
      },
    ],
  },
]);

export default router;
