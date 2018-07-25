import constants from './../constants';
const { initialState, types } = constants;

export default (state = initialState.bookList, action) => {

  let newReadBook;
  let newLineUpBook;

  switch (action.type) {
  case 'READ_BOOK':
    let newState = Object.assign({}, state[action.id],{
      read: true,
      lineup: false
    });
    newReadBook = Object.assign({}, state, {
      [action.id]: newState
    });
    return newReadBook;
    case 'WANT_TO_READ':
    let lineUpState = Object.assign({}, state[action.id],{
      read: false,
      lineup: true
    });
    newLineUpBook = Object.assign({}, state, {
      [action.id]: lineUpState
    });
    return newLineUpBook;
  default:
    return state;
  }
};
