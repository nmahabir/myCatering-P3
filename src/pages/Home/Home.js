import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
// import Firebase from "../../components/Firebase";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import images from "../../images.json";
import specials from "../../specials.json";
import Card from "../../components/Card";
// import dishes from "../../dishes.json"

class Home extends Component {
  state = {
    // images: images,    
    specials: specials
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
         <h3>Specials: </h3>
          {this.state.specials.map(entry => (
            <Card id={entry.id} image={entry.image} name={entry.name}/>
          ))}
        </Row>

        <Row>
          <h3>All Dishes: </h3>
          {this.state.images.map(entry => (
            <Card id={entry.id} image={entry.image} name={entry.name}/>
          ))}
        </Row>


        
        
      </Container>

    );
  }
}

export default Home;
