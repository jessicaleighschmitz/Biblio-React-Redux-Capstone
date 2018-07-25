import constants from './../constants';
const { initialState } = constants;

export default (state = initialState.selectedBook, action) => {
  let newState = action.newSelectedBookId;
  switch (action.type) {
  case 'SELECT_BOOK':
    return newState;
  default:
    return state;
  }
};
