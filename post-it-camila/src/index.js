import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/main';

// Virtual DOM
// 1º Page
// 2º Element DOM que vai insirir

ReactDOM.render(React.createElement(Main, null),
  document.getElementById('root')
)