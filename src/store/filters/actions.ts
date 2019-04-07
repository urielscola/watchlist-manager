import { FilterTypes, Anime } from './types';

export const addGenre = (payload: string) => ({
  type: FilterTypes.ADD_GENRE,
  payload
});

export const removeGenre = (payload: number) => ({
  type: FilterTypes.REMOVE_GENRE,
  payload
});

export const filterName = (payload: string) => ({
  type: FilterTypes.FILTER_NAME,
  payload
});

export const setInitialAnimes = (payload: Anime[]) => ({
  type: FilterTypes.SET_INITIAL_ANIMES,
  payload
});

export const setInitialGenres = (payload: string[]) => ({
  type: FilterTypes.SET_INITIAL_GENRES,
  payload
});

export const setFilteredAnimes = (payload: Anime[]) => ({
  type: FilterTypes.SET_FILTERED_ANIMES,
  payload
});
