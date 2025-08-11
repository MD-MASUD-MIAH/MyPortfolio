import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import App from "../../App";
import ProjectDetails from "../ProjectDetails/ProjectDetails";


 export const router = createBrowserRouter([

    { path:'/',   element:<Root></Root>,children:[

        {index:true, element:<App></App>} ,
        {path:'/details/:id', element:<ProjectDetails></ProjectDetails>}
    ] }

 ])