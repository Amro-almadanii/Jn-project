import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import classes from './ProductForm.module.scss';
import { getAuthToken } from '../../../util/auth';

const ProductForm = ({ method, product }) => {
  // const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  const cancelHandler = () => {
    navigate('../' + product.id);
  };

  return (
    <div className={classes.productForm}>
      <Form method={method} className={classes.form}>
        <h1>Marketing > Product > Create New Product:</h1>
        <p>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            defaultValue={product ? product.name : ''}
          />
        </p>
        <p>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            name="address"
            required
            defaultValue={product ? product.address : ''}
          />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            defaultValue={product ? product.email : ''}
          />
        </p>
        <p>
          <label htmlFor="phone_number">Phone Number</label>
          <input
            id="phone_number"
            type="number"
            name="phone_number"
            required
            defaultValue={product ? product.phone_number : ''}
          />
        </p>
        <div className={classes.actions}>
          <button onClick={cancelHandler} disabled={isSubmitting}>
            Cancel
          </button>
          <button disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Save'}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ProductForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();

  const productData = {
    name: data.get('name'),
    address: data.get('address'),
    email: data.get('email'),
    phone_number: data.get('phone_number'),
  };

  let url;

  if (method === 'PUT') {
    url =
      'http://localhost:8000/repository/products/' + params.productId;
  } else {
    url = 'http://localhost:8000/repository/products';
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer' + token,
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    throw json({ message: 'Could not save product.' }, { status: 500 });
  }

  return redirect('/repository/products');
}
