
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
// import LogIn from './login';

class NavBar extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <nav className="navbar sticky-top navbar-light bg-light" id="navbar">

                        {/* CUNY Startups LOGO */}
                        <div className="navbar-brand" href="/homepage">
                            <Link to="/homepage">
                                <img src="https://cunystartups.com/wp-content/uploads/2019/06/cropped-CS-logo-trans-1.png"
                                    className="d-inline-block align-top" width="auto" height="50px" alt="" />
                            </Link>
                        </div>

                        {/* RIGHT SIDE of NavBar */}
                        <div className="navbar-expand" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={"/about"} className="nav-link">
                                        About
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={"/login"} className="nav-link">
                                        Login
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={"/signup"} className="nav-link">
                                        Sign Up
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>

                    </nav>
                </React.Fragment>
            </Router>
        );
    }
}

export default NavBar;