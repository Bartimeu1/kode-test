import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import Context from './Context';

function App() {
  // Data
  const [contactsData, setContactsData] = useState([]);
  const dataUrl = 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all';

  useEffect(() => {
    axios.get(dataUrl)
    .then((response) => {
      setContactsData(response.data.items); 
      setCurrentContacts(response.data.items);
    })
    .catch((err) => console.error(err));
  },[]);

  // Context
  const contextItems = {
    contactsData: contactsData,
  };
  // Current contacts for view
  const [currentContacts, setCurrentContacts] = useState([]);
  // Filter contacts
  const [filteredContacts, setFilteredContacts] = useState([]);
  function choiceFilter(value) {
    if (value !== 'all') {
      let filteredContacts = [...contactsData].filter(contact => contact.department.includes(value))
      setFilteredContacts(filteredContacts);
    } else setFilteredContacts(contactsData);
  }
  // Search contacts
  const [searchedValue, setSearchedValue] = useState('');
  function onInputSearch(value) {
    if (value !== '') {
      setSearchedValue(value);
      let searchedContacts = [...filteredContacts].filter(contact => (
          (contact.firstName + " " + contact.lastName).toLowerCase().includes(value.toLowerCase()) ||
          contact.userTag.toLowerCase().includes(value.toLowerCase())
        )
      );
        setCurrentContacts(searchedContacts);
    } else {
      setCurrentContacts(filteredContacts);
      setSearchedValue('');
    };
  }
  useEffect(() => {
    onInputSearch(searchedValue);
  }, [filteredContacts]);
  return (
    <div className="App">
      <Context.Provider value={contextItems}>

        123123
      </Context.Provider>
    </div>
  );
}

export default App;
