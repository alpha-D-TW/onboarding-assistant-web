import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Quiz from "./pages/quiz";

export default createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/quiz/:id",
                element: <Quiz />,
            },
        ]
    },

]);

