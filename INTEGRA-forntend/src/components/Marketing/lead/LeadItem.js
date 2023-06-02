import { Link, useSubmit } from 'react-router-dom';

const LeadItem = ({ lead }) => {
  const submit = useSubmit();

  const deleteHandler = () => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };

  return (
    <article>
      <h1> Lead Item</h1>
      <div>
        <label>Name of Lead</label>
      </div>
      <menu>
        <Link to={`/marketing/leads/lead-detail/edit/${lead.id}`}>Edit</Link>
        <button onClick={deleteHandler}>Delete</button>
      </menu>
    </article>
  );
};

export default LeadItem;
