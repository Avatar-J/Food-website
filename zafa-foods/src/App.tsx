import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  useLoaderData,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Services from "./Pages/Services/Services";
import Menu from "./Pages/Menu/Menu";
import Booking from "./Pages/Booking/Booking";
import { Content } from "./Components/GeneralStyling";
import Footer from "./Components/Footer/Footer";
import Cart from "./Pages/Cart/Cart";

function App() {
  const router1 = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Homepage />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Cart" element={<Cart />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router1} />
    </>
  );
}

const Root = () => {
  return (
    <>
      <Navbar />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </>
  );
};

export default App;
