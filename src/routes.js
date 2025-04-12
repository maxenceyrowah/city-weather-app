import { createBrowserRouter } from "react-router";

import App from "./App";
import { History, Home } from "./components";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "/history", Component: History },
    ],
  },
]);
