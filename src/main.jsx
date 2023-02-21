import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import store from "./store/store";
import { Provider } from "react-redux";
import ErrorPage from "./Pages/ErrorPage";
import Register from "./Components/Register";
import Login from "./Components/Login";
import NotesList from "./Pages/NotesList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "regis",
        element: <Register />,
      },
      {
        path: "chats",
        element: <NotesList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
