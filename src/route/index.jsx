import App from "@/App";
import Bar from "@/ui_components/Bar";
import BottomBar from "@/ui_components/BottomBar";
import Opportunity from "@/ui_components/Opportunity";

import { createBrowserRouter } from "react-router-dom";


const router=createBrowserRouter([
    {
        path:"",
        element:<App/>,
        children:[
            {   path:'home',
                element:<Bar/>,

            },
            {
                path:'opportunities',
                element:<Opportunity/>
            }


        ]
    }
])
export default router