import constants from './../../src/constants';
import selectedBookReducer from './../../src/reducers/selectedBookReducer';
import {initialState} from './../../src/constants/InitialState';
// // import songChangeReducer from './../../src/reducers/songChangeReducer';
// import changeListReducer from './../../src/reducers/selectedBookReducer';
import rootReducer from './../../src/reducers/';
import { createStore } from 'redux';

// const { initialState } = constants;
// const store = createStore(selectedBookReducer, bookList);

describe('rootReducer', () => {

    test('Should return default state if no action type is recognized', () => {
      expect(rootReducer({}, { type: null })).toEqual({
        selectedBook: {},
        bookList: {initialState}
      });
    });


});

// describe('Karaoke App', () => {
//
//   describe('lyricChangeReducer', () => {
//     it('Should accept and return initial state.', () => {
//       expect(lyricChangeReducer(initialState.songsById, { type: null })).toEqual(initialState.songsById);
//     });
//
//     it('Should update currently-displayed lyric of song', () => {
//       expect(lyricChangeReducer(initialState.songsById, { type: 'NEXT_LYRIC', currentSongId: 2 })[2].arrayPosition).toEqual(initialState.songsById[2].arrayPosition + 1);
//     });
//
//     it('Should restart song', () => {
//       expect(lyricChangeReducer(initialState.songsById, { type: 'RESTART_SONG', currentSongId: 1 })[1].arrayPosition).toEqual(0);
//     });
//   });
//
//   describe('songChangeReducer', () => {
//     it('Should accept and return initial state.', () => {
//       expect(songChangeReducer(initialState, { type: null })).toEqual(initialState);
//     });
//
//     it('Should change selectedSong.', () => {
//       expect(songChangeReducer(initialState, { type: 'CHANGE_SONG', newSelectedSongId: 1 })).toEqual(1);
//     });
//   });
//
//   describe('rootReducer', () => {
//     it('Should accept and return initial state.', () => {
//       expect(rootReducer(initialState, { type: null })).toEqual(initialState);
//     });
//
//     it('Should contain logic from both reducers.', () => {
//       expect(store.getState().currentSongId).toEqual(songChangeReducer(undefined, { type: null }));
//       expect(store.getState().songsById).toEqual(lyricChangeReducer(undefined, { type: null }));
//     });
//   });
//
// });
