import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { StateContext } from "../../utils/contexts/contexts";

const ProtectedRoute = ({ children, role }) => {
  const { sharedValue } = useContext(StateContext);
  
  return (
    sharedValue["role"] === role ? children : <Navigate to={"/sign-in"} replace/>
  );
};

export default ProtectedRoute;