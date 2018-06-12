import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/Routes';
import registerServiceWorker from './services/registerServiceWorker';


/**
 * CSS Components
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(<Routes/>, document.getElementById('main'));
registerServiceWorker();
