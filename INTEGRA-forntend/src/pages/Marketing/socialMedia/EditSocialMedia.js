import SocialMediaForm from '../../../components/Marketing/socialMedia/SocialMediaForm';
import { useRouteLoaderData } from 'react-router-dom';
import classes from './editSocialMedia.module.scss';
const EditSocialMediaPage = () => {
  const { data: socialMedia } = useRouteLoaderData('socialMedia-detail');

  return (
    <div className={classes.editsocialmedia}>
      <h1>Edit Page</h1>
      <SocialMediaForm method="put" socialMedia={socialMedia} />
    </div>
  );
};

export default EditSocialMediaPage;
