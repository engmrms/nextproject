/* eslint-disable no-nested-ternary */
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import useAuth from "../../../Hooks/useAuth";

const NotAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  if (!auth || !auth?.IsAuthenticated) return <Outlet />;
  return <Navigate to="/" state={{ from: location }} replace />;
};
export default NotAuth;
