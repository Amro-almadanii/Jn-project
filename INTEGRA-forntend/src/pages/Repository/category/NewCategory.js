import CategoryForm from '../../../components/Repository/category/CategoryForm';

const NewCategoryPage = () => {
  return (
    <div>
      <h1>Repository > Categories > Create New Category</h1>
      <CategoryForm method="post" />
    </div>
  );
};

export default NewCategoryPage;
