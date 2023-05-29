import { Link } from 'react-router-dom';
import './CategoriesList.module.css';
const CategoriesList = ({ categories }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '20px',
      }}
    >
      <h1>All Categories</h1>
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
            <th>Category Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'var(--therd-color)',
                  }}
                  to={`/repository/categories/category-detail/${category.id}`}
                >
                  {category.id}
                </Link>
              </td>
              <td>{category.name}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Category Id</th>
            <th>Name</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CategoriesList;
