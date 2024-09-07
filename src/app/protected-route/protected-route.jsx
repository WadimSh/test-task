import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { StateContext } from "../../utils/contexts/contexts";

const ProtectedRoute = ({ children }) => {
  const { sharedValue } = useContext(StateContext);

  return (
    sharedValue ? children : <Navigate to="/sing-in" replace/>
  );
};

export default ProtectedRoute;