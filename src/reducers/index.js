import { combineReducers } from 'redux';
import selectedBookReducer from './selectedBookReducer';
import bookListReducer from './bookListReducer';
import modalToggleReducer from './modalToggleReducer';
// import songChangeReducer from './songChangeReducer';
// import lyricChangeReducer from './lyricChangeReducer';

const rootReducer = combineReducers({
  selectedBook: selectedBookReducer,
  bookList: bookListReducer,
  modalToggle: modalToggleReducer
});

export default rootReducer;
