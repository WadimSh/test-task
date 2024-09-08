import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { StateContext } from "../../utils/contexts/contexts";

const ProtectedRoute = ({ children, role }) => {
  const { sharedValue } = useContext(StateContext);
  const page = {
    admin: "/user-list",
    user: "/profile",
  }
  return (
    sharedValue["role"] === role ? children : <Navigate to={page[sharedValue["role"]] || "/sign-in"} replace/>
  );
};

export default ProtectedRoute;