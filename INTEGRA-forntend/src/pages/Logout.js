import { json, redirect } from 'react-router-dom';
import { getAuthToken } from '../util/auth';

export async function action () {
  const token = getAuthToken();

  // const response = await fetch('http://localhost:8000/logout', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': 'bearer' + token,
  //   },
  // });
  //
  // if(!response.ok) {
  //   throw json({message: "Could not logout user."}, {status: 500});
  // }

  localStorage.removeItem('token');
  localStorage.removeItem('expiration');
  return redirect('/login');
}