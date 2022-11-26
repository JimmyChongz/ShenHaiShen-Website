import {
  createBrowserRouter,
} from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { Transaction_History } from "./pages/Transaction_History";

export const useRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/history',
      element: <Transaction_History />,
    },
    {

    },

  ]);
}