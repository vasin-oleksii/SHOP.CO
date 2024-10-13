import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import CategoryPage from "../pages/caregory/CategoryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/category",
    element: <CategoryPage />,
  },
]);
