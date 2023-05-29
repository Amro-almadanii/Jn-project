import { Link } from 'react-router-dom';
import './SuppliersList.module.css';
const SuppliersList = ({ suppliers }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '20px',
      }}
    >
      <h1>All Suppliers</h1>
      <table
        style={{
          textAlign: 'center',
          backgroundColor: 'var(--secound-color)',
          color: 'var(--text-color)',
          bordercollapse: 'collapse',
          borderRadius: '4px',
        }}
      >
        <thead className="thead">
          <tr>
            <th>Supplier Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'var(--therd-color)',
                  }}
                  to={`/repository/suppliers/supplier-detail/${supplier.id}`}
                >
                  {supplier.id}
                </Link>
              </td>
              <td>{supplier.name}</td>
              <td>{supplier.address}</td>
              <td>{supplier.email}</td>
              <td>{supplier.phone_number}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Supplier Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default SuppliersList;
