import { redirect } from 'react-router-dom';

export function marketingLoader() {

  const department = localStorage.getItem('department');

  if (department == "marketing" || department == "userManagement") {
    return null;
  }

  return redirect(`/${department}`);
}

export function hrLoader() {

  const department = localStorage.getItem('department');

  if (department == "hr" || department == "userManagement") {
    return null;
  }

  return redirect(`/${department}`);
}

export function repositoryLoader() {

  const department = localStorage.getItem('department');

  if (department == "repository" || department == "userManagement") {
    return null;
  }

  return redirect(`/${department}`);
}

export function userManagementLoader() {

  const department = localStorage.getItem('department');

  if (department == "userManagement") {
    return null;
  }

  return redirect(`/${department}`);
}