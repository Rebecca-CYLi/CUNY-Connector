import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Button, Row, Col, } from "react-bootstrap";

class LogIn extends Component{
    render(){
        return(
            <Form >
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Username
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" placeholder="JohnSmith" />
                </Col>

            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-20 characters long and must not contain spaces, special characters, or emoji.
                    </Form.Text>
                </Col>
                <br></br> <br></br>
                <Col>
                    <Button variant="secondary" type="submit">
                        Log in
                    </Button>
                </Col>
            </Form.Group>
        </Form>
        )
    }
}

export default LogIn;