import { Link, useSubmit } from 'react-router-dom';
import './SupplierItem.module.css';
const SupplierItem = ({ supplier }) => {
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
        backgroundColor: 'var(--secound-color)',
        width: 'calc(100vw - 270px)',
        borderRadius: '4px',
      }}
    >
      <h1 style={{ color: 'var(--text-color)' }}> Supplier Item:</h1>
      <div>
        <label>Name of Supplier:</label>
        <p className="p"> {supplier.name} </p>
        <label>Address of Supplier:</label>
        <p className="p"> {supplier.address} </p>
        <label>SEmail of Supplier:</label>
        <p className="p"> {supplier.email} </p>
        <label>Phone Number of Supplier:</label>
        <p className="p"> {supplier.phone_number} </p>
      </div>
      <div
        style={{
          marginLeft: '50px',
          marginTop: '40px',
          display: 'flex',
        }}
      >
        <Link
          to={`/repository/suppliers/supplier-detail/edit/${supplier.id}`}
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

export default SupplierItem;
