import { Link, useSubmit } from 'react-router-dom';
import classes from './LeadItem.module.scss';
import { Card } from '@mui/material';
import { useEffect, useState } from 'react';
import { useCampaignsOfLead, useCustomersOfLead, useLeadsOfCustomer } from '../../../hooks/useApi';
import  classe  from '../customer/CustomersList.module.scss';
import CustomersTable from '../customer/UI/CustomersTable';

const LeadItem = ({ lead }) => {
  const [customers, setCustomers] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const submit = useSubmit();

  const deleteHandler = () => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  };

  const customerResponse = useCustomersOfLead(lead.id);
  const campaignResponse = useCampaignsOfLead(lead.id);

  useEffect(() => {
    setCustomers(customerResponse);
  }, [customerResponse]);

  useEffect(() => {
    setCampaigns(campaignResponse);
  }, [campaignResponse]);

  return (
    <div className={classes.leadItem}>
      <h1> Marketing > Lead Item > {lead.type} </h1>
      <div className={classes.box}>
        <Card className={classes.card}>
          <div className={classes.cardItems}>
            <label>Name of Lead :</label>
            <p> {lead.type} </p>
          </div>
          <div className={classes.cardItems}>
            <label>Campaigns of Leads:</label>
            <p>
              {campaigns.map((campaign) => (
                <Link key={campaign.id} className={classes.campaignLink}
                      to={`/marketing/campaigns/campaign-detail/${campaign.id}`}> {campaign.name} </Link>))}
            </p>
          </div>
          <div className={classes.btn}>
            <Link
              className={classes.link}
              to={`/marketing/leads/lead-detail/edit/${lead.id}`}
            >
              Edit
            </Link>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        </Card>
      </div>
      <div className={classe.customersList}>
        <CustomersTable customers={customers} />
      </div>
    </div>
  );
};

export default LeadItem;
