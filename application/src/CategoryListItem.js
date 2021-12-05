const CategoryListItem = ({category, Icon}) => {

  return (
    <div className="category" onClick={(e) => e}>
      <Icon height="100px" width="100px"/>
      <div>{category}</div>
    </div>
  )
}

export default CategoryListItem;