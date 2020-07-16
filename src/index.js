import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';



import './index.css';
import App from './App';

import airReducer from './store/reducers/air';

const rootReducer = combineReducers({
	air: airReducer,
});

const store = createStore(rootReducer);

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
