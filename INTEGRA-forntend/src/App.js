import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage, { action as loginUser } from './pages/Login';
import { action as logoutUser } from './pages/Logout';

import { marketingRoute } from './routes/Marketing';
import { repositoryRoute } from './routes/Repository/Repository';

import { checkAuthLoader } from './hooks/auth';
import React from 'react';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      id: 'root',
      loader: checkAuthLoader,
      children: [
        marketingRoute,
        repositoryRoute,
      ]
    },
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
