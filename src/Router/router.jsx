// router

import {
    createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/GAllery";
import AllFoods from "../Pages/AllFoods/AllFoods";
import MyFoods from "../PrivatePages/MyFoods/MyFoods";
import AddFood from "../PrivatePages/AddFood/AddFood";
import MyOrders from "../PrivatePages/MyOrders/MyOrders";
import Login from "../Pages/Login/Login";
import LogOut from "../Pages/LogOut/LogOut";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/allFoods",
                Component: AllFoods
            },
            {
                path: "/gallery",
                Component: Gallery
            },
            {
                path: "/myFoods",
                Component: MyFoods
            },
            {
                path: "/addFoods",
                Component: AddFood
            },
            {
                path: "/myOrders",
                Component: MyOrders
            },
            {
                path: "/logIn",
                Component: Login
            },
            {
                path: "/logOut",
                Component: LogOut
            },
        ]
    },
]);

export default router;