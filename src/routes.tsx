import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/home";
import Quiz from "./pages/quiz";

export default createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/quiz/:id",
        element: <Quiz />,
    },
]);

