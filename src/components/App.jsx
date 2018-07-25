import React from 'react';
import LandingPage from './LandingPage';
import {Switch, Route} from 'react-router-dom';
// import BookListContainer from './BookListContainer';
import Home from './Home';
import BookShelf from './BookShelf';
import Search from './Search';
import LineUp from './LineUp';
import AddBook from './AddBook';




function App(){
  return (
    <div>
      <div>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/home' component={Home} />
          <Route path='/bookshelf' component={BookShelf} />
          <Route path='/search' component={Search} />
          <Route path='/lineup' component={LineUp} />
          <Route path='/addBook' component={AddBook} />
        </Switch>
      </div>
      <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Lobster|Montserrat:400,600');
            `}</style>
    </div>
  );
}


export default App;
