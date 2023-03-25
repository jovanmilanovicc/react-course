import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetail";

const router = createBrowserRouter([
  { path: '/', element: <RootLayout/>, errorElement: <Error/>,  children:  [
    { path: "/", element: <HomePage /> },
    { path: "/products", element: <Products /> },
    { path: "/product/:productid", element: <ProductDetails /> }
  ]},
  
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
