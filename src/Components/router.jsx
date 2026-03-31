import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            { index: true, Component: Home },
            { path: "about", Component: About },
            // { path: "experience", Component: Experience },
            // { path: "projects", Component: Projects },
            // { path: "contact", Component: Contact },
        ]
    }
]);