import { Fragment } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import { getAuthToken } from '../../../util/auth';
import PDFsList from '../../../components/Marketing/PDF/PDFsList';

const PDFsPage = () => {
  const { data:pdfs } = useLoaderData();

  return (
    <Fragment>
      <h1>PDFs Page</h1>
      <PDFsList pdfs={pdfs} />
    </Fragment>
  );
};

export default PDFsPage;

export async function loader() {
  const token = getAuthToken();

  const response = await fetch('http://localhost:8000/marketing/pdfs', {
    headers:{
      'Authorization': 'bearer' + token,
    }
  });

  if (!response.ok) {
    throw json({ message: 'Could not fetch pdfs.' }, { status: 500 });
  } else {
    return response;
  }
}
