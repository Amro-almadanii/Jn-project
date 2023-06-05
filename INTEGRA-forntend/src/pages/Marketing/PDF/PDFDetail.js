import { json, redirect, useRouteLoaderData } from 'react-router-dom';
import PDFItem from '../../../components/Marketing/event/EventItem';
import { getAuthToken } from '../../../hooks/auth';

const PDFDetailPage = () => {
  const { data:pdf } = useRouteLoaderData('pdf-detail');

  return <PDFItem pdf={pdf} />;
};

export default PDFDetailPage;

export async function loader({ request, params }) {
  const id = params.pdfId;
  const token = getAuthToken();

  const response = await fetch('http://localhost:8000/marketing/pdfs/'+ id, {
    headers:{
      'Content-Type': 'application/pdf',
      'Authorization': 'bearer' + token,
    }
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected pdfs' },
      { status: 500 }
    );
  } else {
    return redirect('/marketing/pdfs');
  }
}

export async function action ({request, params}) {
  const id = params.eventId;
  const token = getAuthToken();

  const response = await fetch('http://localhost:8000/marketing/pdfs/' + id, {
    method: request.method,
    headers:{
      'Authorization' : 'bearer' + token,
    }
  });

  if(!response.ok) {
    throw json({message: "Could not delete PDF."}, {status: 500});
  }

  return redirect('/marketing/pdfs');
}