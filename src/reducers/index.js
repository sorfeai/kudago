import { combineReducers } from 'redux';

import appReducer from './app';
import eventsReducer from './events';


const rootReducer = combineReducers({
  app: appReducer,
  events: eventsReducer,
});


export default rootReducer;
