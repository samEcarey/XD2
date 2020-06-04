import { combineReducers } from 'redux'
import tablefullReducer from 'appdata/features/tablefull/reducers/tablefullReducer';

export default combineReducers({
  tablefullReducer: tablefullReducer,
});