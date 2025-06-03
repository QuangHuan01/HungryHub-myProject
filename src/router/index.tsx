import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PulicLayout from "../layout/PulicLayout";
import NotFound from "../pages/notfound/NotFound";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PrivateLayout from "../layout/PrivateLayout";
import adminRoutes from "./adminRouter";
import clientRoutes from "./clientRouter";

const routers = createBrowserRouter([
  //admin
  {
    path: "/admin",
    element: <PrivateLayout />,
    children: adminRoutes,
  },
  //client
  {
    path: "/",
    element: <PulicLayout />,
    children: clientRoutes,
  },
  //auth
  {
    path: "/auth/login",
    element: <Login />,
  },
  { path: "/auth/register", element: <Register /> },
  //notfound
  { path: "*", element: <NotFound /> },
]);

function Router() {
  return <RouterProvider router={routers} />;
}
export default Router;
