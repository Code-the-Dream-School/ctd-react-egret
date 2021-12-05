import React from 'react'
import { ReactComponent as Health } from './images/health.svg';
import { ReactComponent as Work } from './images/work.svg';
import { ReactComponent as Grocery } from './images/grocery.svg';
import { ReactComponent as Home } from './images/home.svg';
import { ReactComponent as Lifestyle } from './images/lifestyle.svg';
import CategoryListItem from './CategoryListItem';

function CategoryList({categories}){

  return (
    <div className="categories">
      <CategoryListItem category='Health' Icon={Health}/>
      <CategoryListItem category='Work' Icon={Work}/>
      <CategoryListItem category='Grocery' Icon={Grocery}/>
      <CategoryListItem category='Home' Icon={Home}/>
      <CategoryListItem category='Lifestyle' Icon={Lifestyle}/>
    </div> 
  )
}

 export default CategoryList;