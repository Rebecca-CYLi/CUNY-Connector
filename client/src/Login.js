import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Button, Row, Col } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
// import store from './redux/store';
import { addEmail, showMatchnProfile } from "./redux/actions/index";


function mapStoreToProps(store) {
    return {
        isActive: store.isActive
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addEmail: email => dispatch(addEmail(email)),
        showMatchnProfile: isActive => dispatch(showMatchnProfile(isActive))
    };
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { //gets updated here
            email: '',
            password: '',
            isActive: false
        };
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state);
    }

    submitForm = (e) => {
        e.preventDefault();
        const { email } = this.state;
        this.props.addEmail(email);

        let active = !this.state.isActive;
        this.props.showMatchnProfile(active);

        this.props.history.push('/Profile'); // <--- The page you want to redirect your user to.
    }

    render() {
        return (
            <div>
                <section className="Login">
                    <h3 id="login">Log In</h3>
                    <br></br><br></br>
                    <Form onSubmit={this.submitForm.bind(this)}>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" name="email"
                                    placeholder="JohnSmith@gmail.com" required
                                    onChange={this.handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword" >
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" name="password"
                                    placeholder="Password" required onChange={this.handleChange} />
                                <Form.Text id="passwordHelpBlock" muted>
                                    Your password must be 8-20 characters long and must not contain
                                    spaces, special characters, or emoji.
                                </Form.Text>
                            </Col>
                            <br></br> <br></br> <Col>

                                <Button variant="secondary" type="submit">
                                    Log in
                                </Button>

                            </Col>
                        </Form.Group>
                    </Form><br></br><br></br>
                </section>
            </div>
        );
    }
}


const LoginForm = connect(mapStoreToProps, mapDispatchToProps)(Login);
export default withRouter(LoginForm);