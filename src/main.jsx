import "./main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.jsx";
import Balance from "./pages/Balance.jsx";
import Billing from "./pages/Billing.jsx";
import Layout from "./pages/Layout.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import Expenses from "./pages/Expenses.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { path: "/home", element: <Home /> },
      { path: "/balance", element: <Balance /> },
      { path: "/expenses", element: <Expenses /> },
      { path: "/billing", element: <Billing /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
