// App.js
import React from "react";

import ServicesDetail from "./components/ServicesDetail/ServicesDetail";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import StoreContextProvider from "./components/context/StoreContext";
import Layout from "./components/Layout/Layout";

import OurProject from "./components/OurProject/OurProject";
import ContactUs from "./components/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/services/:index", element: <ServicesDetail /> },

      { path: "projects", element: <OurProject /> },
      { path: "contactUs", element: <ContactUs /> },
    ],
  },
]);

function App() {
  return (
    <StoreContextProvider>
      <RouterProvider router={router} />
    </StoreContextProvider>
  );
}

export default App;
