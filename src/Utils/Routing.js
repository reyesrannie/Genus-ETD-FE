import { useRoutes, Navigate } from "react-router-dom";
import DashBoard from "../Screens/Dashboard/dashboard";
import LoginScreen from "../Screens/Login/loginScreen";
import Account from "../Screens/Account/Account";
import Approving from "../Screens/Approving/Approving";
import Category from "../Screens/Category/Category";
import Ordering from "../Screens/Ordering/Ordering";

import { saveUser } from "../Services/saveUser";

const user = saveUser();

const Authenticated = () => {
  return user ? <DashBoard /> : <Navigate to="/login" />;
};

const PageNotFound = () => {
  return <h1>PAGE NOT FOUND</h1>;
};

export const Routing = () => {
  let routing = useRoutes([
    { path: "*", element: <PageNotFound /> },
    {
      path: "/",
      element: <Authenticated />,
      children: [
        {
          path: "Dashboard",
          element: <DashBoard />,
          children: [
            {
              path: "Account",
              element: <Account />,
            },
            {
              path: "Approving",
              element: <Approving />,
            },
            {
              path: "Category",
              element: <Category />,
            },
            {
              path: "Ordering",
              element: <Ordering />,
            },
          ],
        },
      ],
    },
    { path: "/login", element: user ? <Authenticated /> : <LoginScreen /> },
  ]);
  return routing;
};
