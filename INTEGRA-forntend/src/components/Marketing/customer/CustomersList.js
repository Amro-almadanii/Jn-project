import { Link, useNavigate } from 'react-router-dom';
import classes from './CustomersList.module.scss';
const CustomersList = ({ customers }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.customersList}>
      <h1>All Customers</h1>
      <div className={classes.addNewCustomer}>
        <Link className={classes.customersList_link} to="/marketing/customers/new">
          Add New Customer
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Customer Id</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} onClick={ () => navigate( '/marketing/customers/customer-detail/1' ) }>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.gender}</td>
              <td>{customer.age}</td>
              <td>{customer.address}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Customer Id</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CustomersList;
