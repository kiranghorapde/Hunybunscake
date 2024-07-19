import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Form,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import FirstProduct from "./pages/FirstProduct.jsx";
import SecondProduct from "./pages/SecondProduct.jsx";
import NotFound from "./pages/NotFound.jsx";
import OurProduct from "./pages/OurProduct.jsx";
import About from "./pages/About.jsx";
import History from "./pages/History.jsx";
import Blog from "./pages/Blog.jsx";
import ClassicVanilla from "./pages/ClassicVanilla.jsx";
import Pineapple from "./pages/Ourproductpage/Pineapple.jsx";
import BlackForest from "./pages/Ourproductpage/BlackForest.jsx";
import ChocolateCake from "./pages/Ourproductpage/ChocolateCake.jsx";
import Butterscotch from "./pages/Ourproductpage/Butterscotch.jsx";

import Vision from "./pages/Vision.jsx";
import Mission from "./pages/Mission.jsx";
import Contact1 from "./pages/Contact1.jsx";
import Cart from "./pages/Cart.jsx";
import Singup from "./pages/Singup.jsx";
import Login from "./pages/Login.jsx";
import Searchitem from "./pages/Searchitem.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="history" element={<History />} />
      <Route path="contacttwo" element={<Contact1 />} />
      <Route path="blog" element={<Blog />} />

      <Route path="product" element={<OurProduct />} />
      <Route path="productnew" element={<Product />} />
      <Route path="classicvanilla" element={<ClassicVanilla />} />
      <Route path="pineapple" element={<Pineapple />} />
      <Route path="blackforest" element={<BlackForest />} />
      <Route path="chocolate" element={<ChocolateCake />} />
      <Route path="butterscotch" element={<Butterscotch />} />
      <Route path="cartone" element={<Cart />} />
      <Route path="signup" element={<Singup />} />
      <Route path="login" element={<Login />} />
      <Route path="serchitem" element={<Searchitem />} />
      <Route path="productdetail" element={<ProductDetail />} />

      <Route path="ourhistory" element={<History />}>
        <Route path="vision" element={<Vision />} />
        <Route path="mision" element={<Mission />} />
      </Route>

      <Route path="product" element={<Product />} />
      <Route path="product/first_product" element={<FirstProduct />} />
      <Route path="product/second_product" element={<SecondProduct/>} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
