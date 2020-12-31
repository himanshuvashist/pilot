import { combineReducers } from 'redux';
import formReducer from '../features/form/reducers/formReducer';
import formTwoReducer from './formTwoReducers';

export const reducers = combineReducers({
  formReducer,
  formTwoReducer,
});
