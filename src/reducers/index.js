import { combineReducers } from 'redux';
import selectedBookReducer from './selectedBookReducer';
import bookListReducer from './bookListReducer';
// import songChangeReducer from './songChangeReducer';
// import lyricChangeReducer from './lyricChangeReducer';

const rootReducer = combineReducers({
  selectedBook: selectedBookReducer,
  bookList: bookListReducer
});

export default rootReducer;
