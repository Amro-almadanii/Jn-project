import { json, useLoaderData } from 'react-router-dom';
import SuppliersList from '../../../components/Repository/supplier/SuppliersList';
import { getAuthToken } from '../../../util/auth';
import './Suppliers.css';
const SuppliersPage = () => {
  const { data: suppliers } = useLoaderData();

  return (
    <div className="suppliers">
      <h1>Suppliers Page</h1>
      <SuppliersList suppliers={suppliers} />
    </div>
  );
};

export default SuppliersPage;

export async function loader() {
  const token = getAuthToken();

  const response = await fetch('http://localhost:8000/repository/suppliers', {
    headers: {
      Authorization: 'bearer' + token,
    },
  });

  if (!response.ok) {
    throw json({ message: 'Could not fetch suppliers.' }, { status: 500 });
  } else {
    return response;
  }
}
