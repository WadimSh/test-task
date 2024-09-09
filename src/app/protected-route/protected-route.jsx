import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { StateContext } from "../../utils/contexts/contexts";

const ProtectedRoute = ({ children, role }) => {
  const { sharedValue } = useContext(StateContext);
  
  if (sharedValue.role === 'admin') {
    return children;
  }

  return (
    sharedValue.role === role ? children : <Navigate to={"/sign-in"} replace/>
  );
};

export default ProtectedRoute;