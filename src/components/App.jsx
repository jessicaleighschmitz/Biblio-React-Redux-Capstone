import React from 'react';
import LandingPage from './LandingPage';
import {Switch, Route} from 'react-router-dom';
// import BookListContainer from './BookListContainer';
import Home from './Home';
import BookShelf from './BookShelf';
import Search from './Search';
import LineUp from './LineUp';




function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={Home} />
        <Route path='/bookshelf' component={BookShelf} />
        <Route path='/search' component={Search} />
        <Route path='/lineup' component={LineUp} />
      </Switch>
    </div>
  );
}


export default App;
