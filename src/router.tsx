import { Navigate, createBrowserRouter } from "react-router-dom";
import { BookDetails, Home } from "./pages";
import { Frame } from "./layouts";

export const router = createBrowserRouter([
    {
        path: "/details/:id",
        element: (
            <Frame title="Book Details">
                <BookDetails />
            </Frame>
        ),
    },
    {
        path: "/",
        element: (
            <Frame title="Books">
                <Home />
            </Frame>
        ),
    },
    {
        path: "*",
        element: <Navigate to={"/"} />,
    },
]);
