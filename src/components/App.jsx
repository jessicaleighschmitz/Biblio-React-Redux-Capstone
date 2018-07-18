import React from 'react';
import LandingPage from './LandingPage';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';



class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/home' component={Home} />

        </Switch>
      </div>
    );

  }
}

export default App;
