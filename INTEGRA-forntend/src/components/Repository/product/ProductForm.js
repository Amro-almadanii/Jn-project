import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import classes from './ProductForm.module.css';
import { getAuthToken } from '../../../util/auth';

const ProductForm = ({ method, product }) => {
  //const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  const cancelHandler = () => {
    navigate('../' + product.id);
  };

  return (
    <div className={classes.containar}>
      <Form method={method} className={classes.form}>
        <h1 style={{ color: 'var(--second-color)' }}>Create product:</h1>
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

        <div className={classes.actions}>
          <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
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
  };

  let url;

  if (method === 'PUT') {
    url =
      'http://localhost:8000/repository/product/update/' + params.productId;
  } else {
    url = 'http://localhost:8000/repository/product/store';
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
