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
  const { sharedValue } = useContext(StateContext);
  const page = {
    admin: "/user-list",
    user: `/profile/${sharedValue['id']}`,
  }
  
  useEffect(() => {
    console.log(sharedValue)
  }, [sharedValue])
  
  return (
    <Routes>
      <Route path="/" element={
        <Navigate to={page[sharedValue["role"]] || "/sign-in"} replace />
}     />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<Register />} />
      <Route 
        path="/user-list" 
        element={
          <ProtectedRoute
            role="admin"
          >
            <UserList/>
          </ProtectedRoute>
        }
      />
      <Route 
        path="/profile/:id" 
        element={
          <ProtectedRoute
            role="user"
          >
            <Profile />
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ApplicationView;
