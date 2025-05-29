import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PulicLayout from "../layout/PulicLayout";
import HomeClient from "../pages/client/HomeClient";
import AboutClient from "./../pages/client/AboutClient";
import NotFound from "../pages/notfound/NotFound";
import ContactClient from "./../pages/client/ContactClient";
import MenuClient from "./../pages/client/MenuClient";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PrivateLayout from "../layout/PrivateLayout";
import DashBoard from "../pages/admin/DashBoard";
import UserAdmin from "./../pages/admin/UserAdmin";
import SettingAdmin from "./../pages/admin/SettingAdmin";

const routers = createBrowserRouter([
  //admin
  {
    path: "/admin",
    element: <PrivateLayout />,
    children: [
      { path: "/admin/dashboard", element: <DashBoard /> },
      { path: "/admin/user", element: <UserAdmin /> },
      { path: "/admin/setting", element: <SettingAdmin /> },
    ],
  },
  //client
  {
    path: "/",
    element: <PulicLayout />,
    children: [
      { path: "/", element: <HomeClient /> },
      { path: "/about", element: <AboutClient /> },
      { path: "/menu", element: <MenuClient /> },
      { path: "/contact", element: <ContactClient /> },
    ],
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
