import { Link } from 'react-router-dom';
import './ProductsList.module.css';
const ProductsList = ({ products }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '20px',
      }}
    >
      <h1>All Products</h1>
      <table
        style={{
          textAlign: 'center',
          backgroundColor: 'var(--second-color)',
          color: 'var(--text-color)',
          bordercollapse: 'collapse',
          borderRadius: '4px',
        }}
      >
        <thead className="thead">
          <tr>
            <th>Product Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'var(--therd-color)',
                  }}
                  to={`/repository/products/product-detail/${product.id}`}
                >
                  {product.id}
                </Link>
              </td>
              <td>{product.name}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Product Id</th>
            <th>Name</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ProductsList;
