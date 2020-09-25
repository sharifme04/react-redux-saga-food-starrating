import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { recipesRequest } from './app/actions/recipes';
import RecipeOverview from './app/components/RecipeOverview';
import RecipeDetails from './app/components/RecipeDetails';
/*
 We encourage our candidates to over-engineer,
 so please feel free to use any other styling methodology
 e.g., Emotion, Fela, SASS, etc.
 */
import './App.css';

function App() {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes);
  useEffect(
    () => {
      dispatch(recipesRequest());
    },
    [dispatch]
  );

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => <RecipeOverview {...recipes} {...props} />}
      />
      <Route
        path="/:id"
        render={props => <RecipeDetails {...recipes} {...props} />}
      />
    </Switch>
  );
}

export default App;
