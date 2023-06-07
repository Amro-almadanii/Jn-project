import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import classes from './BenefitForm.module.scss';
import { getAuthToken } from '../../../hooks/auth';

const BenefitForm = ({ method, benefit }) => {
  //const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  const cancelHandler = () => {
    navigate('../' + benefit.id);
  };

  return (
    <Form method={method} className={classes.form}>
      <div>
        <label htmlFor="blogger">Name :</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          defaultValue={benefit ? benefit.name : ''}
        />

        <label htmlFor="cost">Cost :</label>
        <input
          id="cost"
          type="text"
          name="cost"
          required
          defaultValue={benefit ? benefit.cost : ''}
        />

        <div className={classes.actions}>
          <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
            Cancel
          </button>
          <button disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Save'}
          </button>
        </div>
      </div>
    </Form>
  );
};

export default BenefitForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();

  const benefitData = {
    name: data.get('name'),
    cost: data.get('cost'),
    campaign_id: 1,
  };
  console.log(benefitData);
  let url;

  if (method === 'PUT') {
    url = 'http://localhost:8000/marketing/benefit/' + params.benefitId;
  } else {
    url = 'http://localhost:8000/marketing/benefit';
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer' + token,
    },
    body: JSON.stringify(benefitData),
  });

  if (!response.ok) {
    throw json({ message: 'Could not save SocialMedia.' }, { status: 500 });
  }

  return redirect('/marketing/benefit');
}
