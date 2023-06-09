import { Link, useSubmit } from 'react-router-dom';
import classes from './SupplierItem.module.scss';
import tableClasses from '../product/ProductsList.module.scss';
import { useEffect, useState } from 'react';
import { useProductsBySupplier } from '../../../hooks/useApi';
import ProductsTable from '../product/UI/ProductsTable';

const SupplierItem = ({ supplier }) => {
  const [products, setProducts] = useState([]);
  const submit = useSubmit();

  const productResponse = useProductsBySupplier(supplier.id);

  useEffect(() => {
    setProducts(productResponse);
  }, [productResponse]);

  const deleteHandler = () => {
    const proceed = window.confirm('Are you sure?' +
      'Deleting a supplier will also delete all associated products');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };

  return (
    <div className={classes.supplierItem}>
      <h1>Repository > Suppliers > {supplier.name}</h1>
      <div className={classes.btn}>
        <button type="button"
                onClick={deleteHandler}>Delete Supplier
        </button>
      </div>
      <div className={tableClasses.productsList}>
        <ProductsTable products={products}/>
      </div>
    </div>
  );
};

export default SupplierItem;
