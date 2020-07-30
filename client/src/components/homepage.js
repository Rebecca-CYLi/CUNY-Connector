import React, { Component } from 'react';
import './homepage.css';

class Homepage extends Component {
    render(){
        return(
            <div className="home" id="home">
                <h1 className="display-3">CUNY Startup's Connecter</h1>
                <h2 id="headline">Find your match today!</h2>
            </div>
        )
    }
}

export default Homepage;