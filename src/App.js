import { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux";
import appstore from "./utils/appStore";
import Cart from "./components/Cart";


const AppLayout = () => {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    const data = {
      name: "Soumya K"
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appstore}>
      <div className="app">
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
          <Header />
          <Outlet/>
        </UserContext.Provider>
      </div>
    </Provider> 
  )
};
const Grocery = lazy(() => import("./components/Grocery"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children : [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading</h1>}>
                  <Grocery />
                  </Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ],
    errorElement : <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);