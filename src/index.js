import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routers/router';
import './sass/index.scss'

import { store } from './services/store'
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router/>
    </Provider>
);
