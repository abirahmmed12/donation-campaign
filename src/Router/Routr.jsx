import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Phone from "../Pages/Phone/phone";

const mycreateroute = createBrowserRouter([
    {
        path : "/",
        element : <Mainlayout></Mainlayout>,
        children : [
            {
                path : "/",
                element :<Home></Home>,
                loader : ()=> fetch('/data.json')
            },
            {
                path : "/donation",
                element :<Donation></Donation>
            },
            {
                path : "/statistics",
                element : <Statistics></Statistics>
            },
            {
                path : "/phones/:id",
                element : <Phone></Phone>,
                loader : ()=> fetch('/data.json')
            }
          
        ]
    }
])

export default  mycreateroute;