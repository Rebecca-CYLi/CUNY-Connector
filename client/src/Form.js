import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Button, Row, Col, } from "react-bootstrap";

export default class SababaForm extends Component {
    constructor(props) {
        super(props);
        this.state = { //gets updated here
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this); //when functions are passed, we have to bind 'this'
    }

    handleChange(event) { 
        //when event happens, we look at event value and set the state
        const inputValue = event.target.value;
        const stateField = event.target.name;
        this.setState({
            [stateField]: inputValue,
        });
        console.log(this.state);
    }
    async handleSubmit(event) {
        event.preventDefault();
        const { email, password } = this.state;
        await axios.post(
            'https://pxad05pm4m.execute-api.us-east-1.amazonaws.com/serverlessApp',
            { key1: `${email}, ${password}` }
        );
    }

    render() {
        return (
            <div>
                <h3>Log In</h3>
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
                    <br></br><br></br>
                <h3>Sign Up</h3>

                <Form onSubmit={this.handleSubmit}>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" 
                            onChange={this.handleChange} value={this.state.email} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" 
                            onChange={this.handleChange} value={this.state.password} />
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers, and
                            must not contain spaces, special characters, or emoji.
                        </Form.Text>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="John" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Smith" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>College</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>College Type</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Community College</option>
                                <option>Senior College</option>
                                <option>Graduate School</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row><br></br>

                    <h6>I am a:</h6> <br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="developer">Developer</label>
                            <img src="https://static.thenounproject.com/png/962492-200.png" 
                                 width="auto" height="50px" alt="" />
                            <input type="radio" id="developer" name="search"></input>
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="designer">Designer</label>
                            <img src="https://cdn2.iconfinder.com/data/icons/computer-63/100/People-Desk-02-512.png" 
                                 width="auto" height="50px" alt="" />
                            <input type="radio" id="designer" name="search"></input>
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="marketer">Marketer</label>
                            <img src="https://static.thenounproject.com/png/693589-200.png" width="auto" height="50px" alt="" />
                            <input type="radio" id="marketer" name="search"></input>
                        </div>

                    </div>
                        <br></br><br></br>
                    <div className="form-group col-md-12">
                        <label htmlFor="year">Year:</label>
                        <span id="slider_value2"></span><br></br>
                        <input type="button" value="-" onClick="subtract_one()" />
                        1 <input type="range" min="1" 
                                max="6" step="1" name="sld6" 
                                onChange="show_value2(this.value)" /> 6
                        <input type="button" value="+" onClick="add_one()" />
                    </div>
                    <br></br><br></br>

                    <fieldset>
                        <Row>
                            <Form.Label as="legend">
                                <h6>I'm good at:</h6>
                            </Form.Label><br></br>
                            <Col>
                                <Form.Check inline
                                    type="checkbox"
                                    label="Coding"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                            </Col>

                            {['radio'].map((type) => (
                                <div key={`-${type}`} className="mb-3">
                                    <Form.Check label="Beginner" type={type} id={`-${type}-Beginner`} />
                                    <Form.Check label="Intermediate" type={type} id={`-${type}-Intermidiate`} />
                                    <Form.Check label="Pro" type={type} id={`-${type}-Pro`} />

                                </div>
                            ))}

                            <Col>
                                <Form.Check inline
                                    type="checkbox"
                                    label="Design"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                            </Col>

                            {['radio'].map((type) => (
                                <div key={`-${type}`} className="mb-3">
                                    <Form.Check label="Beginner" type={type} id={`-${type}-Beginner`} />
                                    <Form.Check label="Intermediate" type={type} id={`-${type}-Intermidiate`} />
                                    <Form.Check label="Pro" type={type} id={`-${type}-Pro`} />
                                </div>
                            ))}

                            <Col>
                                <Form.Check inline
                                    type="checkbox"
                                    label="Marketing"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                />
                            </Col>

                            {['radio'].map((type) => (
                                <div key={`-${type}`} className="mb-3">
                                    <Form.Check label="Beginner" type={type} id={`-${type}-Beginner`} />
                                    <Form.Check label="Intermediate" type={type} id={`-${type}-Intermidiate`} />
                                    <Form.Check label="Pro" type={type} id={`-${type}-Pro`} />
                                </div>
                            ))}

                            <Col>
                                <Form.Check inline
                                    type="checkbox"
                                    label="Business"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                />
                            </Col>

                            {['radio'].map((type) => (
                                <div key={`-${type}`} className="mb-3">
                                    <Form.Check label="Beginner" type={type} id={`-${type}-Beginner`} />
                                    <Form.Check label="Intermediate" type={type} id={`-${type}-Intermidiate`} />
                                    <Form.Check label="Pro" type={type} id={`-${type}-Pro`} />
                                </div>
                            ))}
                        </Row>
                    </fieldset>

                    <br></br>

                    <h6>I've got proof:</h6>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Linkedin</Form.Label>
                        <Form.Control type="text" placeholder="www.linkedin.com/in/JohnSmith/" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>GitHub</Form.Label>
                        <Form.Control type="text" placeholder="github.com/JohnSmith" />
                    </Form.Group>

                    <br></br><br></br>

                    <h6>I'm looking for:</h6> <br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <img src="https://static.thenounproject.com/png/962492-200.png" 
                                width="auto" height="50px" alt="" />
                            <input type="checkbox" id="developer" name="search"></input>
                            <label htmlFor="developer">Developer</label>
                        </div>
                        <div className="form-group col-md-4">
                            <img src="https://cdn2.iconfinder.com/data/icons/computer-63/100/People-Desk-02-512.png" 
                                width="auto" height="50px" alt="" />
                            <input type="checkbox" id="designer" name="search"></input>
                            <label htmlFor="designer">Designer</label>
                        </div>
                        <div className="form-group col-md-4">
                            <img src="https://static.thenounproject.com/png/693589-200.png" 
                                width="auto" height="50px" alt="" />
                            <input type="checkbox" id="marketer" name="search"></input>
                            <label htmlFor="marketer">Marketer</label>
                        </div>

                    </div><br></br><br></br>

                    <h6>In order to:</h6> <br></br>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <input type="radio" className="compete" name="purpose"></input>
                            <label htmlFor="compete">Compete in a Hackathon</label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="radio" className="compete" name="purpose"></input>
                            <label htmlFor="compete">Build a Startup</label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="radio" className="compete" name="purpose"></input>
                            <label htmlFor="compete">Compete in a business plan competition</label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="radio" className="compete" name="purpose"></input>
                            <label htmlFor="compete">Work on a group project</label>
                        </div>
                    </div>
                    <br></br><br></br>
                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                </Form>
                <br></br>
            </div>
        );
    }

}
