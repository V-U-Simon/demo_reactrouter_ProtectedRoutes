import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider, RouterProviderProps } from "react-router-dom";
import React from "react";
import { Home } from "src/components/Home";
import { Layout } from "src/components/Layout";
import { Account, Profile, User } from "src/components/User";

export const DataRoutes: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="user" element={<User />}>
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
