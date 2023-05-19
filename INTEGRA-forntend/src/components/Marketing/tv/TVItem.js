import { Link, useSubmit } from 'react-router-dom';

const TVItem = ({ tv }) => {
  const submit = useSubmit();

  const deleteHandler = () =>{
      const proceed= window.confirm('Are you sure?');

      if(proceed) {
          submit(null, {method: 'delete'});
      }
  };

  return (
    <article>
      <h1> TV Item</h1>
      <div>
        <label>Channel of TV</label>
          <p style={{marginLeft: "20px"}}> {tv.channel} </p>
        <label>Time to show on TV</label>
          <p style={{marginLeft: "20px"}}> {tv.time} </p>
        <label>Cost:</label>
          <p style={{marginLeft: "20px"}}> {tv.cost} </p>
        <label>Advertising Period:</label>
          <p style={{marginLeft: "20px"}}> {tv.advertising_period} </p>
        <label>For Campaign </label>
          <p style={{marginLeft: "20px"}}><Link to={`/marketing/campaigns/campaign-detail/${tv.campaign_id}`}> {tv.campaign_id} </Link></p>
      </div>
      <menu>
        <Link to={`/marketing/tvs/tv-detail/edit/${tv.id}`}>Edit</Link>
        <button onClick={deleteHandler}>Delete</button>
      </menu>
    </article>
  );
};

export default TVItem;