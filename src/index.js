import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IndexHome from './scenes/Home/IndexHome';
import registerServiceWorker from './registerServiceWorker';

var siteName = 'Roggeo';

ReactDOM.render(<IndexHome />, document.getElementById('main'));
registerServiceWorker();
