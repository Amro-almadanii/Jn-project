import { json, redirect, useRouteLoaderData } from 'react-router-dom';
//import CampaignItem from '../../../components/Marketing/campaign/CampaignItem';
import { getAuthToken } from '../../../hooks/auth';

const BenefitDetailPage = () => {
  const { data } = useRouteLoaderData('benefit-detail');

  //   return <CampaignItem campaign={data} />;
};

export default BenefitDetailPage;

export async function loader({ request, params }) {
  const id = params.benefitId;
  const token = getAuthToken();

  const response = await fetch('http://localhost:8000/hr/benefits/' + id, {
    headers: {
      Authorization: 'bearer' + token,
    },
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected Benefits' },
      { status: 500 }
    );
  } else {
    return response.json();
  }
}

export async function action({ request, params }) {
  const id = params.benefitId;
  const token = getAuthToken();

  const response = await fetch('http://localhost:8000/hr/benefits/' + id, {
    method: request.method,
    headers: {
      Authorization: 'bearer' + token,
    },
  });

  if (!response.ok) {
    throw json({ message: 'Could not delete benefits.' }, { status: 500 });
  }

  return redirect('/hr/benefits');
}
