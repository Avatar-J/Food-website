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

function App() {
  const router1 = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Homepage />} />
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
      <Outlet />
    </>
  );
};

export default App;
