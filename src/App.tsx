import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";

import "./App.scss";
import { BookDetails, Home } from "./pages";

const router = createBrowserRouter([
    {
        path: "/details/:id",
        element: <BookDetails />,
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "*",
        element: <Navigate to={"/"} />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
