import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { CounterScreen, CalculateScreen } from './Screens';
import Reducer from './Redux/Reducer';

const hamroStore = createStore(Reducer)

export default class App extends Component {
  render() {
    return (
    <Provider store={hamroStore}>
      <CounterScreen />
    </Provider>
    );
  }
}
