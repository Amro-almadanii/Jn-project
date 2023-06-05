// import CustomersPage, {
//   loader as CustomersLoader,
// } from '../../pages/Marketing/customer/Customers';
// import NewCustomerPage from '../../pages/Marketing/customer/NewCustomer';
// import CustomerDetailPage, {
//   loader as CustomerDetailLoader,
//   action as deleteCustomerAction,
// } from '../../pages/Marketing/customer/CustomerDetail';
// import EditCustomerPage from '../../pages/Marketing/customer/EditCustomer';
// import { action as manipulateCustomerAction } from '../../components/Marketing/customer/CustomerForm';
//
//
// {
//   path: '/marketing/customers',
//     children: [
//   {
//     index: true,
//     element: <CustomersPage />,
//     loader: CustomersLoader,
//   },
//   {
//     path: '/marketing/customers/new',
//     children: [
//       {
//         index: true,
//         element: <NewCustomerPage />,
//         action: manipulateCustomerAction,
//         loader: checkAuthLoader,
//       },
//     ],
//   },
//   {
//     path: '/marketing/customers/customer-detail',
//     id: 'customer-detail',
//     loader: CustomerDetailLoader,
//     children: [
//       {
//         path: '/marketing/customers/customer-detail/:customerId',
//         element: <CustomerDetailPage />,
//         action: deleteCustomerAction,
//         loader: checkAuthLoader,
//       },
//       {
//         path: '/marketing/customers/customer-detail/edit/:customerId',
//         element: <EditCustomerPage />,
//         action: manipulateCustomerAction,
//         loader: checkAuthLoader,
//       },
//     ],
//   },
// ],
// },