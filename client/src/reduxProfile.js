import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from './redux/store';
const API = 'https://up076quzuj.execute-api.us-east-1.amazonaws.com/dev';
// const getbyEmail = window.location.pathname;
//get by email = dynamic email
//User endpoints = {:email};

// const getbyEmail = '/users/:email/';
const getbyEmail = '/users/';


const mapStateToProps = state => ({
    email: state.email
});

class ReduxProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        };
    }

    render() {
        console.log("In ReduxProfile = this is the store's state: " + store.getState().email);
        console.log("In ReduxProfile = this is the store's state: " + store.getState().password);
        const {email, password} = store.getState();
        return (
            <div>
                <p>
                {/* firstname: {firstName};

                lastname: `${lastName}`; */}

                email: {email};
                password: {password};
                </p>
            </div>
        );
    }
}

const reduxProf = connect(mapStateToProps)(ReduxProfile);
export default reduxProf;
// export default Profile;