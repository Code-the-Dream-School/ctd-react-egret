import React from 'react'
// import { ReactComponent as Health } from './images/health.svg';
// import { ReactComponent as Work } from './images/work.svg';
// import { ReactComponent as Grocery } from './images/grocery.svg';
// import { ReactComponent as Home } from './images/home.svg';
// import { ReactComponent as Lifestyle } from './images/lifestyle.svg';
import CategoryListItem from './CategoryListItem';
import PropTypes from 'prop-types';

function CategoryList({categories, chooseCategory}){

  return (
    <div className="categories">
      {categories.map((category, index)=>(
        <CategoryListItem 
        key={category.id} 
        category={category.fields.Name} 
        icon={category.fields.Image} 
        chooseCategory={chooseCategory}
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