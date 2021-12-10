import PropTypes from 'prop-types';

const CategoryListItem = ({category, icon, chooseCategory, index}) => {
  console.log(icon)
  return (
    <div className="category" onClick={() => chooseCategory(index)}>
      <img src={icon[0].url} alt={category} style={{height:"100px", width:"100px"}}/>
      <div>{category}</div>
    </div>
  )
}

CategoryListItem.propTypes = {
  category: PropTypes.string,
  icon: PropTypes.array,
  index: PropTypes.number,
  chooseCategory: PropTypes.elementType
};

export default CategoryListItem;