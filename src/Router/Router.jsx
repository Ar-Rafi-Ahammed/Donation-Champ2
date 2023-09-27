import {  createBrowserRouter } from "react-router-dom"
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorElement from "../ComponentAll/ErrorElement/ErrorElement";
import CardDetails from "../ComponentAll/CardDetails/CardDetails";

const MyCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorElement></ErrorElement>,

        children: [
            {
                path:'/',
                element:<Home></Home> ,
            },
            {
                path: '/donation',
                element:<Donation></Donation>,
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
            },
            {
                path: '/Cards/:id',
                element:<CardDetails></CardDetails>,
                loader:()=>fetch('../../public/Json/File.json')
            }
        ]
    }
])

export default MyCreatedRouter;