import ImportForm from '../../../components/Repository/import/ImportForm';
import { useRouteLoaderData } from 'react-router-dom';

const EditImportPage = () => {
  const { data } = useRouteLoaderData('import-detail');

  return (
    <>
      <h1> Repository > Imports > Edit {data.name} </h1>
      <ImportForm method="put" importItem={data} />
    </>
  );
};

export default EditImportPage;
