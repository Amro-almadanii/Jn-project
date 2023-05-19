import TVForm from '../../../components/Marketing/tv/TVForm';
import { useRouteLoaderData } from 'react-router-dom';

const EditTVPage = () => {
  const tv = useRouteLoaderData('tv-detail');

  return (
    <>
      <h1>Edit Page</h1>
      <TVForm method="put"  tv={tv.data}/>
    </>
  );
};

export default EditTVPage;
