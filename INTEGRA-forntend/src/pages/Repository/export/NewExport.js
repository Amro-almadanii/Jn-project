import ExportForm from '../../../components/Repository/export/ExportForm';

const NewExportPage = () => {
  return (
    <div>
      <h1> Repository > Exports > Create New Export </h1>
      <ExportForm method="post" />
    </div>
  );
};

export default NewExportPage;
