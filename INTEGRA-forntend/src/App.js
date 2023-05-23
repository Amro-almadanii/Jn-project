import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage, { action as loginUser } from './pages/Login';
import { action as logoutUser } from './pages/Logout';

import { marketingRoute } from './util/routes/Marketing';

function App() {
  const router = createBrowserRouter([
    marketingRoute,
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
