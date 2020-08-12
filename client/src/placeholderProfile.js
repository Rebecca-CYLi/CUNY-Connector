import React, { Component } from 'react';
const API = 'https://up076quzuj.execute-api.us-east-1.amazonaws.com/dev';
// const getbyEmail = window.location.pathname;
//get by email = dynamic email
//User endpoints = {:email};

// const getbyEmail = '/users/:email/';
const getbyEmail = '/users/';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email:'',
          password:'',
          firstName:'',
          lastName:''
        };
      }
     
    componentDidMount() {
        fetch(API + getbyEmail + `${this.props.email}`)
        .then(response => response.json())
        .then(data => this.setState({ 
            email: data.email, 
            password: data.password, 
            firstName: data.firstName, 
            lastName: data.lastName
            })
        );
    }

    render(){
        const { firstName, lastName } = this.state;
        const { email, password} = this.state;
        // const {email} = this.props.email;
        // const {password} = this.props.password;
        console.log(API + getbyEmail);
        console.log(email);
        console.log(password);

        return(
            <div>
                <p>
                    firstname: {firstName};

                    lastname: `${lastName}`;

                    email: {email};
                    password: {password};
                </p>
            </div>
        );
    }
}


export default Profile;