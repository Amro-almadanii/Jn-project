import { useEffect, useState } from 'react';
import { useLeads } from '../../../../hooks/useApi';
import classes from '../../lead/LeadsList.module.scss';
const UpdateLeadsOfCampaign = ({leadsOfCampaign}) => {
  const [leads, setLeads] = useState([]);
  const [isChecked, setIsChecked] = useState([{checked: false}]);
  const responseLead = useLeads();

  useEffect(() => {
    setLeads(responseLead);
    leads.map((lead) => {
      leadsOfCampaign.map((leadCampaign) => {
      if(lead.id === leadCampaign.id) {
        setIsChecked(isChecked[lead.id] ={checked: true} );
      }
    })
    })
    console.log(isChecked[1].checked)
  }, [responseLead]);

  const checkHandler = (id) => {
    setIsChecked(isChecked[id].checked = !isChecked[id].checked);
    if(isChecked) {
      console.log('attach');
    } else {
      console.log('detach');
    }
  }

  return (
    <div className={classes.leadsList}>
      <table>
        <thead>
        <tr>
          <th>Lead Id</th>
          <th>Name</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {leads.map((lead) => (
          <tr key={lead.id} onClick={checkHandler.bind(lead.id)}>
            <td>{lead.id}</td>
            <td>{lead.type}</td>
            <td><input type='checkbox' value={lead.id}
                    // checked={leadsOfCampaign.map((leadCampaign)=> { return (leadCampaign.id == lead.id); })}
                    checked={true && isChecked[2].checked}
              />
            </td>
          </tr>))}
        </tbody>
        <tfoot>
        <tr>
          <th>Lead Id</th>
          <th>Name</th>
          <th></th>
        </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default UpdateLeadsOfCampaign;