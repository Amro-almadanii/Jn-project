import { json, redirect, useRouteLoaderData } from 'react-router-dom';
import PermissionsItem from '../../../components/Admainistrasion/Permission/PermissionItem';
import { getAuthToken } from '../../../hooks/auth';

const PermissionsDetailPage = () => {
  const { data } = useRouteLoaderData('permissions-detail');

  return <PermissionsItem permission={data} />;
};

export default PermissionsDetailPage;

export async function loader({ request, params }) {
  const id = params.permissionId;
  const token = getAuthToken();

  const response = await fetch(
    'http://localhost:8000/userMangement/permissions/' + id,
    {
      headers: {
        Authorization: 'bearer' + token,
      },
    }
  );

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected permissions' },
      { status: 500 }
    );
  } else {
    return response.json();
  }
}

export async function action({ request, params }) {
  const id = params.permissionId;
  const token = getAuthToken();

  const response = await fetch(
    'http://localhost:8000/userMangement/permissions/' + id,
    {
      method: request.method,
      headers: {
        Authorization: 'bearer' + token,
      },
    }
  );

  if (!response.ok) {
    throw json({ message: 'Could not delete permissions.' }, { status: 500 });
  }

  return redirect('/userMangement/permissions');
}
