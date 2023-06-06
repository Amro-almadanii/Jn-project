import { useState, useEffect } from 'react';
import { json } from 'react-router-dom';
import { getAuthToken } from './auth';

export const useEvents = (id) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const token = getAuthToken();

          const response = await fetch('http://localhost:8000/marketing/campaigns/showCampaignEvents/' + id, {
            headers: {
              'Authorization': 'bearer ' + token,
            },
          });

          const data = await response.json();

          if (response.ok) {
            setEvents(data.data);
          } else {
            throw json({ message: 'Could not fetch Events.' }, { status: 500 });
          }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return events;
};

export const useTvs = (id) => {
  const [tvs, setTvs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch('http://localhost:8000/marketing/campaigns/showCampaignTvs/' + id, {
          headers: {
            'Authorization': 'bearer ' + token,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setTvs(data.data);
        } else {
          throw json({ message: 'Could not fetch Tvs.' }, { status: 500 });
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return tvs;
};

export const useSocialMedia = (id) => {
  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch('http://localhost:8000/marketing/campaigns/showCampaignSocialMedia/' + id, {
          headers: {
            'Authorization': 'bearer ' + token,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setSocialMedia(data.data);
        } else {
          throw json({ message: 'Could not fetch social media.' }, { status: 500 });
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return socialMedia;
};

export const useCampaign = (id) => {
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch('http://localhost:8000/marketing/campaigns/' + id, {
          headers: {
            'Authorization': 'bearer ' + token,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setCampaign(data.data);
        } else {
          throw json({ message: 'Could not fetch Campaign.' }, { status: 500 });
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return campaign;
};


export const useLeadsOfCampaign = (id) => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch('http://localhost:8000/marketing/campaigns/showCampaignLeads/' + id, {
          headers: {
            'Authorization': 'bearer ' + token,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setLeads(data.data);
        } else {
          throw json({ message: 'Could not fetch Leads.' }, { status: 500 });
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return leads;
};

export const useLeadsOfCustomer = (id) => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch('http://localhost:8000/marketing/customers/showCustomerLeads/' + id, {
          headers: {
            'Authorization': 'bearer ' + token,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setLeads(data.data);
        } else {
          throw json({ message: 'Could not fetch Leads.' }, { status: 500 });
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return leads;
};

export const useCustomersOfLead = (id) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch('http://localhost:8000/marketing/leads/showLeadCustomers/' + id, {
          headers: {
            'Authorization': 'bearer ' + token,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setCustomers(data.data);
        } else {
          throw json({ message: 'Could not fetch Customers.' }, { status: 500 });
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return customers;
};

export const useCampaignsOfLead = (id) => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch('http://localhost:8000/marketing/leads/showLeadCampaigns/' + id, {
          headers: {
            'Authorization': 'bearer ' + token,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setCampaigns(data.data);
        } else {
          throw json({ message: 'Could not fetch Campaigns.' }, { status: 500 });
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return campaigns;
};