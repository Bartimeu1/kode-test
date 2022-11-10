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
        <Routes>
          <Route path="/" exact element={
            <MainPage
              choiceFilter={choiceFilter}
              onInputSearch={onInputSearch}
              currentContacts={currentContacts}
            ></MainPage>
          }>
          </Route>
          {contactsData.map(contact => { 
            return <Route path={`/profile/${contact.userTag}`} key={contact}
              element={
                <ProfilePage 
                  contactName={contact.firstName}
                  contactSurname={contact.lastName}
                  contactAvarar={contact.avatarUrl}
                  contactTag={contact.userTag}
                  contactPosition={contact.position}
                  contactPhone={contact.phone}
                  contactBirthday={contact.birthday}
                ></ProfilePage>
              }>
           </Route>
          })}
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
