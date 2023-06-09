import { Link, useSubmit } from 'react-router-dom';
import classes from './ProductItem.module.scss';
import { Card } from '@mui/material';
import { useEffect, useState } from 'react';


const ProductItem = ({ product }) => {
  const [keysOfDetail, setKeysOfDetail] = useState([]);
  const [keysOfGroupsOfDetail, setKeysOfGroupsOfDetail] = useState([]);
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
      for (const key in product.details) {
        const detail = product.details[key];
        console.log(`${key}: ${product.details[key]}`);
        for (const key in detail) {
          keys.push(key);
        }
        break;
      }
      return keys;
    };

    const getKeysOfGroups = () => {
      const keysOfGroups = [];
      for (const key in product.details) {
        keysOfGroups.push(key);
      }

      return keysOfGroups;
    };

    const keys = getKeys();
    setKeysOfDetail(keys);

    const keysOfGroups = getKeysOfGroups();
    setKeysOfGroupsOfDetail(keysOfGroups);
  }, []);

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
          </tr>
          </thead>
          <tbody>
          {keysOfGroupsOfDetail.map((keyOfGroup) => (
            <tr key={keyOfGroup}>
              {keysOfDetail.map((key) => (
                <td key={key}>{product.details[keyOfGroup][key]}</td>
              ))}
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductItem;