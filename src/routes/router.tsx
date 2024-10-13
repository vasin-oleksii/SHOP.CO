import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import CategoryPage from "../pages/caregory/CategoryPage";
import NotFoundPage from "../pages/nonFound/notFound";
import ProductInfo from "../components/common/ProductInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/product/:id",
    element: <ProductInfo />,
    errorElement: <NotFoundPage />,
  },
]);
