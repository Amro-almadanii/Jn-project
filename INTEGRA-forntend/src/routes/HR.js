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

import BenefitDetailPage, {
  loader as BenefitsDetailLoader,
} from '../pages/HR/Benefit/BenefitDetail';

import NewDepartmentPage from '../pages/HR/Department/NewDeparment';
import NewBenefitPage from '../pages/HR/Benefit/NewBenefit';

import { action as manipulateBenefitAction } from '../components/HR/Benefit/BenefitForm';
import { action as manipulateDepartmentAction } from '../components/HR/Department/DepartmentForm';
import { action as manipulateEmployeeCertificateAction } from '../components/HR/EmployeeCertificate/EmployeeCertificateForm';

import NewEmployeeCertificatePage from '../pages/HR/EmployeeCertificate/NewEmployeeCertificate';
import NewEmployeeControllerPage from '../pages/HR/EmployeeController/NewEmployeeController';

import { action as manipulateEmployeeControllerAction } from '../components/HR/EmployeeController/EmployeeControllerForm';

import NewEmployeeEducationPage from '../pages/HR/EmployeeEducationController/NewEmployeeEducationController';

import { action as manipulateEmployeeEducationAction } from '../components/HR/EmployeeEducationController/EmployeeEducationForm';

import NewEmployeePerformancePage from '../pages/HR/EmployeePerformance/NewEmployeePerformance';

import { action as manipulateEmployeePerformanceAction } from '../components/HR/EmployeePerformanceController/EmployeePerformanceForm';

import NewEmployeeVacationPage from '../pages/HR/EmployeeVacation/NewEmployeeVacation';

import EditBenefitPage from '../pages/HR/Benefit/EditBenefit';
import EditDepartmentPage from '../pages/HR/Department/EditDepartment';
import EditEmployeeCertificatePage from '../pages/HR/EmployeeCertificate/EditEmployeeCertificate';
import EditEmployeePage from '../pages/HR/EmployeeController/EditEmployee';
import EditEmployeeEducationPage from '../pages/HR/EmployeeEducationController/EditEmployeeEducation';

import EditEmployeePerformancePage from '../pages/HR/EmployeePerformance/EdirEmployeePerformance';

import EditEmployeeVacationPage from '../pages/HR/EmployeeVacation/EditEmployeeVacation';

import { action as manipulateEmployeeVacationAction } from '../components/HR/EmployeeVacationController/EmployeeVacationForm';
import RootLayout from '../pages/Root';
import ErrorPage from '../pages/Error';
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
        {
          path: '/hr/benefits/benefit-detail',
          id: 'benefit-detail',
          loader: BenefitsDetailLoader,
          children: [
            //     {
            //       path: '/marketing/tvs/tv-detail/:tvId',
            //       element: <TVDetailPage />,
            //       action: deleteTVAction,
            //       loader: checkAuthLoader,
            //     },
            {
              path: '/hr/benefits/benefit-detail/edit/:benefitId',
              element: <EditBenefitPage />,
              action: manipulateBenefitAction,
              loader: checkAuthLoader,
            },
          ],
        },

        // {
        //   path: '/hr/benefits/new',
        //   element: <NewBenefitPage />,
        //   action: manipulateBenefitAction,
        //   loader: checkAuthLoader,
        // },
        // {
        //   path: '/hr/benefits/edit',
        //   element: <EditBenefitPage />,
        //   action: manipulateBenefitAction,
        //   loader: BenefitsDetailLoader,
        // },
      ],
    },
    {
      path: '/hr/departments',
      children: [
        {
          index: true,
          element: <DepartmentsPage />,
          loader: DepartmentLoader,
        },
        // {
        //   path: '/marketing/tvs/tv-detail',
        //   id: 'tv-detail',
        //   loader: TVDetailLoader,
        //   children: [
        //     {
        //       path: '/marketing/tvs/tv-detail/:tvId',
        //       element: <TVDetailPage />,
        //       action: deleteTVAction,
        //       loader: checkAuthLoader,
        //     },
        //     {
        //       path: '/marketing/tvs/tv-detail/edit/:tvId',
        //       element: <EditTVPage />,
        //       action: manipulateTVAction,
        //       loader: checkAuthLoader,
        //     },
        {
          path: '/hr/departments/new',
          element: <NewDepartmentPage />,
          action: manipulateDepartmentAction,
          loader: checkAuthLoader,
        },
        {
          path: '/hr/departments/edit',
          element: <EditDepartmentPage />,
          action: manipulateDepartmentAction,
          loader: checkAuthLoader,
        },
      ],
    },
    {
      path: '/hr/employeeCertificates',
      children: [
        {
          index: true,
          element: <EmployeeCertificatesPage />,
          loader: EmployeeCertificateLoader,
        },
        {
          path: '/hr/employeeCertificates/new',
          element: <NewEmployeeCertificatePage />,
          action: manipulateEmployeeCertificateAction,
          loader: checkAuthLoader,
        },
        {
          path: '/hr/employeeCertificates/edit',
          element: <EditEmployeeCertificatePage />,
          action: manipulateEmployeeCertificateAction,
          loader: checkAuthLoader,
        },
      ],
    },
    {
      path: '/hr/employees',
      children: [
        {
          index: true,
          element: <EmployeeControllersPage />,
          loader: EmployeeControllerLoader,
        },
        {
          path: '/hr/employees/new',
          element: <NewEmployeeControllerPage />,
          action: manipulateEmployeeControllerAction,
          loader: checkAuthLoader,
        },
        {
          path: '/hr/employees/edit',
          element: <EditEmployeePage />,
          action: manipulateEmployeeControllerAction,
          loader: checkAuthLoader,
        },
      ],
    },
    {
      path: '/hr/employeeEducations',
      children: [
        {
          index: true,
          element: <EmployeeEducationControllersPage />,
          loader: EmployeeEducationControllerLoader,
        },
        {
          path: '/hr/employeeEducations/new',
          element: <NewEmployeeEducationPage />,
          action: manipulateEmployeePerformanceAction,
          loader: checkAuthLoader,
        },
        {
          path: '/hr/employeeEducations/edit',
          element: <EditEmployeeEducationPage />,
          action: manipulateEmployeePerformanceAction,
          loader: checkAuthLoader,
        },
      ],
    },
    {
      path: '/hr/employeePerformances',
      children: [
        {
          index: true,
          element: <EmployeePerformanceControllersPage />,
          loader: EmployeePerformanceControllerLoader,
        },
        {
          path: '/hr/employeePerformances/new',
          element: <NewEmployeePerformancePage />,
          action: manipulateEmployeeEducationAction,
          loader: checkAuthLoader,
        },
        {
          path: '/hr/employeePerformances/edit',
          element: <EditEmployeePerformancePage />,
          action: manipulateEmployeeEducationAction,
          loader: checkAuthLoader,
        },
      ],
    },
    {
      path: '/hr/employeeVacations',
      children: [
        {
          index: true,
          element: <EmployeeVacationControllersPage />,
          loader: EmployeeVacationControllerLoader,
        },
        {
          path: '/hr/employeeVacations/new',
          element: <NewEmployeeVacationPage />,
          action: manipulateEmployeeVacationAction,
          loader: checkAuthLoader,
        },
        {
          path: '/hr/employeeVacations/new',
          element: <NewEmployeeVacationPage />,
          action: manipulateEmployeeVacationAction,
          loader: checkAuthLoader,
        },
        {
          path: '/hr/employeeVacations/edit',
          element: <EditEmployeeVacationPage />,
          action: manipulateEmployeeVacationAction,
          loader: checkAuthLoader,
        },
      ],
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
