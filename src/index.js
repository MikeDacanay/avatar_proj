import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {combineReducers, createStore, compose} from 'redux';
import {Provider} from 'react-redux';



import './index.css';
import App from './App';

import airReducer from './store/reducers/air';
import earthReducer from './store/reducers/earth';
import fireReducer from './store/reducers/fire';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
	air: airReducer,
	earth: earthReducer,
	fire: fireReducer,
});

const store = createStore(rootReducer, composeEnhancers());

const app = (
	<Provider store={store}>							
		<BrowserRouter>	
			<App/>
		</BrowserRouter>
	</Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);
