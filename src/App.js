import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./utils/UserContext";

/*
Header
   -logo
   -Nav Bar
Body
   -Search
   -Restaurante Container
   -Restaurant Card
Footer
   -Copyright
   - Linkes
   -Address
   -Contact      
*/

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    // usually we make api call here
    const data = {
      name: "Prudhvi",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />, // Keep only this
    children: [
      { path: "/", element: <Body /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
