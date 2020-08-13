// import React, { Component } from 'react';
import React from 'react';
// import { connect } from 'react-redux';
import store from './redux/store';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Profile extends React.Component {
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
        const { firstName, lastName } = this.state;
        const { email} = store.getState();
        return (
            <div>

                <div className="container main-secction">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 image-section">
                            <h2>Welcome, you are now logged in!</h2>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12 profile-header-section1 text-center ">
                            <a href="/match" className="btn btn-secondary btn-block">Find your match</a>
                        </div>
                        <div className="row user-left-part">
                            <div className="col-md-3 col-sm-3 col-xs-12 user-profil-part pull-left">
                                <div className="row ">
                                    <div className="col-md-12 col-md-12-sm-12 col-xs-12 user-image text-center">
                                        <img src="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png" alt="" className="rounded-circle" />
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12 user-detail-section1 text-center">

                                        <button className="btn btn-secondary btn-block">Upload Photo</button>


                                    </div>
                                    <div className="row user-detail-row">
                                        <div className="col-md-12 col-sm-12 user-detail-section2 pull-left">


                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12 pull-right profile-right-section">
                                <div className="row profile-right-section-row">
                                    <div className="col-md-12 profile-header">
                                        <div className="row">
                                            <div v="col-md-8 col-sm-6 col-xs-6 profile-header-section1 pull-left">

                                                <h1> Name </h1>
                                                <h5>Profession</h5>

                                            </div>


                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <ul className="nav nav-tabs" role="tablist">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" href="#profile" role="tab" data-toggle="tab"><i className="fas fa-user-circle"></i>User Profile</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link active" href="#socialMedia" role="tab" data-toggle="tab"><i className="fas fa-info-circle"></i> Social Media</a>
                                                    </li>

                                                </ul>


                                                <div className="tab-content">
                                                    <div role="tabpanel" className="tab-pane fade show active" id="profile">
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <label>Email</label>
                                                            </div>
                                                            <div className="col-md-6">

                                                                {/* This is where store's email is displayed */}
                                                                <p>{email}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <label>Name</label>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p>{firstName + lastName}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <label>College</label>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p> </p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <label>Year</label>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p> </p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <label>Skills</label>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p> </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 img-main-rightPart">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="row image-right-part">

                                                        </div>
                                                    </div>

                                                    <div className="col-md-12 image-right-detail-section2">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;