// Dependencies
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Screens
import { HomeScreen } from "../../screens";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen />,
    }
])

export const MainRouter = () => <RouterProvider router={Router} />