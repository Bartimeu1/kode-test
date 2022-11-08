import React from 'react';
import './FilterButton.scss';

export default function FilterButton({title, value, id, isCurrent, choiceFilter, changeFilterId}) {
  return (
    <button 
      className={isCurrent ? 'filter-button--current' : 'filter-button'}
      onClick={() => (
        choiceFilter(value),
        changeFilterId(id)
      )}
    >{title}</button>
  )
}
