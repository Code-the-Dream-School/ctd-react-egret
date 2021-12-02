import React from 'react'
import { ReactComponent as Health } from './images/health.svg';
import { ReactComponent as Work } from './images/work.svg';
import { ReactComponent as Grocery } from './images/grocery.svg';
import { ReactComponent as Home } from './images/home.svg';
import { ReactComponent as Lifestyle } from './images/lifestyle.svg';

function CategoryList({categories}){

  return (
    <div class="categories">
      <Health height="100px" width="100px" className="category"/>
      <Work height="100px" width="100px" className="category"/>
      <Grocery height="100px" width="100px" className="category"/>
      <Home height="100px" width="100px" className="category"/>
      <Lifestyle height="100px" width="100px" className="category"/>
    </div> 
  )
}

 export default CategoryList;