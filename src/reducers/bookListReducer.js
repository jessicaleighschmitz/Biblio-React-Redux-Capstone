import constants from './../constants';
const { initialState, types } = constants;

export default (state = initialState.bookList, action) => {

  switch (action.type) {
  // case 'MOVE_BOOK':
    // let newState = Object.assign({}, state, {
    //   bookList: initialState.bookList,
    //   selectedBook: action.newSelectedBookId,
    //   modalIsOpen: action.modalIsOpen,
    // });
    // return newState;
  default:
    return state;
  }
};
