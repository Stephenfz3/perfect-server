//Package Imports
import React, { Component } from "react";
import { Link } from "react-router-dom";

//Component Imports
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import menu from "./";
//Middleware Imports
import API from "../utils/API";

class Dashboard extends Component {
  

    constructor(props){
      super(props)
       this.state = [
        menu,
      ]
    
    }
     
    

  componentDidMount() {

  }

  loadBooks = () => {

  };

  deleteBook = id => {

  };

  handleInputChange = event => {

  };

  handleFormSubmit = event => {

  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
