import {
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { Transaction_History } from "./pages/Transaction_History";


export const useRouter = () => {
  return createBrowserRouter([
    {
      path: '/Home',
      element: <HomePage />,
    },
    {
      path: '/History',
      element: <Transaction_History />,
    },
    {
      path: '/Login',
      element: <LoginPage />,
    }

  ]);
}