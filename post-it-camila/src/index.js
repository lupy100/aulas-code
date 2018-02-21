import React from 'react'
import ReactDOM from 'react-dom'
import Page from './components/page'
import '../dist/css/styles.css';
import '../dist/css/font-awesome.min.css';

ReactDOM.render(
    React.createElement(Page, null), 
    document.getElementById('root')
)