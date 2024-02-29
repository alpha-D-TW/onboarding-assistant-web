import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Quiz from "./pages/quiz";
import QuizGenerate from "./pages/quiz/generate";

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
                path: "/quiz/generate",
                element: <QuizGenerate />,
            },
        ]
    },
    {
        path: "/user/quiz/:id",
        element: <Quiz />,
    },
]);

