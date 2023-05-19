import { Link, useSubmit } from 'react-router-dom';

const SocialMediaItem = ({ socialMedia }) => {
  const submit = useSubmit();

  const deleteHandler = () =>{
      const proceed= window.confirm('Are you sure?');

      if(proceed) {
          submit(null, {method: 'delete'});
      }
  };

  return (
    <article>
      <h1> SocialMedia Item</h1>
      <div>
        <label>Blogger Name:</label>
          <p style={{marginLeft: "20px"}}> {socialMedia.blogger} </p>
        <label>Type:</label>
          <p style={{marginLeft: "20px"}}> {socialMedia.type} </p>
        <label>way of SocialMedia:</label>
          <p style={{marginLeft: "20px"}}> {socialMedia.way} </p>
        <label>Cost of SocialMedia:</label>
          <p style={{marginLeft: "20px"}}> {socialMedia.cost} </p>
        <label>campaign of SocialMedia:</label>
        <p style={{marginLeft: "20px"}}><Link to={`/marketing/campaigns/campaign-detail/${socialMedia.campaign_id}`}> {socialMedia.campaign_id}</Link> </p>
        </div>
      <menu>
        <Link to={`/marketing/socialMedia/socialMedia-detail/edit/${socialMedia.id}`}>Edit</Link>
        <button onClick={deleteHandler}>Delete</button>
      </menu>
    </article>
  );
};

export default SocialMediaItem;