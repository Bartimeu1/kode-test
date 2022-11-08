import React from 'react';

import './Header.scss';

import SearchBar from '../SearchBar/SearchBar';
import FilterMenu from '../FilterMenu/FilterMenu';

export default function Header({choiceFilter, onInputSearch}) {
  return (
    <header className='header'>
      <div className="container header__container">
        <SearchBar
          onInputSearch={onInputSearch}
        ></SearchBar>
        <FilterMenu
          choiceFilter={choiceFilter}
        ></FilterMenu>
      </div>
    </header>
  )
}
