import ProductForm from '../../../components/Repository/product/ProductForm';
import { useRouteLoaderData } from 'react-router-dom';

const EditProductPage = () => {
  const { data: product } = useRouteLoaderData('product-detail');

  return (
    <>
      <h1>Edit Page</h1>
      <ProductForm method="put" product={product} />
    </>
  );
};

export default EditProductPage;
