import { BaseLayout } from "@/layouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import Cart from "../src/pages/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import Category from "./components/organisms/Category/Category";
import Hero from "./components/organisms/Hero/Hero";
import Footer from "./components/organisms/Footer/Footer";
import Home from "./pages/home/Home";

function App() {
  // creating router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          index: true,
          element: <Login />,
          path: "login",
        },
        {
          path: "/Farming_Products/seeds",
          element: <Category category="seeds" />,
        },
        {
          path: "/Farming_Products/Herbicides",
          element: <Category category="Herbicides" />,
        },
        {
          path: "/Farming_Products/Growth_Promoters",
          element: <Category category="GrowthPromoters" />,
        },
        {
          path: "/Farming_Products/Fungicides",
          element: <Category category="Fungicides" />,
        },
        {
          path: "/Farming_Products/Insecticides",
          element: <Category category="insecticides" />,
        },
        {
          path: "/Farming_Products/Viricides",
          element: <Category category="viricides" />,
        },
        {
          path: "/Farming_Products/Organic_Farming",
          element: <Category category="Organic_Farming_Products" />,
        },
        {
          path: "/Farming_Products/Nutrients",
          element: <Category category="Nutrients" />,
        },
        {
          path: "/Farming_Products/Animal_husbandry",
          element: <Category category="Animal_Husbandry" />,
        },
        {
          path: "/FarmingEquipments/implements",
          element: <Category category="Implements" />,
        },
        {
          path: "/FarmingEquipments/Agriculture_tools",
          element: <Category category="Agriculture_Tools" />,
        },
        {
          path: "/FarmingEquipments/Accessories",
          element: <Category category="Accessories" />,
        },
        {
          path: "/FarmingEquipments/irrigation",
          element: <Category category="Irrigation" />,
        },
        {
          path: "/Cart",
          element: <Cart />,
        },

        // {
        //   path: "/User",
        //   element: <User />,
        // },
        // {
        //   path: "/Notification",
        //   element: <Notification />,
        // },
        // {
        //   path: "/Wishlist",
        //   element: <Wishlist />,
        // },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Home />
      <Footer />
    </>
  );
}

export default App;
