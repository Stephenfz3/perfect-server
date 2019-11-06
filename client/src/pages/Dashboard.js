//Package Imports
import React, { Component } from "react";
import { Link } from "react-router-dom";

//Component Imports
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

//Middleware Imports
import API from "../utils/API";

class Dashboard extends Component {
  state = {

  };

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
              <h1>Perfect Server</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
