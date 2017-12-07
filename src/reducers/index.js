import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//import reducers
import team from './team';
import nationalDex from './nationalDex';


const rootReducer = combineReducers({ team, nationalDex, routing: routerReducer});

export default rootReducer;
