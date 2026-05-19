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
            { path: "experience", Component: Experience },
            { path: "project", Component: Project },
            { path: "contact", Component: Contact },
        ]
    }
]);