import React from 'react'
// import { ReactComponent as Health } from './images/health.svg';
// import { ReactComponent as Work } from './images/work.svg';
// import { ReactComponent as Grocery } from './images/grocery.svg';
// import { ReactComponent as Home } from './images/home.svg';
// import { ReactComponent as Lifestyle } from './images/lifestyle.svg';
import CategoryListItem from './CategoryListItem';

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
      {/* <CategoryListItem category='Health' Icon={Health} chooseCategory={chooseCategory}/>
      <CategoryListItem category='Work' Icon={Work} chooseCategory={chooseCategory}/>
      <CategoryListItem category='Grocery' Icon={Grocery} chooseCategory={chooseCategory}/>
      <CategoryListItem category='Home' Icon={Home} chooseCategory={chooseCategory}/>
      <CategoryListItem category='Lifestyle' Icon={Lifestyle} chooseCategory={chooseCategory}/> */}
    </div> 
  )
}

 export default CategoryList;