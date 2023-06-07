import Profile from '../pages/SystemManagment/Profile';
import RootLayout from '../pages/Root';
import ErrorPage from '../pages/Error';

export const systemManagmentRoute = {
  path: '/systemmanagment',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/systemmanagment/profile',
      element: <Profile />,
    },
  ],
};
