import React from 'react';
import {BrowserRouter as Router, Switch,Link,Route} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import {Navbar, NavbarBrand} from 'reactstrap';
import Login from './Login';
import Register from './Register';
import './Firstpage.css';
function Firstpage(){
    return(
        <Router>
            <div>
            <Navbar dark color = "dark">
                <div className="gallery"> Gallery </div>
            </Navbar>
            </div>

            <Switch>
                <Route exact path='/' component={Register} />
                <Route exact path='/Login' component={Login} />
                <Route exact path='/Register' component={Register} />Register
            </Switch>
        </Router>
    );
}

export default Firstpage;