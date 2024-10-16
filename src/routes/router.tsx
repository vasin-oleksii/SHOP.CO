import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import CategoryPage from "../pages/caregory/CategoryPage";
import NotFoundPage from "../pages/nonFound/notFound";
import ProductPage from "../pages/product/ProductPage";
import Header from "../components/header/Header";
import Footer from "../components/foother/Foother";
import { useEffect } from "react";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const ScrollTop = (): null => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default Layout;

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollTop />
        <Layout />
      </>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/category",
        element: <CategoryPage />,
        children: [{ path: "?page=:id", element: <CategoryPage /> }],
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <>
        <NotFoundPage />
        <Layout />
      </>
    ),
  },
]);
