import React from 'react';
import { Link } from 'react-router-dom';
import "./Profile.scss";

import star from '../../assets/images/star.svg';
import phone from '../../assets/images/phone.svg';
import back from '../../assets/images/back.svg';

export default function Profile({contactName, contactSurname, contactAvarar, contactTag, contactPosition, contactPhone, contactBirthday}) {
  let newNumber = "";
  let newDate = "";
  function formatNumber(number) {
    for (let i = 0; i < number.length; i++) {
      if (i === 2) {
        newNumber += ' (';
      } else if (i === 5) {
        newNumber += ') ';
      } else if (i === 8 || i === 10) {
        newNumber += ' ';
      }
      newNumber += number[i];
    }
  }
  function formatDate(date) {
    let monthNum;
    date[5] === "0" ?  monthNum = date[6] : monthNum = date[5] + date[6];
    const monthArr = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    newDate = date[8] + date[9] + " " + monthArr[monthNum - 1] + " " + date[0] + date[1] + date[2] + date[3];
  }
  function calculateAge(date) {
    let yearOfBirth = "";
    for (let i = 0; i < 4; i++) {
      yearOfBirth += date[i];
    }
    let personAge = 2022 - +yearOfBirth;
    personAge = personAge.toString();
    if (+personAge < 20 && +personAge > 4) {
      personAge = personAge + " лет";
    } else if (+personAge[1] === 0 || +personAge[1] >= 5) {
      personAge = personAge + " лет";
    } else if (+personAge[1] >= 2 && +personAge[1] <= 4) {
      personAge = personAge + " года"; 
    } else if (+personAge[0] >= 2 && +personAge[0] <= 4) {
      personAge = personAge + " года"; 
    }
    return personAge;
  }
  let age = calculateAge(contactBirthday);
  formatDate(contactBirthday);
  formatNumber(contactPhone);
  return (
    <div className="profile">
      <header className="profile__header">
        <div className="container profile__header__container">
          <Link to={'/'} className="profile__back">
            <img src={back} alt="back" className='profile__back-img'/>
          </Link>
          <img src={contactAvarar} alt="" className="profile-avatar" />
          <div className="profile__text">
            <h1 className="profile-name">{contactName} {contactSurname}</h1>
            <p className='profile-tag'>{contactTag}</p>
          </div>
          <h2 className="profile-position">{contactPosition}</h2>
        </div>
      </header>
      <section className='profile__information'>
        <div className="container information__container">
          <div className="information__item information__item--top">
            <div className="information__item__birth">
              <img src={star} alt="star" className="information__item-img" />
              <p className="information__item-text">{newDate}</p>
            </div>
            <p className="information__item-age">{age}</p>
          </div>
          <div className="information__item">
            <img src={phone} alt="phone" className="information__item-img" />
            <a href={`tel:${contactPhone}`} className="information__item-text">{newNumber}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
