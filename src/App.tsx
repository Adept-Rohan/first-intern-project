import Header from "./components/Header";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import Cart from "./pages/Cart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Footer from "./components/Footer";
import SingleProduct from "./components/SingleProduct";
import CategoryFilter from "./pages/CategoryFilter";
import Payment from "./pages/Payment";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/category",
        element: <CategoryFilter />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();
  let persist = persistStore(store);
  return (
    <>
      <PersistGate persistor={persist}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </PersistGate>
    </>
  );
}

export default App;
