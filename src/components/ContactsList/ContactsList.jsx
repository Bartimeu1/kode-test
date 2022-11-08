import React from 'react';

import Contact from '../Contact/Contact';

export default function ContactsList({currentContacts}) {
  return (
    <section className="contacts">
      <div className="container">
        {currentContacts.map((dataItem, index) => (
          <div key={index}>
            <Contact
              avatar={dataItem.avatarUrl}
              firstName={dataItem.firstName}
              lastName={dataItem.lastName}
              position={dataItem.position}
              tag={dataItem.userTag}
            ></Contact>
          </div>
        ))}
      </div>
    </section>
  )
}
