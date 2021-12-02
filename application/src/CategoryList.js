import React from 'react'
import CategoryListItem from './CategoryListItem'

function CategoryList({categories}){

  return (
    <div class="categories">
      {categories.map((category)=>{
        return <CategoryListItem key={category.id} category={category} />
      })}
    </div> 
  )
}

 export default CategoryList;