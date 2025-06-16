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
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                loader: () => fetch('https://resturent-management-system-server.vercel.app/foods'),
                Component: AllFoods
            },
            {
                path: "/foodDetails/:id",
                loader: ({ params }) => fetch(`https://resturent-management-system-server.vercel.app/foods/${params.id}`),
                Component: FoodDetails
            },
            {
                path: "/gallery",
                Component: Gallery
            },
            {
                path: "/myFoods",
                // Component: MyFoods
                element: <PrivateRoute><MyFoods></MyFoods></PrivateRoute>
            },
            {
                path: "/addFoods",
                // Component: AddFood
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: "/updateFood/:id",
                loader: ({ params }) => fetch(`https://resturent-management-system-server.vercel.app/foods/${params.id}`),
                Component: UpdateFood
            },
            {
                path: "/myOrders",
                loader: ({ params }) => fetch(`https://resturent-management-system-server.vercel.app/orders/${params.id}`),
                // Component: MyOrders
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
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
                path: "/purchaseFood/:id",
                loader: ({ params }) => fetch(`https://resturent-management-system-server.vercel.app/foods/${params.id}`),
                // Component: PurchaseFood
                element: <PrivateRoute><PurchaseFood></PurchaseFood></PrivateRoute>
            },
        ]
    },
]);

export default router;