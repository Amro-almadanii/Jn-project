import { useState, useEffect } from 'react';
import { json } from 'react-router-dom';
import { getAuthToken } from './auth';

export const useEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const token = getAuthToken();

          const response = await fetch('http://localhost:8000/marketing/events', {
            headers: {
              'Authorization': 'bearer ' + token,
            },
          });

          const data = await response.json();

          if (response.ok) {
            setEvents(data.data);
          } else {
            throw json({ message: 'Could not fetch social media.' }, { status: 500 });
          }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return events;
};

export const useTvs = () => {
  const [tvs, setTvs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch('http://localhost:8000/marketing/tvs', {
          headers: {
            'Authorization': 'bearer ' + token,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setTvs(data.data);
        } else {
          throw json({ message: 'Could not fetch social media.' }, { status: 500 });
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return tvs;
};

export const useSocialMedia = () => {
  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();

        const response = await fetch('http://localhost:8000/marketing/socialMedia', {
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