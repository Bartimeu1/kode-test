import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';

export default function Contact({avatar, firstName, position, lastName, tag}) {
  return (
    <Link className='contact' to={`/profile/${tag}`}>
      <img src={avatar} alt="" className="contact-img" />
      <div className="contact__info">
        <div className="contact__info--topper">
          <h3 className="contact-name">{firstName} {lastName}</h3>
          <p className='contact-tag'>{tag}</p>
        </div>
        <h4 className="contact-position">{position}</h4>
      </div>
    </Link>
  )
}
