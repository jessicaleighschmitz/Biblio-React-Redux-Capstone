import { combineReducers } from 'redux';
import selectedBookReducer from './selectedBookReducer';
// import songChangeReducer from './songChangeReducer';
// import lyricChangeReducer from './lyricChangeReducer';

const rootReducer = combineReducers({
  selectedBook: selectedBookReducer
});

export default rootReducer;
