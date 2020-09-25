/* eslint eqeqeq: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft } from 'react-icons/fa';

import StarRating from './StarRating';

const RecipeDetails = ({ recipes, match, history }) => {
  const details = recipes?.filter(recipe => recipe.id == match.params.id)[0];
  return (
    <div className="details-container">
      <img src={details?.image} alt="Avatar" className="imageDetails" />
      <button type="button" onClick={() => history.push('/')}>
        <FaArrowLeft /> Back
      </button>
      <div className="title">
        <h4>{details?.headline}</h4>
        <StarRating size={40} />
        <p>
          <b>{details?.name}</b>
        </p>
        <p>{details?.description}</p>
        <hr />
        <p>
          <b>Ingredients</b>
        </p>
        <ul>{details?.ingredients.map(e => <li key={e}>{e}</li>)}</ul>
        <hr />
        <p>
          <b>Calories:</b> {details?.calories}
        </p>
        <p>
          <b>Protiens:</b> {details?.proteins}
        </p>
        <p>
          <b>Fats: </b>
          {details?.fats}
        </p>
        <p>
          <b>Carbs: </b>
          {details?.carbos}
        </p>
        <p>
          <b>Preparation time: </b>
          {details?.time?.replace('PT', '0:').replace('M', ' min')}{' '}
        </p>
      </div>
    </div>
  );
};

RecipeDetails.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.string,
      headline: PropTypes.string,
      description: PropTypes.string,
      ingredients: PropTypes.array,
      calories: PropTypes.string,
      proteins: PropTypes.string,
      fats: PropTypes.string,
      carbos: PropTypes.string,
      time: PropTypes.string,
    })
  ),

  match: PropTypes.object,
};

export default RecipeDetails;
