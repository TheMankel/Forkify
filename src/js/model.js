import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { RES_PER_PAGE } from './config';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

export const loadRecipe = async function (id) {
  try {
    const res = await fetch(`${API_URL}${id}`);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} Status code: ${res.status}`);

    console.log(data);
  } catch (err) {
    throw err;
  }
};
