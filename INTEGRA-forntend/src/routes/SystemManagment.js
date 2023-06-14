import MarketingInfo from '../pages/SystemManagment/MarketingInfo';
import RootLayout from '../pages/Root';
import ErrorPage from '../pages/Error';

export const systemManagementRoute = {
  path: '/systemManagement',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/systemManagement/marketing',
      element: <MarketingInfo />,
      // loader:,
    },
  ],
};
