import React from 'react';

import Header from '../components/Header/Header';
import ContactsList from '../components/ContactsList/ContactsList';

export default function MainPage({currentContacts, choiceFilter, onInputSearch}) {
  return (
    <>
      <Header
        choiceFilter={choiceFilter}
        onInputSearch={onInputSearch}
      ></Header>
      <ContactsList 
        currentContacts={currentContacts}
      ></ContactsList>
    </>
  )
}
