import { RouterProvider } from "react-router-dom";

import "./App.scss";
import { router } from "./router";

function App() {
    return (
        <div className="app bg-dark">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
