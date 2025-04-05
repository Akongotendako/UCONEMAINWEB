import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import Login from "./login/Login";
import { Box } from "@chakra-ui/react";
import SignUp from "./signup/SignUp";
import AdminDashboard from "./admin/admin_dashboard/AdminDashboard";
import AdminHome from "./admin/admin_home/AdminHome";
import AdminShopAddItem from "./admin/admin_shop/admin_shop_add_item/AdminShopAddItem.jsx";
import AdminShopMain from "./admin/admin_shop/admin_shop_main/AdminShopMain";
import AdminShopAll from "./admin/admin_shop/admin_shop_all/AdminShopAll";
import { Bounce, ToastContainer } from "react-toastify";
import AdminShopUpdateItem from "./admin/admin_shop/admin_shop_update_item/AdminShopUpdateItem";
import AdminProfile from "./admin/admin-profile/AdminProfile";
import UserDashboard from "./user/user_dashboard/UserDashboard";
import UserHome from "./user/user_home/UserHome";

function App() {
  return (
    <Box w="100%" h="100vh" bg="#121A21">
      <Routes>
        <Route path={ROUTES.BASE_URL} element={<Login />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.ADMIN.ADMIN_DASHBOARD} element={<AdminDashboard />}>
          <Route index path={ROUTES.ADMIN.ADMIN_HOME} element={<AdminHome />} />
          <Route
            path={ROUTES.ADMIN.ADMIN_SHOP.SHOP}
            element={<AdminShopMain />}
          >
            <Route
              index
              path={ROUTES.ADMIN.ADMIN_SHOP.ALL}
              element={<AdminShopAll />}
            />
            <Route
              path={ROUTES.ADMIN.ADMIN_SHOP.ADD_ITEM}
              element={<AdminShopAddItem />}
            />
            <Route
              path={ROUTES.ADMIN.ADMIN_SHOP.UPDATE_ITEM}
              element={<AdminShopUpdateItem />}
            />
          </Route>
          <Route path={ROUTES.ADMIN.ADMIN_PROFILE} element={<AdminProfile />} />
        </Route>
        <Route path={ROUTES.USER.USER_DASHBOARD} element={<UserDashboard />}>
          <Route index path={ROUTES.USER.USER_HOME} element={<UserHome />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
