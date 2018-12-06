import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import Firebase from "../../components/Firebase";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import images from "../../images.json";
import Card from "../../components/Card";
import dishes from "../../dishes.json"

class Home extends Component {
  state = {
    images: images
  };

  componentDidMount() {
    this.loadHome();
  }

  loadHome = () => {};

  handleLoadHome = event => {
    const arrayOfImages = event.target;
    this.setState({
      foodImage: arrayOfImages
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          </Row>
          <Row>
          {this.state.images.map(entry => (
            <Card id={entry.id} image={entry.image} name={entry.name}/>
          ))}
          </Row>


          <Col size="md-6 sm-12">
            {/* <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron> */}
          </Col>
        
      </Container>

    );
  }
}

export default Home;
