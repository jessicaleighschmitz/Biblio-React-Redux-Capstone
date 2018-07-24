import constants from './../constants';
const { initialState, types } = constants;

// const selectedBookReducer = (state = initialState, action) => {
//   return state;
// };
//
// export default selectedBookReducer;

export default (state = initialState.selectedBook, action) => {

  switch (action.type) {
  case 'SELECT_BOOK':
    let newState = action.newSelectedBookId;
    return newState;
  default:
    return state;
  }
};

// const selectedBookReducer = (state = initialState, action) => {
//   switch (action.type) {
//   case types.SELECT_BOOK:
//     let newState = {
//       bookList: initialState.bookList,
//       selectedBook: action.newSelectedBookId,
//     };
//     return newState;
//   default:
//     return state;
//   }
// };
//
// export default selectedBookReducer;

// const lyricChangeReducer = (state = initialState.songsById, action) => {
//   let newSongsByIdEntry;
//   let newSongsByIdStateSlice;
//   switch (action.type) {
//   case types.NEXT_LYRIC:
//     const newArrayPosition = state[action.currentSongId].arrayPosition + 1;
//     newSongsByIdEntry = Object.assign({}, state[action.currentSongId], {
//       arrayPosition: newArrayPosition
//     });
//     newSongsByIdStateSlice = Object.assign({}, state, {
//       [action.currentSongId]: newSongsByIdEntry
//     });
//     return newSongsByIdStateSlice;
//   case types.RESTART_SONG:
//     newSongsByIdEntry = Object.assign({}, state[action.currentSongId], {
//       arrayPosition: 0
//     });
//     newSongsByIdStateSlice = Object.assign({}, state, {
//       [action.currentSongId]: newSongsByIdEntry
//     });
//     return newSongsByIdStateSlice;
//   default:
//     return state;
//   }
// };
//
// export default lyricChangeReducer;
