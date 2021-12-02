const CategoryListItem = ({category}) => {

  return (
    <div class="category" onClick={(e) => e}>
      {category}
    </div>
  )
}
  
export default CategoryListItem;