import SupplierForm from '../../../components/Repository/supplier/SupplierForm';

const NewSupplierPage = () => {
  return (
    <div>
      <h1> Repository > Suppliers > Create New Supplier </h1>
      <SupplierForm method="post" />
    </div>
  );
};

export default NewSupplierPage;
