/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { Roles } from "../../../../Models/enums";
import useAuth from "../../../Hooks/useAuth";

const RequireAuth = ({ allowedRoles }: { allowedRoles: Roles[] }) => {
  const { auth } = useAuth();
  const location = useLocation();

  if (!auth) return null;

  return auth?.roles?.find(role => allowedRoles?.includes(role)) ? (
    <>{auth.IsCompleted ? <Outlet /> : <Navigate to="account/create" state={{ from: location }} replace />}</>
  ) : auth?.Name ? (
    <Navigate to="/notfound" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
