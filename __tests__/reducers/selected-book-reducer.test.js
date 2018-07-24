import selectedBookReducer from './../../src/reducers/selectedBookReducer';

describe('selectedBookReducer', () => {
  console.log('MADE IT HERE');
  test('Should accept and return initial state.', () => {
    expect(selectedBookReducer(initialState.selectedBook,{ type: null })).toEqual(initialState.selectedBook);
  });
  test('Should record which book has been selected by user', () => {
    expect(selectedBookReducer({}, {type: 'SELECT_BOOK', bookId: 1})).toEqual(1);
  });
});
