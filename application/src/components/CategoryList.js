import React from 'react'
import { ReactComponent as All } from '../images/all.svg';
import CategoryListItem from './CategoryListItem';
import PropTypes from 'prop-types';

function CategoryList({categories, chooseCategory}){
  // console.log(categories)
  return (
    <div className="categories">
      {categories.map((category, index)=>(
        <CategoryListItem 
        key={category.id} 
        category={category.fields.Name} 
        icon={category.fields.Image} 
        chooseCategory={chooseCategory}
        id={category.id}
        index={index}/>
      ))}
    </div>
  )
}

CategoryList.propTypes = {
  categories: PropTypes.array,
  chooseCategory: PropTypes.func
};

export default CategoryList;