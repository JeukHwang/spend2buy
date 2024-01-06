import { createBrowserRouter } from "react-router-dom";
import Home from "./components/page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <p>Not Found</p>,
  },
]);

export default router;
