import React from 'react';
import IndexHome from './../scenes/Home/IndexHome';
import IndexAbout from './../scenes/About/IndexAbout';
import IndexContact from './../scenes/Contact/IndexContact';
import NotFound from './../scenes/Error/404/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


/**
 * Routes configurations
 */
class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={IndexHome}/>
                    <Route path='/about' component={IndexAbout}/>
                    <Route path='/contact' component={IndexContact}/>
                    <Route path="/*" component={NotFound} />                    
                </Switch>
            </Router>
        );
    }
}

export default Routes;