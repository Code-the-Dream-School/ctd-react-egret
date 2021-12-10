const CategoryListItem = ({category, icon, chooseCategory, index}) => {
  return (
    <div className="category" onClick={() => chooseCategory(index)}>
      <img src={icon[0].url} alt={category} style={{height:"100px", width:"100px"}}/>
      <div>{category}</div>
    </div>
  )
}

export default CategoryListItem;