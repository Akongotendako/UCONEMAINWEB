export const ROUTES = {
  BASE_URL: "/",
  SIGN_UP: "/sign-up",
  ADMIN: {
    ADMIN_DASHBOARD: "/admin",
    ADMIN_HOME: "/admin/home",
    ADMIN_SHOP: {
      ALL: "/admin/shop/all",
      SHOP: "/admin/shop",
      ADD_ITEM: "/admin/shop/add-item",
      UPDATE_ITEM: "/admin/shop/update-item/:id",
    },
    ADMIN_PROFILE: "/admin/profile"
  },
  USER: {
    USER_DASHBOARD: "/user",
    USER_HOME: "/user/home"
  }
};
