import CategoryForm from '../../../components/Repository/category/CategoryForm';
import { useRouteLoaderData } from 'react-router-dom';

const EditCategoryPage = () => {
  const { data: category } = useRouteLoaderData('category-detail');

  return (
    <>
      <h1>Edit Page</h1>
      <CategoryForm method="put" category={category} />
    </>
  );
};

export default EditCategoryPage;
