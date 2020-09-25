import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import StarRating from './StarRating';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="grid-item card">
      <Link to={`${recipe?.id}`}>
        <div>
          <img src={recipe?.image} alt="Avatar" className="image" />
          <div className="title">
            <h4>
              <b>{recipe?.headline}</b>
            </h4>
            <p>{recipe?.name}</p>
          </div>
        </div>
      </Link>
      <hr />
      <div className="wrapper">
        <p className="title">Calories: {recipe?.calories}</p>
        <p className="title">
          {recipe?.time?.replace('PT', '0:').replace('M', ' min')}{' '}
        </p>
      </div>
      <div className="title">
        <StarRating size={25} />
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    headline: PropTypes.string,
    time: PropTypes.string,
  }),
};

export default RecipeCard;
