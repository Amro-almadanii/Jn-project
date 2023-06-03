import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import classes from './SocialMediaForm.module.scss';
import { getAuthToken } from '../../../util/auth';

const SocialMediaForm = ({ method, socialMedia }) => {
  //const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  const cancelHandler = () => {
    navigate('../' + socialMedia.id);
  };

  return (
    <Form method={method} className={classes.form}>
      <div>
        <label htmlFor="blogger">Blogger :</label>
        <input
          id="blogger"
          type="text"
          name="blogger"
          required
          defaultValue={socialMedia ? socialMedia.blogger : ''}
        />

        <label htmlFor="type">Type :</label>
        <input
          id="type"
          type="text"
          name="type"
          required
          defaultValue={socialMedia ? socialMedia.type : ''}
        />

        <label htmlFor="way">Way :</label>
        <input
          id="way"
          type="text"
          name="way"
          required
          defaultValue={socialMedia ? socialMedia.way : ''}
        />

        <label htmlFor="cost">Cost :</label>
        <input
          id="cost"
          type="number"
          name="cost"
          required
          defaultValue={socialMedia ? socialMedia.cost : ''}
        />
        <label>expected_revenue :</label>
        <input
          id="expected_revenue"
          type="text"
          name="expected_revenue"
          required
          defaultValue={socialMedia ? socialMedia.expected_revenue : ''}
        />
        <label>Actual Revenue :</label>
        <input
          id="actual_revenue  "
          type="text"
          name="actual_revenue"
          required
          defaultValue={socialMedia ? socialMedia.actual_revenue : ''}
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

export default SocialMediaForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();

  const socialMediaData = {
    blogger: data.get('blogger'),
    type: data.get('type'),
    way: data.get('way'),
    cost: data.get('cost'),
    expected_revenue: data.get('expected_revenue'),
    actual_revenue: data.get('actual_revenue'),
    campaign_id: 1,
  };

  let url;

  if (method === 'PUT') {
    url =
      'http://localhost:8000/marketing/socialMedia/update/' +
      params.socialMediaId;
  } else {
    url = 'http://localhost:8000/marketing/socialMedia/store';
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer' + token,
    },
    body: JSON.stringify(socialMediaData),
  });

  if (!response.ok) {
    throw json({ message: 'Could not save SocialMedia.' }, { status: 500 });
  }

  return redirect('/marketing/socialMedia');
}
