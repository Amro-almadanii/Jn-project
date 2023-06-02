import { json, useLoaderData } from 'react-router-dom';
import ProductsList from '../../../components/Repository/product/ProductsList';
import { getAuthToken } from '../../../util/auth';
import './Products.css';
const ProductsPage = () => {
  const { products } = useLoaderData();

  return (
    <div className="categories">
      <h1>Products Page</h1>
      <ProductsList products={products} />
    </div>
  );
};

export default ProductsPage;

export async function loader() {
  const token = getAuthToken();

  const response = await fetch('http://localhost:8000/repository/products', {
    headers: {
      Authorization: 'bearer' + token,
    },
  });

  if (!response.ok) {
    throw json({ message: 'Could not fetch products.' }, { status: 500 });
  } else {
    return response;
  }
}
