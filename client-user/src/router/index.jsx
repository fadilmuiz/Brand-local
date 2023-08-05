import Layout from '../componen/Layout';
import HomePage from '../pages/HomePage'
import DetailPage from '../pages/DetailPage'
import { createBrowserRouter, redirect } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/clothes/:id",
        element: <DetailPage />
      },
    ]
  },
  
]);

export default router;
