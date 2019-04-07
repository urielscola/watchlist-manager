/* eslint-disable no-case-declarations */
import { Reducer } from 'redux';
import { FilterTypes, FilterState } from './types';

import genres from '../../data/tags.json';
import animes from '../../data/animes.json';

const INITIAL_STATE: FilterState = {
  genres,
  activeGenres: [],
  name: '',
  animes,
  filteredAnimes: []
};

const reducer: Reducer<FilterState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilterTypes.SET_INITIAL_ANIMES:
      return { ...state, animes: action.payload };
    case FilterTypes.SET_FILTERED_ANIMES:
      return { ...state, filteredAnimes: action.payload };
    case FilterTypes.ADD_GENRE:
      return {
        ...state,
        activeGenres: [...state.activeGenres, action.payload]
      };
    case FilterTypes.REMOVE_GENRE:
      return {
        ...state,
        activeGenres: [
          ...state.activeGenres.slice(0, action.payload),
          ...state.activeGenres.slice(action.payload + 1)
        ]
      };
    case FilterTypes.FILTER_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default reducer;
