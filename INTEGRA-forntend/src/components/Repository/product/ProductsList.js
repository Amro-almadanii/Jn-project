import { Link, redirect, useNavigate } from 'react-router-dom';
import classes from './ProductsList.module.scss';
const ProductsList = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div className={classes.productsList}>
      <h1>Marketing > Products</h1>
      <div className={classes.add_product}>
        <Link
          className={classes.add_product_link}
          to="/repository/products/new"
        >
          Add New Product
        </Link>
      </div>
      <table>
        <thead>
        <tr>
          <th>Product Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Category Id</th>
          <th>Supplier ID</th>
        </tr>
        </thead>
        <tbody>
        {products.map((product) => (
          <tr
            key={product.id}
            onClick={() =>
              navigate(`/repository/products/product-detail/${product.id}`)
            }
          >
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity_in_stock}</td>
            <td>{product.category_id}</td>
            <td>{product.supplier_id}</td>
          </tr>
        ))}
        </tbody>
        <tfoot>
        <tr>
          <th>Product Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Category Id</th>
          <th>Supplier ID</th>
        </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ProductsList;
