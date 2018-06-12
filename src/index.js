import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IndexHome from './scenes/Home/IndexHome';
import registerServiceWorker from './services/registerServiceWorker';

//CSS Components
import 'bootstrap/dist/css/bootstrap.min.css';

// Website datas
var siteName = 'Roggeo';

ReactDOM.render(siteName, document.querySelector('head title'));
ReactDOM.render(<IndexHome />, document.getElementById('main'));
registerServiceWorker();
