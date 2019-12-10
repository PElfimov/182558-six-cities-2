import {combineReducers} from "redux";
import localData from './reducer/local-data/local-data';
import externalData from './reducer/external-data/external-data';

export default combineReducers({
  localData,
  externalData
});

