import ProductForm from '../../../components/Repository/product/ProductForm';
import { useRouteLoaderData } from 'react-router-dom';
import classes from './newProduct.module.scss';


const EditProductPage = () => {
  const { data: product } = useRouteLoaderData('product-detail');

  return (
    <div className={classes.newProduct}>
      <h1>Repository > Product > Edit {product.name}</h1>
      <ProductForm method="put" product={product} />
    </div>
  );
};

export default EditProductPage;
