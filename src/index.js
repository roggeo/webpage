import React from 'react';
import ReactDOM from 'react-dom';
import IndexHome from './scenes/Home/IndexHome';
import IndexAbout from './scenes/About/IndexAbout';
import NotFound from './scenes/Error/404/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './services/registerServiceWorker';


/**
 * CSS Components
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


/**
 * Web site name title
 */
var siteName = 'Roggeo';


/**
 * Routes configurations
 */
class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={IndexHome}/>
                    <Route path='/about' component={IndexAbout}/>
                    <Route path="/*" component={NotFound} />
                </Switch>
            </Router>
        );
    }
}


ReactDOM.render(siteName, document.querySelector('head title'));
ReactDOM.render(<App/>, document.getElementById('main'));
registerServiceWorker();
