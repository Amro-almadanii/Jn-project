import AttributeForm from '../../../../components/Repository/product/productAttribute/attribute/AttributeForm';

const NewAttributePage = () => {
  return (
    <div>
      <h1>Repository > Product > Create Attribute</h1>
      <AttributeForm method="post"/>
    </div>
  );
}

export default NewAttributePage;