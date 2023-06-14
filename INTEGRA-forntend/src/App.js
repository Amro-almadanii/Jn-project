import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage, { action as loginUser } from './pages/Login';
import { action as logoutUser } from './pages/Logout';

import { marketingRoute } from './routes/Marketing';
import { repositoryRoute } from './routes/Repository/Repository';

import { checkAuthLoader, checkLoginLoader, tokenLoader } from './hooks/auth';
import React from 'react';
import { systemManagementRoute } from './routes/SystemManagment';
import { HrRoute } from './routes/HR';

import { loader as redirectLoginLoader } from './pages/Root';
import { userProfileRoute } from './routes/UserProfile';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      id: 'root',
      //loader: checkAuthLoader,
      children: [
        {
          index: true,
          loader: redirectLoginLoader,
        },
        marketingRoute,
        repositoryRoute,
        systemManagementRoute,
        HrRoute,
        userProfileRoute,
      ],
    },
    {
      path: '/login',
      element: <LoginPage />,
      action: loginUser,
      loader: checkLoginLoader,
    },
    {
      path: '/logout',
      action: logoutUser,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
