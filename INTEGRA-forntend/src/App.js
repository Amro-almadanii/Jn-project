import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage, { action as loginUser } from './pages/Login';
import { action as logoutUser } from './pages/Logout';

import { marketingRoute } from './routes/Marketing';
import { repositoryRoute } from './routes/Repository/Repository';

import { checkLoginLoader, tokenLoader } from './hooks/auth';
import React from 'react';
import { systemManagmentRoute } from './routes/SystemManagment';
import { HrRoute } from './routes/HR';

import { action as redirectLoginLoader } from './pages/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      id: 'root',
      loader: tokenLoader,
      children: [
        {
          index: true,
          loader: redirectLoginLoader,
        },
        marketingRoute,
        repositoryRoute,
        systemManagmentRoute,
        HrRoute,
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
