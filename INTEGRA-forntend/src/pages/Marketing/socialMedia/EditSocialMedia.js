import SocialMediaForm from '../../../components/Marketing/socialMedia/SocialMediaForm';
import { useRouteLoaderData } from 'react-router-dom';

const EditSocialMediaPage = () => {
  const { data:socialMedia }= useRouteLoaderData('socialMedia-detail');

  return (
    <>
      <h1>Edit Page</h1>
      <SocialMediaForm method="put"  socialMedia={socialMedia}/>
    </>
  );
};

export default EditSocialMediaPage;
