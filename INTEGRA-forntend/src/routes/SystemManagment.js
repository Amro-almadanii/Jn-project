import MarketingInfo from '../pages/SystemManagment/MarketingInfo';
import RootLayout from '../pages/Root';
import ErrorPage from '../pages/Error';

export const systemManagmentRoute = {
  path: '/systemManagment',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/systemManagment/marketing',
      element: <MarketingInfo />,
      // loader:,
    },
  ],
};
