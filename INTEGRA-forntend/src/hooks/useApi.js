import { useState, useEffect } from 'react';
import { json } from 'react-router-dom';
import { getAuthToken } from './auth';
import groups from '../pages/Repository/product/attributeGroup/Groups';
import suppliers from '../pages/Repository/supplier/Suppliers';

export const useEvents = (id) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch(
          'http://localhost:8000/marketing/campaigns/showCampaignEvents/' + id,
          {
            headers: {
              Authorization: 'bearer ' + token,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setEvents(data.data);
        } else {
          throw json({ message: 'Could not fetch Events.' }, { status: 500 });
        }
      } catch (error) {
        console.error(error);
      }
    };

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

        const response = await fetch(
          'http://localhost:8000/marketing/campaigns/showCampaignTvs/' + id,
          {
            headers: {
              Authorization: 'bearer ' + token,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setTvs(data.data);
        } else {
          throw json({ message: 'Could not fetch Tvs.' }, { status: 500 });
        }
      } catch (error) {
        console.error(error);
      }
    };

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

        const response = await fetch(
          'http://localhost:8000/marketing/campaigns/showCampaignSocialMedia/' +
            id,
          {
            headers: {
              Authorization: 'bearer ' + token,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setSocialMedia(data.data);
        } else {
          throw json(
            { message: 'Could not fetch social media.' },
            { status: 500 }
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

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

        const response = await fetch(
          'http://localhost:8000/marketing/campaigns/' + id,
          {
            headers: {
              Authorization: 'bearer ' + token,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setCampaign(data.data);
        } else {
          throw json({ message: 'Could not fetch Campaign.' }, { status: 500 });
        }
      } catch (error) {
        console.error(error);
      }
    };

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

        const response = await fetch(
          'http://localhost:8000/marketing/campaigns/showCampaignLeads/' + id,
          {
            headers: {
              Authorization: 'bearer ' + token,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setLeads(data.data);
        } else {
          throw json({ message: 'Could not fetch Leads.' }, { status: 500 });
        }
      } catch (error) {
        console.error(error);
      }
    };

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

        const response = await fetch(
          'http://localhost:8000/marketing/customers/showCustomerLeads/' + id,
          {
            headers: {
              Authorization: 'bearer ' + token,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setLeads(data.data);
        } else {
          throw json({ message: 'Could not fetch Leads.' }, { status: 500 });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return leads;
};

export const useEmployeeBenefits = (id) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch(
          'http://localhost:8000/hr/benefits/employeesBenefit/' + id,
          {
            headers: {
              Authorization: 'bearer ' + token,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setEmployees(data.data);
        } else {
          throw json(
            { message: 'Could not fetch employee benefits.' },
            { status: 500 }
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return employees;
};

export const useCustomersOfLead = (id) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch(
          'http://localhost:8000/marketing/leads/showLeadCustomers/' + id,
          {
            headers: {
              Authorization: 'bearer ' + token,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setCustomers(data.data);
        } else {
          throw json(
            { message: 'Could not fetch Customers.' },
            { status: 500 }
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

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

        const response = await fetch(
          'http://localhost:8000/marketing/leads/showLeadCampaigns/' + id,
          {
            headers: {
              Authorization: 'bearer ' + token,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setCampaigns(data.data);
        } else {
          throw json(
            { message: 'Could not fetch Campaigns.' },
            { status: 500 }
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return campaigns;
};

export const useLeads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch('http://localhost:8000/marketing/leads', {
          headers: {
            Authorization: 'bearer ' + token,
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
    };

    fetchData();
  }, []);

  return leads;
};

export const useSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch(
          'http://localhost:8000/repository/suppliers',
          {
            headers: {
              Authorization: 'bearer ' + token,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setSuppliers(data.data);
        } else {
          throw json(
            { message: 'Could not fetch Suppliers.' },
            { status: 500 }
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return suppliers;
};

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch(
          'http://localhost:8000/repository/categories',
          {
            headers: {
              Authorization: 'bearer ' + token,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setCategories(data.data);
        } else {
          throw json(
            { message: 'Could not fetch Categories.' },
            { status: 500 }
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return categories;
};

export const useGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch(
          'http://localhost:8000/repository/products/attributeGroups',
          {
            headers: {
              Authorization: 'bearer ' + token,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setGroups(data.data);
        } else {
          throw json({ message: 'Could not fetch Groups.' }, { status: 500 });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return groups;
};

export const useAttributesGroup = (id) => {
  const [attributesGroup, setAttributesGroup] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch(
          'http://localhost:8000/repository/products/attributeGroups/attributesOfGroup/' +
            id,
          {
            headers: {
              Authorization: 'bearer ' + token,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setAttributesGroup(data.data);
        } else {
          throw json(
            { message: 'Could not fetch Attributes of Group.' },
            { status: 500 }
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return attributesGroup;
};

export const useProductsByCategory = (id) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch(
          'http://localhost:8000/repository/categories/products/' + id,
          {
            headers: {
              Authorization: 'bearer ' + token,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setProducts(data.data);
        } else {
          throw json(
            { message: 'Could not fetch Products by Category.' },
            { status: 500 }
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return products;
};

export const useProductsBySupplier = (id) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch(
          'http://localhost:8000/repository/suppliers/products/' + id,
          {
            headers: {
              Authorization: 'bearer ' + token,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setProducts(data.data);
        } else {
          throw json(
            { message: 'Could not fetch Products by Supplier.' },
            { status: 500 }
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return products;
};

export const useProductStock = (id) => {
  const [productStock, setProductStock] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch('http://localhost:8000/repository/products/' + id, {
          headers: {
            'Authorization': 'bearer ' + token,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setProductStock(data.data.quantity_in_stock);
        } else {
          throw json({ message: 'Could not fetch Products by Supplier.' }, { status: 500 });
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return productStock;
};