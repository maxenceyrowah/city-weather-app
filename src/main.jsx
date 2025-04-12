import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import "./index.css";
import { router } from "./routes.js";

const root = document.getElementById("root");

createRoot(root).render(<RouterProvider router={router} />);
