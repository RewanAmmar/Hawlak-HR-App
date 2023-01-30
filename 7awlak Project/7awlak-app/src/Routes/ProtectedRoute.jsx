import React from "react";

import { Navigate } from "react-router-dom";
import Layout from './../Components/Layout/Layout';
import { useSelector } from "react-redux";

export default function ProtectedRoute() {
  const auth = useSelector((state) => state.auth);

  return auth.key ? <Layout /> : <Navigate to="/login" />;
}