import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Characters from "../pages/Characters";
import Weapons from "../pages/Weapons";
import NotFound from "../pages/NOtFound";
import LayoutPublic from "../layouts/LayoutPublic";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/characters',
                element: <Characters />,
            },
            {
                path: '/weapons',
                element: <Weapons />
            },
        ],
    },
])