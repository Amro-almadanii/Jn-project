import GroupsList from '../../../../components/Repository/product/productAttribute/group/GroupsList';
import { getAuthToken } from '../../../../hooks/auth';
import { json, useLoaderData } from 'react-router-dom';

const GroupsPage = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <h1>Groups Of Attribute</h1>
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