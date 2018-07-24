import constants from './../constants';
const { initialState, types } = constants;

export default (state = initialState.bookList, action) => {

  let newReadBook;

  switch (action.type) {
  case 'READ_BOOK':
    let newState = Object.assign({}, state[action.id],{
      read: true,
      lineup: false
    });
    newReadBook = Object.assign({}, state, {
      [action.selectedBook]: newReadBook
    });


    return newReadBook;
  default:
    return state;
  }
};
