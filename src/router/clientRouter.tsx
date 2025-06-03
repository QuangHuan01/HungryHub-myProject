import HomeClient from "../pages/client/HomeClient";
import AboutClient from "./../pages/client/AboutClient";
import ContactClient from "./../pages/client/ContactClient";
import MenuClient from "./../pages/client/MenuClient";

const clientRoutes = [
  { path: "/", element: <HomeClient /> },
  { path: "/about", element: <AboutClient /> },
  { path: "/contact", element: <ContactClient /> },
  { path: "/menu", element: <MenuClient /> },
];

export default clientRoutes;
