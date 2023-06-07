import { getAuthToken } from '../../../../../hooks/auth';
import { Form, json, redirect, useNavigate, useNavigation } from 'react-router-dom';
import classes from './AttributeForm.module.scss';
import { useState } from 'react';

const AttributeForm = ({method, attribute}) => {
  const [numberOfValues, setNumberOfValues] = useState([1, 2]);
  // const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  const cancelHandler = () => {
    navigate('../' + attribute.id);
  };

  const onClickHandler = () => {
    var value = numberOfValues.length;
    setNumberOfValues(numberOfValues.concat(value));
  };

  return (
    <div className={classes.attributeForm}>
      <Form method={method} className={classes.form}>
        <label htmlFor="name">Name Of Attribute:</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          defaultValue={attribute ? attribute.name : ''}
        />
        <label htmlFor="type">Type Of Attribute:</label>
        <select name="type">
          <option value="select">Select</option>
          <option value="text">Text</option>
          <option value="numeric">Number</option>
          <option value="date">Date</option>
        </select>

        <button onClick={onClickHandler}>Add Value</button>
        { numberOfValues.map((value)=>(
          <div key={value}>
            <label htmlFor={value}>Value Of Attribute:</label>
            <input
              id={value}
              type="text"
              name="values"
              required
              defaultValue={attribute ? attribute.name : ''}
            />
          </div>
          ))
        }
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
  )
}

export default AttributeForm;


export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();

  const groupData = {
    name: data.get('name'),
    type: data.get('type'),
    values: data.getAll('values'),
  };

  let url;

  if (method === 'PUT') {
    url =
      'http://localhost:8000/repository/products/attributes/' + params.attributeId;
  } else {
    url = 'http://localhost:8000/repository/products/attributes';
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer' + token,
    },
    body: JSON.stringify(groupData),
  });

  if (!response.ok) {
    throw json({ message: 'Could not save group.' }, { status: 500 });
  }

  return redirect('/repository/products/attributes/groups');
}
