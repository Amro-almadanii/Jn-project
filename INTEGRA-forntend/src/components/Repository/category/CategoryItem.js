import { Link, useSubmit } from 'react-router-dom';
import './CategoryItem.module.css';
const CategoryItem = ({ category }) => {
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
      <h1 style={{ color: 'var(--text-color)' }}> Category Item:</h1>
      <div>
        <label>Name of Category:</label>
        <p className="p"> {category.name} </p>
      </div>
      <div
        style={{
          marginLeft: '50px',
          marginTop: '40px',
          display: 'flex',
        }}
      >
        <Link
          to={`/repository/categories/category-detail/edit/${category.id}`}
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

export default CategoryItem;
