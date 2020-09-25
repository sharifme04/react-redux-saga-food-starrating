import React from 'react';
import PropTypes from 'prop-types';

import RecipeCard from './RecipeCard';

const RecipeOverview = ({ recipes, isLoading }) => {
  return (
    <div className="container">
      <h1>Recipe App</h1>
      <hr />
      {isLoading ? (
        <div className="loader-outer">
          <div className="loader" />
        </div>
      ) : (
        <div className="grid-container">
          {recipes?.map(recipe => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </div>
      )}
    </div>
  );
};

RecipeOverview.propTypes = {
  recipes: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default RecipeOverview;
