import Layout from '../componen/Layout';
import HomePage from '../pages/HomePage'
import { createBrowserRouter, redirect } from "react-router-dom";
import RegisterPage from '../pages/RegisterPage';
import { FormAdd } from '../componen/FromAdd';
import LoginPage from '../pages/LoginPage';
import DetailPage from '../pages/DetailPage'
import EditForm from '../pages/FormEditPage'
import { AddCategory } from '../pages/AddCategory';
import Category from '../pages/CategoryPage';
import EditCategory from '../pages/EditCategory';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/addCategory",
        element: <AddCategory />
      },
      {
        path: "/register",
        element: <RegisterPage />
      },
      {
        path: "/formAdd",
        element: <FormAdd />
      },
      {
        path: "/clothes/:id",
        element: <DetailPage />
      },
      {
        path: "/clothesEdit/:id",
        element: <EditForm />
      },
      {
        path: "/categoryEdit/:id",
        element: <EditCategory />
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        throw redirect("/");
      }
      return null;
    },
  }
]);

export default router;
