import { combineReducers } from 'redux';

import weatherState from './weatherState';

const rootReducer = combineReducers({
    weatherState,
});

export default rootReducer;
