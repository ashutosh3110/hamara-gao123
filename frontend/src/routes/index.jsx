import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

const CustomerDashboard = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold text-primary-600">Customer Dashboard</h1>
  </div>
);

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
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
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

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

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
