
// Libraries
import { combineReducers, createStore } from 'redux';
import { loadState, saveState } from './localStorage';

// Reducers
import blacklistReducer from './blacklist';
import likedReducer from './liked';
import dataReducer from './data';
import filtersReducer from './filters';


const reducers = combineReducers({
  blacklist: blacklistReducer,
  liked: likedReducer,
  filters: filtersReducer,
  data: dataReducer,
});

const persistedState = loadState();
const store = createStore(
  reducers,
  persistedState
);

store.subscribe(() => {
  const {
    blacklist,
    liked,
    filters,
    data,
  } = store.getState();

  saveState({
    blacklist,
    liked,
    filters,
    data,
  });
});

export default store;
