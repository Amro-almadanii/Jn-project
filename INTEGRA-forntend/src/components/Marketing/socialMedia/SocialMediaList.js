import { Link } from 'react-router-dom';
import classes from './SocialMediaList.module.scss';
const SocialMediasList = ({ socialMedia }) => {
  return (
    <div className={classes.socialMediaList}>
      <h1>All SocialMedias</h1>
      <div className={classes.addNewSocialMedia}>
        <Link
          className={classes.socialMediaList_link}
          to="/marketing/campaigns/new"
        >
          Add New SocialMedia
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>SocialMedia Id</th>
            <th>Blogger</th>
            <th>Type</th>
            <th>Way</th>
            <th>Cost</th>
            <th>Campaign id</th>
          </tr>
        </thead>
        <tbody>
          {socialMedia.map((socialMedia) => (
            <tr key={socialMedia.id}>
              <td>
                <Link
                 className={classes.link}
                  to={`/marketing/socialMedia/socialMedia-detail/${socialMedia.id}`}
                >
                  {socialMedia.id}
                </Link>
              </td>
              <td>{socialMedia.blogger}</td>
              <td>{socialMedia.type}</td>
              <td>{socialMedia.way}</td>
              <td>{socialMedia.cost}</td>
              <td>
                <Link className={classes.link}
                  to={`/marketing/campaigns/campaign-detail/${socialMedia.campaign_id}`}
                >
                  {socialMedia.campaign_id}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>SocialMedia Id</th>
            <th>Blogger</th>
            <th>Type</th>
            <th>Way</th>
            <th>Cost</th>
            <th>Campaign id</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default SocialMediasList;
