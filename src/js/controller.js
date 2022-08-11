import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

const controlRecipes = async function () {
  const id = window.location.hash.slice(1);

  if (!id) return;

  recipeView.renderSpinner();

  await model.loadRecipe(id);

  recipeView.render(model.state.recipe);
};

const controlSearchResults = async function () {
  const query = searchView.getQuery();
  console.log(query);

  if (!query) return;
  await model.loadSearchResults(query);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
