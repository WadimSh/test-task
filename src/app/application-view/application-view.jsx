import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import Profile from "../../pages/profile/profile";
import UserList from "../../pages/user-list/user-list";
import NotFound from "../../pages/not-found/not-found";

import ProtectedRoute from "../protected-route/protected-route";

import { StateContext } from "../../utils/contexts/contexts";

const ApplicationView = () => {
  const { sharedValue, setSharedValue } = useContext(StateContext);
  
  useEffect(() => {
    setSharedValue(true)
  }, []);

  return (
    <Routes>
      <Route path="/" element={sharedValue ? <Navigate to="/user-list" replace /> : <Navigate to="/sing-in" replace />} />
      <Route path="/sing-in" element={<Login />} />
      <Route path="/sing-up" element={<Register />} />
      <Route 
        path="/user-list" 
        element={
          <ProtectedRoute>
            <UserList/>
          </ProtectedRoute>
        }
      />
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ApplicationView;
