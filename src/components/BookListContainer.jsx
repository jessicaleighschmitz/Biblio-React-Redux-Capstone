// import React from 'react';
// import Home from './Home';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
//
// function BookListContainer(props){
//   return (
//     <div>
//       console.log(props);
//       <div>
//         {Object.keys(props.selectedBook.bookList).map(function(bookId){
//           let book = props.selectedBook.bookList[bookId];
//           console.log(book);
//           return <Home
//             title={book.title}
//             image={book.image}
//             author={book.author}
//             key={bookId}
//             id={bookId}
//           />;
//         })}
//       </div>
//     </div>
//   );
// }
//
// BookListContainer.propTypes = {
//   title: PropTypes.string,
//   author: PropTypes.string,
//   year: PropTypes.number,
//   image: PropTypes.string,
//   read: PropTypes.bool,
//   readingNow: PropTypes.bool,
//   blurb: PropTypes.string,
//   key: PropTypes.string,
//   id: PropTypes.string,
// };
//
// const mapStateToProps = state => {
//   return {
//     selectedBook: state.selectedBook,
//   };
// };
//
// export default connect(mapStateToProps)(BookListContainer);
