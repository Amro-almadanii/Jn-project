import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

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
// import imports from './pages/Repository/import/Imports';
import { AdmainistrasionRoute } from './routes/Admainistrasion';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      id: 'root',
      loader: checkAuthLoader,
      children: [
        {
          index: true,
          loader: redirectLoginLoader
        },
        marketingRoute,
        repositoryRoute,
        systemManagementRoute,
        HrRoute,
        userProfileRoute,
        AdmainistrasionRoute
      ]
    },
    {
      path: '/login',
      element: <LoginPage />,
      action: loginUser,
      loader: checkLoginLoader
    },
    {
      path: '/logout',
      action: logoutUser,
    }
  ]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
