import React from 'react';
import Profile from '../components/Profile/Profile';

export default function ProfilePage({contactName, contactSurname, contactAvarar, contactTag, contactPosition, contactPhone, contactBirthday}) {
  return (
    <>  
      <Profile
        contactName={contactName}
        contactSurname={contactSurname}
        contactAvarar={contactAvarar}
        contactTag={contactTag}
        contactPosition={contactPosition} 
        contactPhone={contactPhone}
        contactBirthday={contactBirthday}
      >
      </Profile>
    </>
  )
}
