/**
 * Action types
 */
export enum FilterTypes {
  ADD_GENRE = '@filters/ADD_GENRE',
  REMOVE_GENRE = '@filters/REMOVE_GENRE',
  FILTER_NAME = '@filters/FILTER_NAME',
  SET_INITIAL_ANIMES = '@filters/SET_INITIAL_ANIMES',
  SET_FILTERED_ANIMES = '@filters/SET_FILTERED_ANIMES',
  SET_INITIAL_GENRES = '@filters/SET_INITIAL_GENRES'
}

/**
 * State type
 */

export interface Anime {
  readonly name: string;
  readonly image: string;
  readonly episodes: string;
  readonly description: string;
  readonly genres: string[];
  readonly watched: boolean;
}

export interface FilterState {
  readonly genres: string[];
  readonly activeGenres: string[];
  readonly name: string;
  readonly animes: Anime[];
  readonly filteredAnimes: Anime[];
}
