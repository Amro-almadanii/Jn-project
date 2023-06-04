import CustomerForm from '../../../components/Marketing/customer/CustomerForm';
import { useRouteLoaderData } from 'react-router-dom';

const EditCustomerPage = () => {
  const { data:customer }= useRouteLoaderData('customer-detail');

  return (
    <>
      <h1 style={{margin:"20px"}} > Marketing > Customers > Create New Customer</h1>
      <CustomerForm method="put"  customer={customer}/>
    </>
  );
};

export default EditCustomerPage;
