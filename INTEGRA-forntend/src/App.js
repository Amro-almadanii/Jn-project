import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Marketing/Root';
import LoginPage, { action as loginUser } from './pages/Login';
import { action as logoutUser} from './pages/Logout';
import ErrorPage from './pages/Marketing/Error';
import { checkAuthLoader, tokenLoader } from './util/auth';

import CampaignsPage, {
  loader as CampaignsLoader,
} from './pages/Marketing/campaign/Campaigns';
import NewCampaignPage from './pages/Marketing/campaign/NewCampaign';
import CampaignDetailPage, {
  loader as CampaignDetailLoader,
  action as deleteCampaignAction
} from './pages/Marketing/campaign/CampaignDetail';
import EditCampaignPage from './pages/Marketing/campaign/EditCampaign';
import { action as manipulateCampaignAction } from './components/Marketing/campaign/CampaignForm';

import TVsPage, {
  loader as TVsLoader,
} from './pages/Marketing/tv/TVs';
import NewTVPage from './pages/Marketing/tv/NewTV';
import TVDetailPage, {
  loader as TVDetailLoader,
  action as deleteTVAction
} from './pages/Marketing/tv/TVDetail';
import EditTVPage from './pages/Marketing/tv/EditTV';
import { action as manipulateTVAction } from './components/Marketing/tv/TVForm';

import SocialMediaPage, {
  loader as SocialMediaLoader,
} from './pages/Marketing/socialMedia/SocialMedia';
import NewSocialMediaPage from './pages/Marketing/socialMedia/NewSocialMedia';
import SocialMediaDetailPage, {
  loader as SocialMediaDetailLoader,
  action as deleteSocialMediaAction
} from './pages/Marketing/socialMedia/SocialMediaDetail';
import EditSocialMediaPage from './pages/Marketing/socialMedia/EditSocialMedia';
import { action as manipulateSocialMediaAction } from './components/Marketing/socialMedia/SocialMediaForm';

import EventsPage, {
  loader as EventsLoader,
} from './pages/Marketing/event/Events';
import NewEventPage from './pages/Marketing/event/NewCampaign';
import EventDetailPage, {
  loader as EventDetailLoader,
  action as deleteEventAction
} from './pages/Marketing/event/EventDetail';
import EditEventPage from './pages/Marketing/event/EditEvent';
import {action as manipulateEventAction } from './components/Marketing/event/EventForm';

import PDFsPage, {
  loader as PDFsLoader
} from './pages/Marketing/PDF/PDFs';
import PDFDetailPage, {
  action as deletePDFAction,
  loader as PDFDetailLoader,
} from './pages/Marketing/PDF/PDFDetail';
import NavBar from './components/Marketing/layout/NavBar';

function App() {
  const router = createBrowserRouter([
    {
      path: '/marketing',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      id: 'root',
      loader: tokenLoader,
      children: [
        {
          path: '/marketing/campaigns',
          children: [
            {
              index: true,
              element: <CampaignsPage />,
              loader: CampaignsLoader,
            },
            {
             path: '/marketing/campaigns/new',
             children: [
               {
                 index: true,
                 element: <NewCampaignPage />,
                 action: manipulateCampaignAction,
                 loader: checkAuthLoader,
               },
               {
                 path: '/marketing/campaigns/new/branch',
                 element: <NavBar />,
                 children: [
                   {
                     path: '/marketing/campaigns/new/branch/tv',
                     element: <NewTVPage />,
                     action: manipulateTVAction,
                     loader: checkAuthLoader,
                   },
                   {
                     path: '/marketing/campaigns/new/branch/socialMedia',
                     element: <NewSocialMediaPage />,
                     action: manipulateSocialMediaAction,
                     loader: checkAuthLoader,
                   },
                   {
                     path: '/marketing/campaigns/new/branch/event',
                     element: <NewEventPage />,
                     action: manipulateEventAction,
                     loader: checkAuthLoader,
                   },
                 ],
               },
             ],
            },
            {
              path: '/marketing/campaigns/campaign-detail',
              id: 'campaign-detail',
              loader: CampaignDetailLoader,
              children: [
                {
                  path: '/marketing/campaigns/campaign-detail/:campaignId',
                  element: <CampaignDetailPage />,
                  action: deleteCampaignAction,
                  loader: checkAuthLoader,
                },
                {
                  path: '/marketing/campaigns/campaign-detail/edit/:campaignId',
                  element: <EditCampaignPage />,
                  action: manipulateCampaignAction,
                  loader: checkAuthLoader,
                },
              ],
            },
          ],
        },
        {
          path: '/marketing/tvs',
          children: [
            {
              index: true,
              element: <TVsPage />,
              loader: TVsLoader,
            },
            {
              path: '/marketing/tvs/tv-detail',
              id: 'tv-detail',
              loader: TVDetailLoader,
              children: [
                {
                  path: '/marketing/tvs/tv-detail/:tvId',
                  element: <TVDetailPage />,
                  action: deleteTVAction,
                  loader: checkAuthLoader,
                },
                {
                  path: '/marketing/tvs/tv-detail/edit/:tvId',
                  element: <EditTVPage />,
                  action: manipulateTVAction,
                  loader: checkAuthLoader,
                },
              ],
            },
          ],
        },
        {
          path: '/marketing/socialMedia',
          children: [
            {
              index: true,
              element: <SocialMediaPage />,
              loader: SocialMediaLoader,
            },
            {
              path: '/marketing/socialMedia/socialMedia-detail',
              id: 'socialMedia-detail',
              loader: SocialMediaDetailLoader,
              children: [
                {
                  path: '/marketing/socialMedia/socialMedia-detail/:socialMediaId',
                  element: <SocialMediaDetailPage />,
                  action: deleteSocialMediaAction,
                  loader: checkAuthLoader,
                },
                {
                  path: '/marketing/socialMedia/socialMedia-detail/edit/:socialMediaId',
                  element: <EditSocialMediaPage />,
                  action: manipulateSocialMediaAction,
                  loader: checkAuthLoader,
                },
              ],
            },
          ],
        },
        {
          path: '/marketing/events',
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: EventsLoader,
            },
            {
              path: '/marketing/events/event-detail',
              id: 'event-detail',
              loader: EventDetailLoader,
              children: [
                {
                  path: '/marketing/events/event-detail/:eventId',
                  element: <EventDetailPage />,
                  action: deleteEventAction,
                  loader: checkAuthLoader,
                },
                {
                  path: '/marketing/events/event-detail/edit/:eventId',
                  element: <EditEventPage />,
                  action: manipulateEventAction,
                  loader: checkAuthLoader,
                },
              ],
            },
          ],
        },
        {
          path: '/marketing/pdfs',
          children: [
            {
              index: true,
              element: <PDFsPage />,
              loader: PDFsLoader,
            },
            {
              path: '/marketing/pdfs/pdf-detail',
              id: 'pdf-detail',
              loader: PDFDetailLoader,
              children: [
                {
                  path: '/marketing/pdfs/pdf-detail/:pdfId',
                  element: <PDFDetailPage />,
                  action: deletePDFAction,
                  loader: checkAuthLoader,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: '/login',
      element:<LoginPage />,
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
