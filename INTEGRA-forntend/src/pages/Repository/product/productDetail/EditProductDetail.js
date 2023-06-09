import AttributeForm from '../../../../components/Repository/product/productAttribute/attribute/AttributeForm';
import { useRouteLoaderData } from 'react-router-dom';

const EditProductDetailPage = () => {
  // const { data } = useRouteLoaderData('attribute-detail');
  return (
    <div>
      <h1>Edit Attribute</h1>
      <AttributeForm method='put' attribute={data}/>
    </div>
  );
};

export default EditProductDetailPage;
