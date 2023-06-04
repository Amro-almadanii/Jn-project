import SupplierForm from '../../../components/Repository/supplier/SupplierForm';
import { useRouteLoaderData } from 'react-router-dom';

const EditSupplierPage = () => {
  const { data: supplier } = useRouteLoaderData('supplier-detail');

  return (
    <>
      <h1> Repository > Suppliers > Edit {supplier.name} </h1>
      <SupplierForm method="put" supplier={supplier} />
    </>
  );
};

export default EditSupplierPage;
