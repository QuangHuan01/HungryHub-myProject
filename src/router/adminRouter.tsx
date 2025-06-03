import DashBoard from "../pages/admin/DashBoard";
import UserAdmin from "./../pages/admin/UserAdmin";
import SettingAdmin from "./../pages/admin/SettingAdmin";
import UserAdd from "../pages/admin/UserAdd";
import ProductTable from "../pages/admin/ProductTable";
import ProductEdit from "./../pages/admin/ProductEdit";
import ProductAdd from "./../pages/admin/ProductAdd";
import { UseEdit } from "../pages/admin/UseEdit";

const adminRoutes = [
  { path: "/admin", element: <DashBoard /> },
  { path: "/admin/setting", element: <SettingAdmin /> },
  //
  { path: "/admin/products", element: <ProductTable /> },
  { path: "/admin/products/edit/:id", element: <ProductEdit /> },
  { path: "/admin/products/add", element: <ProductAdd /> },
  //
  { path: "/admin/user", element: <UserAdmin /> },
  { path: "/admin/user-add", element: <UserAdd /> },
  { path: "/admin/user/edit/:id", element: <UseEdit /> },
  //
];

export default adminRoutes;
