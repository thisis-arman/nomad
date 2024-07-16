import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import ProductDetails from "../components/ui/productComponents/ProductDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: '/products/:id',
                element:<ProductDetails/>
            },
            {
                path: "/cart",
                element: <Cart />
            },

        ]
    },
])

export default router;