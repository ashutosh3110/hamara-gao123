import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser, logout } from '../redux/slices/authSlice';
import axios from 'axios';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import CustomerDashboard from '../pages/customer/CustomerDashboard';

const VendorDashboard = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold text-secondary-600">Vendor Dashboard</h1>
  </div>
);

const DeliveryDashboard = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold text-neutral-700">Delivery Dashboard</h1>
  </div>
);

const AdminDashboard = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold text-neutral-900">Admin Dashboard</h1>
  </div>
);

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, user, token } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (token && !user) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-neutral-900">
        <div className="text-white text-sm font-bold animate-pulse">Loading Profile...</div>
      </div>
    );
  }

  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    // Redirect to default dashboard based on their role
    switch (user?.role) {
      case 'Customer':
        return <Navigate to="/customer/dashboard" replace />;
      case 'Vendor':
        return <Navigate to="/vendor/dashboard" replace />;
      case 'Delivery Boy':
        return <Navigate to="/delivery/dashboard" replace />;
      case 'Admin':
        return <Navigate to="/admin/dashboard" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }

  return children;
};

const PublicRoute = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (isAuthenticated && user) {
    switch (user.role) {
      case 'Customer':
        return <Navigate to="/customer/dashboard" replace />;
      case 'Vendor':
        return <Navigate to="/vendor/dashboard" replace />;
      case 'Delivery Boy':
        return <Navigate to="/delivery/dashboard" replace />;
      case 'Admin':
        return <Navigate to="/admin/dashboard" replace />;
      default:
        return children;
    }
  }

  return children;
};

export const AppRoutes = () => {
  const dispatch = useDispatch();
  const { token, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchProfile = async () => {
      if (token && isAuthenticated) {
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/me`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          if (response.data.status === 'success') {
            dispatch(updateUser(response.data.data));
          }
        } catch (error) {
          console.error('Failed to fetch user profile:', error);
          if (error.response?.status === 401) {
            dispatch(logout());
          }
        }
      }
    };

    fetchProfile();
  }, [token, isAuthenticated, dispatch]);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

      {/* Role-Based Protected Routes */}
      <Route
        path="/customer/dashboard"
        element={
          <ProtectedRoute allowedRoles={['Customer']}>
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/vendor/dashboard"
        element={
          <ProtectedRoute allowedRoles={['Vendor']}>
            <VendorDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/delivery/dashboard"
        element={
          <ProtectedRoute allowedRoles={['Delivery Boy']}>
            <DeliveryDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRoles={['Admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Fallback routing */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<div className="p-8 text-center text-red-500 font-bold">404 - Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
