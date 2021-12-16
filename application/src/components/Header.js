import React from 'react'
import CategoryList from './CategoryList'
import PropTypes from 'prop-types';

function Header({categories, chooseCategory}){

  return (
    <div className="">
      <div className="header">
        <h1>Todo List</h1>
      </div>
      <CategoryList categories={categories} chooseCategory={chooseCategory}/> 
    </div> 
  )
}

Header.propTypes = {
//   todoList: PropTypes.array,
//   onRemoveTodo: PropTypes.func
};

export default Header;