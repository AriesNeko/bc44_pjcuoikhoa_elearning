import { lazy } from "react";
import { createHashRouter } from "react-router-dom";

// import UserProtected from "./UserProtected";

// import Signup from "../pages/Auth/Signup";
// import NotFound from "../pages/NotFound";
import RootLayout from "../layout";
import Home from "../pages/Home";
import DetailCourse from "../pages/DetailCourse";
import Courses from "../pages/Courses";
import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";
import Auth from "../pages/Auth";
import User from "../pages/User";
import UserProtected from "./UserProtected";

const routes = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // Homepage
      { index: true, element: <Home /> },

      {
        path: "/courses",
        element: <Courses />,
      },

      {
        path: "/users/:userId",
        element: (
          <UserProtected>
            <User />
          </UserProtected>
        ),
      },

      { path: "/courses/:maKhoaHoc", element: <DetailCourse /> },

      {
        path: "",
        element: <Auth />,
        children: [
          { path: "/signin", element: <Signin /> },
          { path: "/signup", element: <Signup /> },
        ],
      },
    ],
  },

  //   { path: "*", element: <NotFound /> },
]);

export default routes;
