import App from "@/App";
import Bar from "@/ui_components/Bar";
import BottomBar from "@/ui_components/BottomBar";
import Header from "@/ui_components/Header";
import Opportunity from "@/ui_components/Opportunity";

import { createBrowserRouter, Navigate } from "react-router-dom";


const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[{
          index:'/',
          element:<Navigate to={'/home'} replace/>,
        },
            {   path:'/',
                element:<Bar/>,
                children:[{
                path:'home',
                element:<Header/>

                },
             {
                path:'opportunities',
                element:<Opportunity/>
            }
                ]

            },



        ]
    }
])
export default router