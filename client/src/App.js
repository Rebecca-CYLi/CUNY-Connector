// import React from 'react';
// import './App.css';
// import SababaForm from './Form.js';
// function App() {
//   return (
//     <div className="App">
//         <SababaForm />
//     </div>
//   );
// }
// export default App;

import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route,
  Switch, Link
} from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Home from "./Home";
import Match from "./Match";
// import { render } from 'react-dom';

import { connect } from 'react-redux';
import store from './redux/store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  render() {
    const { isActive } = store.getState().isActive;
    // const {isActive} = this.state;
    console.log("from APP, isActive: " + isActive);

    return (
      <div className="App">
        <Router>
          <div>
            <Navbar sticky="top" bg="light" variant="light">
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src="https://cunystartups.com/wp-content/uploads/2019/06/cropped-CS-logo-trans-1.png"
                  width="auto"
                  height="50"
                  className="d-inline-block align-top"
                />{' '}
              </Navbar.Brand>

              <Navbar.Collapse>
                <Nav className="auto">
                  <NavItem eventkey={1} href="/">
                    <Nav.Link as={Link} to="/Home" >Home</Nav.Link>
                  </NavItem>
                  <NavItem eventkey={2} href="/">
                    <Nav.Link as={Link} to="/Login" >Log In</Nav.Link>
                  </NavItem>
                  <NavItem eventkey={3} href="/">
                    <Nav.Link as={Link} to="/Signup" >Sign Up</Nav.Link>
                  </NavItem>

                  {isActive ?
                    <NavItem eventkey={4} href="/">
                      <Nav.Link as={Link} to="/Match" >Match</Nav.Link>
                    </NavItem>
                    : null}


                  {/* <NavItem eventkey={5} href="/">
                    <Nav.Link as={Link} to="/Profile" >Profile</Nav.Link>
                  </NavItem> */}


                </Nav>
              </Navbar.Collapse>

            </Navbar>
          </div>

          <div>
            <Switch>
              <Route exact path="/Home">
                <Home />
              </Route>
              <Route exact path="/Login">
                <Login />
              </Route>
              <Route exact path="/Signup">
                <Signup />
              </Route>
              <Route exact path="/Profile">
                <Profile />
              </Route>
              {/* <Route exact path="/reduxProfile">
                <ReduxProfile />
              </Route> */}
              <Route exact path="/Match">
                <Match />
              </Route>
            </Switch>
          </div>

        </Router>
      </div>
    );
  }
}


export default App;