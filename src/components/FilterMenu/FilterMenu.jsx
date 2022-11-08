import React, { useState } from 'react';
import './FilterMenu.scss'

import FilterButton from '../FilterButton/FilterButton';

export default function FilterMenu({choiceFilter}) {
  const filterStates = [
    {id: 1, title: 'Все', value: 'all'},
    {id: 2, title: 'Designers', value: 'design'},
    {id: 3, title: 'Analysts', value: 'analytics'},
    {id: 4, title: 'Managers', value: 'management'},
    {id: 5, title: 'iOS', value: 'ios'},
    {id: 6, title: 'Android', value: 'android'},
    {id: 7, title: 'Support', value: 'support'},
    {id: 8, title: 'Frontend', value: 'frontend'},
    {id: 9, title: 'Backend', value: 'backend'},
    {id: 10, title: 'QA', value: 'qa'},
    {id: 11, title: 'HR', value: 'hr'},
    {id: 12, title: 'PR', value: 'pr'},
    {id: 13, title: 'Back office', value: 'back_office'}
  ];
  
  const [currentFilterId, setCurrentFilterId] = useState(1);
  function changeFilterId(id) {
    setCurrentFilterId(id);
  }

  return (
    <div className='filter'>
      <ul className="filter__list">
        {filterStates.map((item) => (
          <li key={item.id}>
            <FilterButton 
              title={item.title}
              value={item.value}
              id={item.id}
              isCurrent={item.id === currentFilterId ? true : false}
              changeFilterId={changeFilterId}
              choiceFilter={choiceFilter}
            ></FilterButton>
          </li>
        ))}
      </ul>
    </div>
  )
}
