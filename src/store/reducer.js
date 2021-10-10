import { combineReducers } from 'redux';
import utilsReducer from './utilities/reducer';

const rootReducer = combineReducers({
    
    utils: utilsReducer,
  
})


export default rootReducer;