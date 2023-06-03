import { Link, useSubmit } from 'react-router-dom';
import './ProductItem.module.scss';
const ProductItem = ({ product }) => {
  const submit = useSubmit();

  const deleteHandler = () => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };

  return (
    <div
      style={{
        margin: '10px',
        backgroundColor: 'var(--second-color)',
        width: 'calc(100vw - 270px)',
        borderRadius: '4px',
      }}
    >
      <h1 style={{ color: 'var(--text-color)' }}> Product Item:</h1>
      <div>
        <label>Name of Product:</label>
        <p className="p"> {product.name} </p>
      </div>
      <div
        style={{
          marginLeft: '50px',
          marginTop: '40px',
          display: 'flex',
        }}
      >
        <Link
          to={`/repository/products/product-detail/edit/${product.id}`}
          style={{
            textDecoration: 'none',
            color: 'var(--text-color)',
            backgroundColor: 'var(--therd-color)',
            padding: '6px',
            borderRadius: '4px',
            margin: '10px',
            borderStyle: 'none',
          }}
        >
          Edit
        </Link>
        <button
          onClick={deleteHandler}
          style={{
            margin: '10px',
            backgroundColor: 'var(--therd-color)',
            borderStyle: 'none',
            padding: '6px',
            borderRadius: '4px',
            color: 'var(--text-color)',
            cursor: 'pointer',
            width: '70px',
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
