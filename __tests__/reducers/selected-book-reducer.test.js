import selectedBookReducer from './../../src/reducers/selectedBookReducer';

describe('selectedBookReducer', () => {
  test('Should accept and return initial state.', () => {
    expect(selectedBookReducer(initialState.booksById,{ type: null })).toEqual(initialState.booksById);
  });
  test('Should record which book has been selected by user', () => {
    expect(selectedBookReducer({}, {type: 'SELECT_BOOK', bookId: 1})).toEqual(1);
  });
});
