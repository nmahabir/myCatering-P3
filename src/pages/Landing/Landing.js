import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
// import Firebase from "../../components/Firebase";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import images from "../../images.json";
import Card from "../../components/Card";
// import dishes from "../../dishes.json"

class Landing extends Component {
  state = {
    images: images
  };

  componentDidMount() {
    this.loadLanding();
  }

  loadLanding = () => {};

  handleLoadLanding = event => {
    const arrayOfImages = event.target;
    this.setState({
      images: arrayOfImages
    });
  };

  render() {
    return (
      <Container fluid>
          <Row>
          <h3>All the Yummies!</h3>
          {this.state.images.map(entry => (
            <Card id={entry.id} image={entry.image} name={entry.name}/>
          ))}
          </Row>        
      </Container>
    );
  }
}

export default Landing;
