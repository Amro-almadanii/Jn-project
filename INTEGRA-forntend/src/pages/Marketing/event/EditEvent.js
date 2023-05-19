import EventForm from '../../../components/Marketing/event/EventForm';
import { useRouteLoaderData } from 'react-router-dom';

const EditEventPage = () => {
  const { data:event } = useRouteLoaderData('event-detail');

  return (
    <>
      <h1>Edit Page</h1>
      <EventForm method="put"  event={event}/>
    </>
  );
};

export default EditEventPage;
