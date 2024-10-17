import { createHashRouter } from "react-router-dom";
import Home from "./components/page/Home";

const router = createHashRouter([
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
