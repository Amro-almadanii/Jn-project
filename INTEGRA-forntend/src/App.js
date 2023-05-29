import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage, { action as loginUser } from './pages/Login';
import { action as logoutUser } from './pages/Logout';

import { marketingRoute } from './util/routes/Marketing';
import { repositoryRoute } from './util/routes/Repository';



import RootLayout from './pages/Repository/Root';
import ErrorPage from './pages/Repository/Error';
import { checkAuthLoader, tokenLoader } from './util/auth';
import SuppliersPage, { loader as SuppliersLoader } from './pages/Repository/supplier/Suppliers';
import SupplierDetailPage, {
  action as deleteSupplierAction,
  loader as SupplierDetailLoader
} from './pages/Repository/supplier/SupplierDetail';
import EditSupplierPage from './pages/Repository/supplier/EditSupplier';
import { action as manipulateSupplierAction } from './components/Repository/supplier/SupplierForm';
import React from 'react';




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      id: 'root',
      loader: tokenLoader,
      children: [
        marketingRoute,
        repositoryRoute,
      ]
    },
    // {
    //   path: '/repository',
    //   element: <RootLayout />,
    //   errorElement: <ErrorPage />,
    //   id: 'root',
    //   loader: tokenLoader(),
    //   children: [
    //     {
    //       index: true,
    //       element: <SuppliersPage />,
    //       loader: SuppliersLoader,
    //     },
    //     {
    //       path: '/repository/suppliers/supplier-detail',
    //       id: 'supplier-detail',
    //       loader: SupplierDetailLoader,
    //       children: [
    //         {
    //           path: '/repository/suppliers/supplier-detail/:supplierId',
    //           element: <SupplierDetailPage />,
    //           action: deleteSupplierAction,
    //           loader: checkAuthLoader,
    //         },
    //         {
    //           path: '/repository/suppliers/supplier-detail/edit/:supplierId',
    //           element: <EditSupplierPage />,
    //           action: manipulateSupplierAction,
    //           loader: checkAuthLoader,
    //         },
    //       ],
    //     }]},
    {
      path: '/login',
      element: <LoginPage />,
      action: loginUser,
    },
    {
      path: '/logout',
      action: logoutUser,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
