import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import BlogsLayout from "./layoutes/BlogsLayout";
import RootLayout from "./layoutes/RootLayout";
import About from "./pages/About";
import CreateBlog from "./pages/CreateBlog";
import Home from "./pages/Home";
import ModifyBlog from "./pages/ModifyBlog";
import NotFound from "./pages/NotFound";
import SingleBlog from "./pages/SingleBlog";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="create" element={<CreateBlog />} />
      <Route path="about" element={<About />} />

      <Route path="blogs" element={<BlogsLayout />}>
        <Route path="modify/:id" element={<ModifyBlog />} />
        <Route path=":id" element={<SingleBlog />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="w-[80%] max-sm:w-[95%] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
