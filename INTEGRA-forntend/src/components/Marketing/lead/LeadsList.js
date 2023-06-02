import { Link, useNavigate } from 'react-router-dom';
import classes from './LeadsList.module.scss';
const LeadsList = ({ leads }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.leadsList}>
      <h1>All Leads</h1>
      <div className={classes.addNewLead}>
        <Link className={classes.leadsList_link} to="/marketing/leads/new">
          Add New Lead
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Lead Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} onClick={ () => navigate( '/marketing/leads/lead-detail/1' ) }>
              <td>
                <Link to={`/marketing/leads/lead-detail/${lead.id}`}>
                  {lead.id}
                </Link>
              </td>
              <td>{lead.type}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Lead Id</th>
            <th>Name</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default LeadsList;
