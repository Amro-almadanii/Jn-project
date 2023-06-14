import ImportForm from '../../../components/Repository/import/ImportForm';

const NewImportPage = () => {
  return (
    <div>
      <h1> Repository > Imports > Create New Import </h1>
      <ImportForm method="post" />
    </div>
  );
};

export default NewImportPage;
