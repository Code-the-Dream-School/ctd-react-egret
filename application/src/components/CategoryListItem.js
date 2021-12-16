import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryListItem = ({category, icon, chooseCategory, index, id}) => {
// console.log(index)
  return (
    <Link to={`/${category}`}>
      <div className="category" onClick={() => chooseCategory(index, id)}>
        <img src={icon[0].url} alt={category} style={{height:"100px", width:"100px"}}/>
        <div>{category}</div>
      </div>
    </Link>
  )
}

CategoryListItem.propTypes = {
  category: PropTypes.string,
  icon: PropTypes.array,
  index: PropTypes.number,
  chooseCategory: PropTypes.elementType
};

export default CategoryListItem;