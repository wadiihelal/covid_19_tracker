import React , { Component } from 'react';
import './App.css';
import wadi from './components/wadi';
import store from './store';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CoronaStatisticsProvider from './components/statistics/CoronaStatisticsProvider';
import MapProvider from './components/map/MapProvider';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
       
        <MapProvider/>
        <CoronaStatisticsProvider/>
      </Provider>
    );
  }
}