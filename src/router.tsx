import {
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { MenuPage } from "./pages/MenuPage";
import { HistoryPage } from "./pages/HistoryPage";
import { CheckoutPage } from "./pages/CheckoutPage";

export const useRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/Home',
      element: <HomePage />,
    },
    {
      path: '/History',
      element: <HistoryPage />,
    },
    {
      path: '/Login',
      element: <LoginPage />,
    },
    {
      path: '/Menu',
      element: <MenuPage />,
    },
    {
      path:'/Checkout',
      element:<CheckoutPage />,
    },
  ]);
}