import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from "react-redux";
import redutor from './reducers'
import Page from './components/page'

import '../dist/css/styles.css';
import '../dist/css/font-awesome.min.css';

let store = createStore(redutor)

ReactDOM.render(
  <Provider>
    <Page />
  </Provider>,
  document.getElementById('root')
)