import BenefitsPage, {
  loader as BenefitLoader,
} from '../pages/HR/Benefit/Benefit';

import DepartmentsPage, {
  loader as DepartmentLoader,
} from '../pages/HR/Department/Department';

import EmployeeCertificatesPage, {
  loader as EmployeeCertificateLoader,
} from '../pages/HR/EmployeeCertificate/EmployeeCertificate';

import EmployeeControllersPage, {
  loader as EmployeeControllerLoader,
} from '../pages/HR/EmployeeController/EmployeeController';

import EmployeeEducationControllersPage, {
  loader as EmployeeEducationControllerLoader,
} from '../pages/HR/EmployeeEducationController/EmployeeEducationController';

import EmployeePerformanceControllersPage, {
  loader as EmployeePerformanceControllerLoader,
} from '../pages/HR/EmployeePerformance/EmployeePerformanceController';

import EmployeeVacationControllersPage, {
  loader as EmployeeVacationControllerLoader,
} from '../pages/HR/EmployeeVacation/EmployeeVacationController';

import { action as manipulateBenefitAction } from '../components/HR/Benefit/BenefitForm';
import NewBenefitPage from '../pages/HR/Benefit/NewBenefit';
import RootLayout from '../pages/Marketing/Root';
import ErrorPage from '../pages/Marketing/Error';
import { checkAuthLoader } from '../hooks/auth';
export const HrRoute = {
  path: '/hr',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/hr/benefits',
      children: [
        {
          index: true,
          element: <BenefitsPage />,
          loader: BenefitLoader,
        },
        {
          path: '/hr/benefits/new',
          element: <NewBenefitPage />,
          action: manipulateBenefitAction,
          loader: checkAuthLoader,
        },
      ],
    },
    {
      path: '/hr/departments',
      element: <DepartmentsPage />,
      loader: DepartmentLoader,
    },
    {
      path: '/hr/employeeCertificate',
      element: <EmployeeCertificatesPage />,
      loader: EmployeeCertificateLoader,
    },
    {
      path: '/hr/employees',
      element: <EmployeeControllersPage />,
      loader: EmployeeControllerLoader,
    },
    {
      path: '/hr/employeeEducations',
      element: <EmployeeEducationControllersPage />,
      loader: EmployeeEducationControllerLoader,
    },
    {
      path: '/hr/employeePerformances',
      element: <EmployeePerformanceControllersPage />,
      loader: EmployeePerformanceControllerLoader,
    },
    {
      path: '/hr/employeeVacations',
      element: <EmployeeVacationControllersPage />,
      loader: EmployeeVacationControllerLoader,
    },
  ],
};
// children: [
//   {
//     index: true,
//     element: <CampaignsPage />,
//     loader: CampaignsLoader,
//   },
//   {
//             path: '/marketing/campaigns/new',
//             children: [
//               {
//                 index: true,
//                 element: <NewCampaignPage />,
//                 action: manipulateCampaignAction,
//                 loader: checkAuthLoader,
//               },
//               {
//                 path: '/marketing/campaigns/new/branch',
//                 element: <NavBar />,
//                 children: [
//                   {
//                     path: '/marketing/campaigns/new/branch/tv',
//                     element: <NewTVPage />,
//                     action: manipulateTVAction,
//                     loader: checkAuthLoader,
//                   },
//                   {
//                     path: '/marketing/campaigns/new/branch/socialMedia',
//                     element: <NewSocialMediaPage />,
//                     action: manipulateSocialMediaAction,
//                     loader: checkAuthLoader,
//                   },
//                   {
//                     path: '/marketing/campaigns/new/branch/event',
//                     element: <NewEventPage />,
//                     action: manipulateEventAction,
//                     loader: checkAuthLoader,
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             path: '/marketing/campaigns/campaign-detail',
//             id: 'campaign-detail',
//             loader: CampaignDetailLoader,
//             children: [
//               {
//                 path: '/marketing/campaigns/campaign-detail/:campaignId',
//                 element: <CampaignDetailPage />,
//                 action: deleteCampaignAction,
//                 loader: checkAuthLoader,
//               },
//               {
//                 path: '/marketing/campaigns/campaign-detail/edit/:campaignId',
//                 element: <EditCampaignPage />,
//                 action: manipulateCampaignAction,
//                 loader: checkAuthLoader,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         path: '/marketing/tvs',
//         children: [
//           {
//             index: true,
//             element: <TVsPage />,
//             loader: TVsLoader,
//           },
//           {
//             path: '/marketing/tvs/tv-detail',
//             id: 'tv-detail',
//             loader: TVDetailLoader,
//             children: [
//               {
//                 path: '/marketing/tvs/tv-detail/:tvId',
//                 element: <TVDetailPage />,
//                 action: deleteTVAction,
//                 loader: checkAuthLoader,
//               },
//               {
//                 path: '/marketing/tvs/tv-detail/edit/:tvId',
//                 element: <EditTVPage />,
//                 action: manipulateTVAction,
//                 loader: checkAuthLoader,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         path: '/marketing/socialMedia',
//         children: [
//           {
//             index: true,
//             element: <SocialMediaPage />,
//             loader: SocialMediaLoader,
//           },
//           {
//             path: '/marketing/socialMedia/socialMedia-detail',
//             id: 'socialMedia-detail',
//             loader: SocialMediaDetailLoader,
//             children: [
//               {
//                 path: '/marketing/socialMedia/socialMedia-detail/:socialMediaId',
//                 element: <SocialMediaDetailPage />,
//                 action: deleteSocialMediaAction,
//                 loader: checkAuthLoader,
//               },
//               {
//                 path: '/marketing/socialMedia/socialMedia-detail/edit/:socialMediaId',
//                 element: <EditSocialMediaPage />,
//                 action: manipulateSocialMediaAction,
//                 loader: checkAuthLoader,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         path: '/marketing/events',
//         children: [
//           {
//             index: true,
//             element: <EventsPage />,
//             loader: EventsLoader,
//           },
//           {
//             path: '/marketing/events/event-detail',
//             id: 'event-detail',
//             loader: EventDetailLoader,
//             children: [
//               {
//                 path: '/marketing/events/event-detail/:eventId',
//                 element: <EventDetailPage />,
//                 action: deleteEventAction,
//                 loader: checkAuthLoader,
//               },
//               {
//                 path: '/marketing/events/event-detail/edit/:eventId',
//                 element: <EditEventPage />,
//                 action: manipulateEventAction,
//                 loader: checkAuthLoader,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         path: '/marketing/pdfs',
//         children: [
//           {
//             index: true,
//             element: <PDFsPage />,
//             loader: PDFsLoader,
//           },
//           {
//             path: '/marketing/pdfs/pdf-detail',
//             id: 'pdf-detail',
//             loader: PDFDetailLoader,
//             children: [
//               {
//                 path: '/marketing/pdfs/pdf-detail/:pdfId',
//                 element: <PDFDetailPage />,
//                 action: deletePDFAction,
//                 loader: checkAuthLoader,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         path: '/marketing/leads',
//         children: [
//           {
//             index: true,
//             element: <LeadsPage />,
//             loader: LeadsLoader,
//           },
//           {
//             path: '/marketing/leads/new',
//             children: [
//               {
//                 index: true,
//                 element: <NewLeadPage />,
//                 action: manipulateLeadAction,
//                 loader: checkAuthLoader,
//               },
//             ],
//           },
//           {
//             path: '/marketing/leads/lead-detail',
//             id: 'lead-detail',
//             loader: LeadDetailLoader,
//             children: [
//               {
//                 path: '/marketing/leads/lead-detail/:leadId',
//                 element: <LeadDetailPage />,
//                 action: deleteLeadAction,
//                 loader: checkAuthLoader,
//               },
//               {
//                 path: '/marketing/leads/lead-detail/edit/:leadId',
//                 element: <EditLeadPage />,
//                 action: manipulateLeadAction,
//                 loader: checkAuthLoader,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         path: '/marketing/emails',
//         children: [
//           {
//             index: true,
//             element: <EmailsPage />,
//             loader: EmailsLoader,
//           },
//           {
//             path: '/marketing/emails/new',
//             children: [
//               {
//                 index: true,
//                 element: <NewEmailPage />,
//                 action: manipulateEmailAction,
//                 loader: checkAuthLoader,
//               },
//             ],
//           },
//           {
//             path: '/marketing/emails/email-detail',
//             id: 'email-detail',
//             loader: EmailDetailLoader,
//             children: [
//               {
//                 path: '/marketing/emails/email-detail/:emailId',
//                 element: <EmailDetailPage />,
//                 action: deleteEmailAction,
//                 loader: checkAuthLoader,
//               },
//               {
//                 path: '/marketing/emails/email-detail/edit/:emailId',
//                 element: <EditEmailPage />,
//                 action: manipulateEmailAction,
//                 loader: checkAuthLoader,
//               },
//             ],
//           },
//         ],
//       },

//       {
//         path: '/marketing/customers',
//         children: [
//           {
//             index: true,
//             element: <CustomersPage />,
//             loader: CustomersLoader,
//           },
//           {
//             path: '/marketing/customers/new',
//             children: [
//               {
//                 index: true,
//                 element: <NewCustomerPage />,
//                 action: manipulateCustomerAction,
//                 loader: checkAuthLoader,
//               },
//             ],
//           },
//           {
//             path: '/marketing/customers/customer-detail',
//             id: 'customer-detail',
//             loader: CustomerDetailLoader,
//             children: [
//               {
//                 path: '/marketing/customers/customer-detail/:customerId',
//                 element: <CustomerDetailPage />,
//                 action: deleteCustomerAction,
//                 loader: checkAuthLoader,
//               },
//               {
//                 path: '/marketing/customers/customer-detail/edit/:customerId',
//                 element: <EditCustomerPage />,
//                 action: manipulateCustomerAction,
//                 loader: checkAuthLoader,
//               },
//             ],
//           },
//         ],
//       },
//      ],
//   };
