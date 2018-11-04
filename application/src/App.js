import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import axios from 'axios';

import "./App.css";

class App extends Component {

  state = {
    message: ""
  }



  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  readData() {
    var accessToken =  localStorage.getItem('access_token');




var config = {
  headers: { 'Access-Control-Allow-Origin': '*','Authorization': `Bearer ${accessToken}` }
}

    
    axios.get('http://localhost:5000/api/intersite/premiumcontent',  config )
      .then(response => this.setState({ message: response.data.message }))
      .catch(error => this.setState({ message: error.message }));
  }


  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Not Pied Piper</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, "home")}
            >
              Home
            </Button>
            {!isAuthenticated() && (
              <Button
                id="qsLoginBtn"
                bsStyle="primary"
                className="btn-margin"
                onClick={this.login.bind(this)}
              >
                Log In
              </Button>
            )}
            {isAuthenticated() && (
              <Button
                id="qsLogoutBtn"
                bsStyle="primary"
                className="btn-margin"
                onClick={this.logout.bind(this)}
              >
                Log Out
              </Button>
            
            )}
            {isAuthenticated() && (
              <Button
                id="qsLogoutBtn"
                bsStyle="primary"
                className="btn-margin"
                onClick={this.readData.bind(this)}
              >
                Get Data
              </Button>
            
            )}


  






          </Navbar.Header>
        </Navbar>
      </div>




    );
  }
}

export default App;
