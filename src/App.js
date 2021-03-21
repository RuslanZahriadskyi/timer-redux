import React from 'react';
import CounterView from './views/CounterView';
import actions from './redux/counter/counter-actions';
import store from './redux/store';

// console.log(store.dispatch(actions.increment(5)));

const App = () => (
  <>
    <CounterView />
  </>
);

export default App;
