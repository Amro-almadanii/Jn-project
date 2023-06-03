import CustomerForm from '../../../components/Marketing/customer/CustomerForm';
import { useRouteLoaderData } from 'react-router-dom';

const EditCustomerPage = () => {
  const { data:customer }= useRouteLoaderData('customer-detail');

  return (
    <>
      <h1>Edit Page</h1>
      <CustomerForm method="put"  customer={customer}/>
    </>
  );
};

export default EditCustomerPage;
