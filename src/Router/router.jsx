// router

import {
    createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import MyFoods from "../PrivatePages/MyFoods/MyFoods";
import AddFood from "../PrivatePages/AddFood/AddFood";
import MyOrders from "../PrivatePages/MyOrders/MyOrders";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PurchaseFood from "../PrivatePages/PurchaseFood/PurchaseFood";
import Gallery from "../Pages/Gallery/Gallery";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";

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
                loader: () => fetch('http://localhost:3000/foods'),
                Component: AllFoods
            },
            {
                path: "/foodDetails/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/foods/${params.id}`),
                Component: FoodDetails
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
                path: "/updateFood",
                Component: UpdateFood
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
                path: "/register",
                Component: Register
            },
            {
                path: "/purchaseFood",
                Component: PurchaseFood
            },
        ]
    },
]);

export default router;