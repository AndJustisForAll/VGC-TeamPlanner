import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';

// import root reducer
import rootReducer from './reducers/index';


//load default data
import nationalDex from './data/nationalDex';
let team = [];

//create default data store
const defaultStore = {
  team,
  nationalDex
}

const store = createStore(rootReducer, defaultStore);

export default store;
