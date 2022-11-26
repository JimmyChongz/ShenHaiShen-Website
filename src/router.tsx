import {
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Transaction_History } from "./pages/transaction_History";

export const useRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
    element: <HomePage />,
    },
    {
      path: '/History',
      element:<Transaction_History/>,
    }
  
  ]);
}