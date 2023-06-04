import CustomerForm from '../../../components/Marketing/customer/CustomerForm';

const NewCustomerPage = () => {

  return (
    <>
      <h1 style={{margin:"20px"}}> Marketing > Customers > Edit New Customer</h1>
      <CustomerForm method="post" />
    </>
  );
};

export default NewCustomerPage;
