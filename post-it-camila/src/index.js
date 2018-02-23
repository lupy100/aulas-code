import React from 'react';
import ReactDOM from 'reac-dom';
import main from './components/main'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import Main from '/components/page'

let store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('root')
);
