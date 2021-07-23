import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/stores";

Vue.use(VueRouter);

const routes = [
  //trang home
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "DuyAnh|Truong",
    },
  },
  //đăng nhập
  {
    path: "/auth/login",
    name: "login",
    component: () => import("../views/authentications/Login.vue"),
    meta: {
      title: "Login",
      isPublic: true,
      isLogin: true,
    },
  },
  //đăng kí
  {
    path: "/user/sign-up",
    name: "sign-up",
    component: () => import("../views/authentications/SignUp.vue"),
    meta: {
      title: "Sign Up",
      isPublic: true,
      isLogin: true,
    },
  },
  //lấy tất cả các brand
  {
    path: "/brands",
    name: "brands",
    component: () => import("../views/brands/BrandList.vue"),
    meta: {
      title: "Brands",
      isPublic: true,
      isLogin: false,
    },
  },
  //tat ca san pham cua 1 brand
  {
    path: "/brands/:idBrand/Products",
    name: "ProductsByBrand",
    component: () => import("../components/products/ProductListByBrand.vue"),
    meta: {
      title: "Product By Brand",
      isPublic: true,
      isLogin: false,
    },
  },
  //gio hang
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/cart/Cart.vue"),
    meta: {
      title: "Cart",
      isPublic: true,
      isLogin: false,
    },
  },
  //tim kiem va loc san pham
  {
    path: "/filter",
    name: "filter",
    component: () => import("../components/home/Filter.vue"),
    meta: {
      title: "Filter",
      isPublic: true,
      isLogin: false,
    },
  },
  //trang tin tức
  {
    path: "/posts",
    name: "posts",
    component: () => import("../views/brands/BrandList.vue"),
    meta: {
      title: "Posts",
      isPublic: true,
      isLogin: false,
    },
  },
  //chi tiết sản phẩm
  {
    path: "/details/:idProduct",
    name: "detail",
    component: () => import("../views/products/Details.vue"),
    meta: {
      title: "Product Detail",
      isPublic: true,
      isLogin: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

function itemTitle(item) {
  return item.title;
}

router.beforeEach(async (to, from, next) => {
  // const requiresAuth = to.matched.some((x) => !x.meta.isPublic);
  const isLogin = to.matched.some((x) => x.meta.isLogin);
  const isAuthenticated =
    store.state.auth.accessToken || !!localStorage.getItem("accessToken"); //add logic to check authen here
  // if (requiresAuth && !isAuthenticated) {
  //   router.push({ name: "sign-in" });
  // }
  if (isLogin && isAuthenticated) {
    next("");
  }
  document.title = itemTitle(to.meta) ? itemTitle(to.meta) : "";
  next();
});

export default router;
