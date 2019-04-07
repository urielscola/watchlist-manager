import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { FilterState } from './filters/types';

import rootReducer from './reducers';

export interface ApplicationState {
  filters: FilterState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools()
);

export default store;
