import { Link, useSubmit } from 'react-router-dom';
import classes from './ProductItem.module.scss';
import { Card } from '@mui/material';
import { useEffect, useState } from 'react';


const ProductItem = ({ product }) => {
  const [keysOfDetail, setKeysOfDetail] = useState([]);
  const submit = useSubmit();

  const deleteHandler = () => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };

  useEffect(() => {
    const getKeys = () => {
      const keys = [];
      if (product.details[0]) {
        for (const key in product.details[0].details) {
          keys.push(key);
        }
      }
      return keys;
    };

    const keys = getKeys();
    setKeysOfDetail(keys);
  }, []);

  console.log(product.details)

  return (
    <div className={classes.productItem}>
      <h1> Repository > Product Item > {product.name}:</h1>
      <div className={classes.box}>
        <Card className={classes.card}>
          <div className={classes.cardItems}>
            <label>Name of Product :</label>
            <p> {product.name} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Description of Product :</label>
            <p> {product.description} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Price of Product :</label>
            <p> {product.price} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Quantity of Product :</label>
            <p> {product.quantity_in_stock} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Category of Product :</label>
            <p><Link className={classes.subLink}
                     to={`/repository/categories/category-detail/${product.category_id}`}> {product.category}</Link></p>
          </div>
          <div className={classes.cardItems}>
            <label>Supplier of Product :</label>
            <p><Link className={classes.subLink}
                     to={`/repository/suppliers/supplier-detail/${product.supplier_id}`}> {product.supplier} </Link></p>
          </div>
          <div className={classes.btn}>
            <Link
              className={classes.link}
              to={`/repository/products/product-detail/edit/${product.id}`}
            >
              Edit
            </Link>
            <Link
              className={classes.link}
              to={`/repository/products/new/newDetail/${product.id}`}
            >
              Create new Detail
            </Link>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        </Card>
      </div>
      <div className={classes.productDetail}>
        <h1>Details of Product</h1>
        <table>
          <thead>
          <tr>
            {
              keysOfDetail.map((key) => (
                <th key={key}>{key}</th>
              ))
            }
            {product.details[0] && <th>Stock</th>}
            {product.details[0] && <th>Edit</th>}
            {product.details[0] && <th>Delete</th>}
          </tr>
          </thead>
          <tbody>
          {product.details.map((detail) => (
            <tr key={detail.id}>
              {keysOfDetail.map((key) => (
                <td key={key}>{detail.details[key]}</td>
              ))}
              <td>{detail.stock}</td>
              <td><Link to={`/repository/products/product-detail/editDetail/${detail.id}`} className={classes.link}>Edit</Link></td>
              <td><button>Delete</button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductItem;