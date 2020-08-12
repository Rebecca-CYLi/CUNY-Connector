import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
class Match extends React.Component {
    render() {
        return (

            <div>
                <Form>
                    <h6>I'm looking for:</h6> <br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4" required>

                            <img src="https://static.thenounproject.com/png/962492-200.png" width="auto" height="50px" alt="" />

                            <input type="checkbox" id="developer2" name="search"></input>
                            <label htmlFor="developer">Developer</label>
                        </div>
                        <div className="form-group col-md-4">

                            <img src="https://cdn2.iconfinder.com/data/icons/computer-63/100/People-Desk-02-512.png" width="auto" height="50px" alt="" />

                            <input type="checkbox" id="designer2" name="search"></input>
                            <label htmlFor="designer">Designer</label>

                        </div>
                        <div className="form-group col-md-4">

                            <img src="https://static.thenounproject.com/png/693589-200.png" width="auto" height="50px" alt="" />

                            <input type="checkbox" id="marketer2" name="search"></input>
                            <label htmlFor="marketer">Marketer</label>

                        </div>

                    </div><br></br><br></br>

                    <h6>In order to:</h6> <br></br>
                    <div className="form-row">
                        <div className="form-group col-md-3" required>

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

                    </div><br></br><br></br>
                    <Button variant="secondary" type="submit" >
                        Submit
  </Button>
                </Form>
            </div>
        );
    }
}
export default Match;