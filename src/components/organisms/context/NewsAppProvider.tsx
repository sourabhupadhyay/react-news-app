import axios from 'axios';
import { useState } from 'react';
import { NewsAppContext } from './NewsAppContext';

const API_KEY = '7a94e61ddc644e06b01fe88821eef7e0';
const BASE_URL = 'https://newsapi.org/v2/';

export const NewsAppProvider = ({ children }: any) => {
  const [headlineByCategory, setHeadlineByCategory] = useState([]);
  const [businessState, setBusinessState] = useState([]);
  const [entertainmentState, setEntertainmentState] = useState([]);
  const [healthState, setHealthState] = useState([]);
  const [scienceState, setScienceState] = useState([]);
  const [sportsState, setSportsState] = useState([]);
  const [technologyState, setTechnologyState] = useState([]);
  const [searchState, setSearchState] = useState([]);
  const [queryState, setQueryState] = useState<string>('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const getHeadlineByCategory = async (COUNTRY_CODE: string, CATEGORY: string) => {
    try {
      const response = await axios.get(
        `${BASE_URL}top-headlines?country=${COUNTRY_CODE}&category=${CATEGORY}&apiKey=${API_KEY}`
      );
      setHeadlineByCategory(response.data.articles || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NewsAppContext.Provider
      value={{
        headlineByCategory,
        getHeadlineByCategory,
        businessState,
        setBusinessState,
        entertainmentState,
        setEntertainmentState,
        healthState,
        setHealthState,
        scienceState,
        setScienceState,
        sportsState,
        setSportsState,
        technologyState,
        setTechnologyState,
        searchState,
        setSearchState,
        setQueryState,
        queryState,
        searchResult,
        setSearchResult,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </NewsAppContext.Provider>
  );
};
