import GroupsList from '../../../../components/Repository/product/productAttribute/group/GroupsList';
import { getAuthToken } from '../../../../hooks/auth';
import { json, redirect, useLoaderData } from 'react-router-dom';

const GroupsPage = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <h1>Repository > Groups of Attributes</h1>
      <GroupsList groups={data}/>
    </div>
  )
};

export default GroupsPage;

export async function loader () {
  const token = getAuthToken();

  const response = await fetch('http://localhost:8000/repository/products/attributeGroups', {
    headers: {
      Authorization: 'bearer' + token,
    }
  });

  if(!response.ok) {
    throw (json({ message: 'Could not fetch groups of attributes group.'}, {status: 500}));
  } else {
    return response;
  }
}


export async function action({ request, params }) {
  const token = getAuthToken();
  const data = request.formData();
  const id = data.get('groupId');
console.log(21)
  const response = await fetch(
    'http://localhost:8000/repository/attributeGroups/' + id,
    {
      method: 'delete',
      headers: {
        Authorization: 'bearer' + token,
      },
    }
  );

  if (!response.ok) {
    throw json({ message: 'Could not delete Group.' }, { status: 500 });
  }

  return redirect('/repository/products/attributes/groups');
}
