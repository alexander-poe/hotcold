
require('babel-polyfill');

import ReactDOM from 'react-dom'
import React from 'react'
import {Provider} from 'react-redux';
import store from './store'
import MainContainer from './components/'

store.subscribe(() => console.log(store.getState()));

const d = document.getElementById('app');

ReactDOM.render(
	<Provider store={ store }>
		<MainContainer />
	</Provider>, d
);

store.dispatch(actions.newGame());
