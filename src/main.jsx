import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";

import "./index.css";
import { router } from "./routes.js";
import globaStore from "./store/store.js";

const root = document.getElementById("root");

createRoot(root).render(
  <Provider store={globaStore}>
    <RouterProvider router={router} />
  </Provider>
);
