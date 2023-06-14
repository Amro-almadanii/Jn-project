import ExportForm from '../../../components/Repository/export/ExportForm';
import { useRouteLoaderData } from 'react-router-dom';

const EditExportPage = () => {
  const { data } = useRouteLoaderData('export-detail');

  return (
    <>
      <h1> Repository > Exports > Edit {data.name} </h1>
      <ExportForm method="put" exportItem={data} />
    </>
  );
};

export default EditExportPage;
