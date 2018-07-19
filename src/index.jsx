import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import selectedBookReducer from './reducers/selectedBookReducer';
import initialState from './constants/InitialState';


const store = createStore(rootReducer);
//
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

const render = (Component) => {
  ReactDOM.render(
      <HashRouter>
        <Provider store={store}>
          <Component/>
        </Provider>
      </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept(require('./components/App'), () => {
    render(App);
  });
}
